import React, { useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import arrow_left from "../assets/images/arrow_left_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from '../assets/images/searchIcon.svg';
import filterIcon from '../assets/images/filterIcon.svg';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../store/slices/articlesSlice.js";
import { getArticlesCategory } from "../store/slices/categorySlice.js";
import { searchArticles } from "../store/slices/articleSearchSlice.js";
import ArticlesNotfound from "../components/articlesNotfound.jsx";

function ArticlesPage(props) {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const handleFilterOpen = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const initialCategories = {
        1: false,
        2: false,
        3: false,
        4: false,
        6: false,
        7: false,
        8: false,
    };

    const categoryMapping = {
        1: "Литература",
        2: "Кино",
        3: "Искусство",
        4: "Психология",
        6: "Музыка",
        7: "Философия",
        8: "История",
    };

    const [categories, setCategories] = useState(initialCategories);
    const [filteredArticles, setFilteredArticles] = useState([]);

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleCheckboxChange = (categoryId) => {
        setCategories({ ...categories, [categoryId]: !categories[categoryId] });
    };

    const handleResetFilters = () => {
        setCategories(initialCategories);
    };
    const [isFilterApplied, setIsFilterApplied] = useState(false);


    const handleApplyFilter = () => {
        setIsFilterOpen(false);

        const selectedCategories = Object.keys(categories).filter(
            (categoryId) => categories[categoryId]
        );

        console.log('Выбранные категории:', selectedCategories);

        if (selectedCategories.length > 0) {
            // Используем выбранные категории для фильтрации
            const filteredArticles = articlesCardsData.filter((article) =>
                selectedCategories.includes(article.category.toString())
            );

            setFilteredArticles(filteredArticles);
            console.log('Отфильтрованные статьи:', filteredArticles);

            setIsFilterApplied(true); // Устанавливаем флаг, что фильтр был применен
        } else {
            alert('Выберите хотя бы одну категорию!');
        }
    };

    const isApplyButtonDisabled = Object.values(categories).every(value => !value);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const dispatch = useDispatch();
    const articlesDataResponse = useSelector((state) => state.articles.data);
    const articlesCardsData = articlesDataResponse.results || [];

    const articlesCategoryResponse = useSelector((state) => state.articlesCategory.data);
    const categoryList = articlesCategoryResponse.results || [];

    const searchArticlesResponse = useSelector((state) => state.searchArticles.data);
    const searchArticlesList = searchArticlesResponse.results || [];

    useEffect(() => {
        dispatch(getArticles());
        dispatch(getArticlesCategory());
    }, []);

    const searchArticle = () => {
        if (searchValue.trim() === '') {
            return;
        }

        dispatch(searchArticles(searchValue));
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const displayedArticles = isFilterApplied
        ? filteredArticles.slice(startIndex, endIndex)
        : (searchArticlesList.length > 0 ? searchArticlesList : articlesCardsData).slice(startIndex, endIndex);
    return (
        <div className='container'>
            <header className={styles.articles__header}>
                <div className={styles.back_btn}>
                    <img className={styles.back_btn_arrow_left} src={arrow_left} alt="arrow_left" onClick={() => navigate('/main')} />
                    <div className={styles.titleWithBackgraund} style={{ minWidth: '215px' }} onClick={() => navigate('/main')}>
                        <p>Все статьи</p>
                    </div>
                </div>
                <div className={styles.articles__searchContent}>
                    <form className={styles.search} onSubmit={(e) => {
                        e.preventDefault();
                        searchArticle();
                    }}>
                        <button type="submit">
                            <img src={searchIcon} alt="search" />
                        </button>
                        <input type="text" placeholder="Поиск статей" value={searchValue} onChange={handleSearchInputChange} />
                    </form>
                    <div className={styles.articles__filterContent}>
                        <div className={styles.filterWrapper}>
                            <button className={styles.articles__filterBtn} onClick={handleFilterOpen}>
                                <img src={filterIcon} alt="filter" />
                            </button>
                            {isFilterOpen && (
                                <div className={styles.filterDropdown}>
                                    <div className={styles.filterHeader}>
                                        <p>Фильтр</p>
                                        <button onClick={handleResetFilters}>Cбросить все</button>
                                    </div>
                                    <div className={styles.checkboxFilter}>
                                        {categoryList.map((category) => (
                                            <div key={category.id}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={categories[category.id]}
                                                        onChange={() => handleCheckboxChange(category.id)}
                                                    />
                                                    {category.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    <button  className={styles.applyFilterBtn} onClick={handleApplyFilter} disabled={isApplyButtonDisabled}>
                                        Применить
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className={styles.articles__cards}>
                {(!searchArticlesList.length && searchValue.trim() !== '') ? (
                    <div>
                        <ArticlesNotfound />
                    </div>
                ) : displayedArticles.map((article) => (
                    <Link to={`/article/${article.id}`} key={article.id} className={styles.articles__card} style={{ backgroundColor: article.backgroundColor }}>
                        <p className={styles.articles__title}>{article.title}</p>
                        <img src={article.image} alt="articlesIcon" />
                        <span className={styles.articles__category}>
                            <p>#{categoryMapping[article.category]}</p>
                            <div className={styles.articles__ellipse}></div>
                            <p>{article.study_time} минут</p>
                        </span>
                    </Link>
                ))}
            </div>

            <Stack spacing={2} sx={{ marginTop: '40px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
                {(!searchArticlesList.length && searchValue.trim() !== '') ? (
                    null
                ) : (
                    <Pagination
                        count={Math.ceil((searchArticlesList.length > 0 ? searchArticlesList : articlesCardsData).length / pageSize)}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                    />
                )}
            </Stack>
        </div>
    );
}

export default ArticlesPage;
