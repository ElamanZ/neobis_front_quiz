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

function ArticlesPage(props) {
    const navigate = useNavigate();

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const handleFilterOpen = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const initialCategories = {
        history: false,
        literature: false,
        philosophy: false,
        psychology: false,
        art: false,
        music: false,
        cinema: false,
    };

    const [categories, setCategories] = useState(initialCategories);

    const handleCheckboxChange = (categoryKey) => {
        setCategories({ ...categories, [categoryKey]: !categories[categoryKey] });
    };

    const handleResetFilters = () => {
        setCategories(initialCategories);
    };

    const handleApplyFilter = () => {
        setIsFilterOpen(false);
        const selectedCategories = Object.keys(categories).filter(
            (category) => categories[category]
        );
        if (selectedCategories.length > 0) {
            console.log('Selected categories:', selectedCategories);
        } else {
            return alert('Выберите хотя бы одну категорию!');
        }
        console.log('Selected categories:', selectedCategories);
    };

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const pageSize = 8;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const dispatch = useDispatch();
    const articlesDataResponse = useSelector((state) => state.articles.data);
    const articlesCardsData = articlesDataResponse.results || [];

    const articlesCategoryResponse = useSelector((state) => state.articlesCategory.data);
    const categoryList = articlesCategoryResponse.results || [];

    useEffect(() => {
        dispatch(getArticles());
        dispatch(getArticlesCategory());
    }, []);

    const currentArticlesData = articlesCardsData.slice(startIndex, endIndex);

    // Функция для проверки, соответствует ли статья выбранным категориям
    const doesArticleMatchCategories = (article) => {
        const selectedCategories = Object.keys(categories).filter(categoryKey => categories[categoryKey]);

        // Проверка, принадлежит ли статья хотя бы одной из выбранных категорий
        return selectedCategories.length === 0 || selectedCategories.includes(article.category.toString());
    };

    // Фильтрация статей на основе выбранных категорий
    const filteredArticles = currentArticlesData.filter(article => doesArticleMatchCategories(article));

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
                    <form className={styles.search}>
                        <button>
                            <img src={searchIcon} alt="search" />
                        </button>
                        <input type="text" placeholder="Поиск статей" />
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
                                            <div key={category.key}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={categories[category.id]}
                                                        onChange={() => handleCheckboxChange(category.key)}
                                                    />
                                                    {category.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    <button className={styles.applyFilterBtn} onClick={handleApplyFilter} disabled={false}>
                                        Применить
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className={styles.articles__cards}>
                {filteredArticles.map((articlesData) => (
                    <Link to={`/article/${articlesData.id}`} key={articlesData.id} className={styles.articles__card} style={{ backgroundColor: articlesData.backgroundColor }}>
                        <p className={styles.articles__title}>{articlesData.title}</p>
                        <img src={articlesData.image} alt="articlesIcon" />
                        <span className={styles.articles__category}>
                            <p>#{articlesData.category}</p>
                            <div className={styles.articles__ellipse}></div>
                            <p>{articlesData.study_time} минут</p>
                        </span>
                    </Link>
                ))}
            </div>

            <Stack spacing={2} sx={{ marginTop: '40px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
                <Pagination
                    count={Math.ceil(articlesCardsData.length / pageSize)}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                />
            </Stack>
        </div>
    );
}

export default ArticlesPage;
