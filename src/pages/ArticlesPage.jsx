import React, {useState} from 'react';
import styles from "./styles.module.scss";
import arrow_left from "../assets/images/arrow_left_icon.svg";
import {useNavigate} from "react-router-dom";
import searchIcon from '../assets/images/searchIcon.svg'
import filterIcon from '../assets/images/filterIcon.svg'
import articlesIcon1 from '../assets/images/articles1.svg'
import articlesIcon2 from '../assets/images/articles2.svg'
import articlesIcon3 from '../assets/images/articles3.svg'
import articlesIcon4 from '../assets/images/articles4.svg'
import articlesIcon5 from '../assets/images/articles5.svg'
import articlesIcon6 from '../assets/images/articles6.svg'
import articlesIcon7 from '../assets/images/articles7.svg'
import articlesIcon8 from '../assets/images/articles8.svg'


function ArticlesPage(props) {
    const navigate = useNavigate()

    const [ellipseVisible, setEllipseVisible] = useState('none')

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

    const categoryList = [
        { key: 'history', label: 'История' },
        { key: 'literature', label: 'Литература' },
        { key: 'philosophy', label: 'Философия' },
        { key: 'psychology', label: 'Психология' },
        { key: 'art', label: 'Искусство' },
        { key: 'music', label: 'Музыка' },
        { key: 'cinema', label: 'Кино' },
    ];

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

    const articlesCardsData = [
        {
            id: 1,
            title: 'Жизнь и правление Наполеона Бонапарта',
            image: articlesIcon1,
            category: 'История',
            backgroundColor: '#FFE0A3'
        },
        {
            id: 2,
            title: 'Философия Аристотеля',
            image: articlesIcon2,
            category: 'Философия',
            backgroundColor: '#CCFFF6'
        },
        {
            id: 3,
            title: 'Почему Чехов не так прост?',
            image: articlesIcon3,
            category: 'Литература',
            backgroundColor: '#FFCCFD'
        },
        {
            id: 4,
            title: 'Почему вы неправильно поняли «Мастера и Маргариту»?',
            image: articlesIcon4,
            category: 'Литература',
            backgroundColor: '#ADD3FF'
        },
        {
            id: 5,
            title: 'Тайны психики: психология глазами эксперта',
            image: articlesIcon5,
            category: 'Психология',
            backgroundColor: '#DAB5FF',
        },
        {
            id: 6,
            title: 'Искусство и его влияние на современное общество',
            image: articlesIcon6,
            category: 'Искусство',
            backgroundColor: '#FFD8A3',
        },
        {
            id: 7,
            title: 'Музыкальные течения: от классики до современности',
            image: articlesIcon7,
            category: 'Музыка',
            backgroundColor: '#CCFFD6',
        },
        {
            id: 8,
            title: 'История кинематографа: от немого до современности',
            image: articlesIcon8,
            category: 'Кино',
            backgroundColor: '#FFCCCB',
        },
    ];

    return (
        <div className='container'>
            <header className={styles.articles__header}>
                <div className={styles.back_btn}>
                    <img className={styles.back_btn_arrow_left} src={arrow_left} alt="arrow_left" onClick={() => navigate('/main')}/>
                    <div className={styles.titleWithBackgraund} style={{minWidth: '215px'}} onClick={() => navigate('/main')}>
                        <p>Все статьи</p>
                    </div>
                </div>
                <div className={styles.articles__searchContent}>
                    <form className={styles.search}>
                        <button>
                            <img src={searchIcon} alt="search"/>
                        </button>
                        <input type="text" placeholder="Поиск статей"/>
                    </form>
                    <div className={styles.articles__filterContent}>
                        <div className={styles.filterWrapper}>
                            <button className={styles.articles__filterBtn} onClick={handleFilterOpen}>
                                <img src={filterIcon} alt="filter"/>
                            </button>
                            {isFilterOpen && (
                                <div className={styles.filterDropdown}>
                                    {/* Добавьте другие чекбоксы для фильтрации */}
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
                                                        checked={categories[category.key]}
                                                        onChange={() => handleCheckboxChange(category.key)}
                                                    />
                                                    {category.label}
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
                {
                    articlesCardsData.map((articlesData) => (
                        <div className={styles.articles__card} style={{backgroundColor: articlesData.backgroundColor}}>
                            <p className={styles.articles__title}>{articlesData.title}</p>
                            <img src={articlesData.image} alt="articlesIcon"/>
                            <span className={styles.articles__category}>
                        <p>#{articlesData.category}</p>
                        <div className={styles.articles__ellipse}></div>
                        <p>15 минут</p>
                    </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ArticlesPage;