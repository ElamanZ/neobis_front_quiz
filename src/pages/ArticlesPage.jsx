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
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    const handleFilterOpen = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleApplyFilter = () => {
        setIsFilterApplied(true);
        setIsFilterOpen(false);
        // Здесь можно добавить логику применения фильтров
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
                                        <button>Cбросить все</button>
                                    </div>
                                    <div className={styles.checkboxFilter}>
                                        <label>
                                            <input type="checkbox" />
                                            Фильтр 1
                                        </label>
                                        {/* Другие чекбоксы */}
                                    </div>
                                    <button className={styles.applyFilterBtn} onClick={handleApplyFilter} disabled={!isFilterApplied}>
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