import React, {useState} from 'react';
import styles from "./styles.module.scss";
import arrow_left from "../assets/images/arrow_left_icon.svg";
import {useNavigate} from "react-router-dom";
import searchIcon from '../assets/images/searchIcon.svg'
import filterIcon from '../assets/images/filterIcon.svg'

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
    return (
        <div className='container'>
            <div className={styles.articles__header}>
                <div className={styles.back_btn}>
                    <img className={styles.back_btn_arrow_left} src={arrow_left} alt="arrow_left" onClick={() => navigate('/main')}/>
                    <div className={styles.titleWithBackgraund} style={{minWidth: '215px'}} onClick={() => navigate('/main')}>
                        <p>Все статьи</p>
                    </div>
                </div>
                <div className={styles.articles__searchContent}>
                    <div className={styles.search}>
                        <button>
                            <img src={searchIcon} alt="search"/>
                        </button>
                        <input type="text" placeholder="Поиск статей"/>
                    </div>
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
            </div>

        </div>
    );
}

export default ArticlesPage;