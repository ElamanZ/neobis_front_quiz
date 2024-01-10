import React from 'react';
import styles from "../pages/styles.module.scss";
import notFoundIcon from "../assets/images/not_found-icon.svg";

function ArticlesNotfound(props) {
    return (
        <div className='container'>
            <div className={styles.notFoundBlock}>
                <img src={notFoundIcon} alt="notFoundIcon"/>
                <p>К сожалению, по результам поиска ничего не найдено</p>
            </div>
        </div>
    );
}

export default ArticlesNotfound;