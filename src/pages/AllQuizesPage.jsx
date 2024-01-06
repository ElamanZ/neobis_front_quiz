import React from 'react';
import {Link} from "react-router-dom";
import arrow_left from '../assets/images/arrow_left_icon.svg'
import allQuiz_card_icon1 from '../assets/images/card_quiz_icon11.png'
import allQuiz_card_icon2 from '../assets/images/card_quiz_icon22.png'
import allQuiz_card_icon3 from '../assets/images/card_quiz_icon33.png'
import allQuiz_card_icon4 from '../assets/images/card_quiz_icon44.png'
import styles from './styles.module.scss'

function AllQuizesPage(props) {
    return (
        <div className='container'>
            <Link to='/main' className={styles.back_btn}>
                <img className={styles.back_btn_arrow_left} src={arrow_left} alt="arrow_left"/>
                <div className={styles.back_btn_title}>
                    <p>Все квизы</p>
                </div>
            </Link>

            <div className={styles.allQuiz_cards}>
                <div className={styles.allQuiz_card} style={{ backgroundColor: '#C9F89B', boxShadow: '0 0 24px 8px #CBF89E' }}>
                    <img src={allQuiz_card_icon3} alt="allQuiz_card_icon1" />
                    <p>Философия</p>
                    <span>10 вопросов</span>
                </div>

                <div className={styles.allQuiz_card} style={{ backgroundColor: '#FF9494', boxShadow: '0 0 24px 8px #FFA0A0' }}>
                    <img src={allQuiz_card_icon1} alt="allQuiz_card_icon1" />
                    <p>История</p>
                    <span>10 вопросов</span>
                </div>

                <div className={styles.allQuiz_card} style={{ backgroundColor: '#DAB5FF', boxShadow: '0 0 24px 8px #DAB5FF' }}>
                    <img src={allQuiz_card_icon2} alt="allQuiz_card_icon1" />
                    <p>Литература</p>
                    <span>10 вопросов</span>
                </div>

                <div className={styles.allQuiz_card} style={{ backgroundColor: '#C9F89B', boxShadow: '0 0 24px 8px #C9F89B' }}>
                    <img src={allQuiz_card_icon4} alt="allQuiz_card_icon1" />
                    <p>Психология</p>
                    <span>10 вопросов</span>
                </div>

            </div>

            <button className={styles.startBtn_quiz}>Начать квиз</button>
        </div>
    );
}

export default AllQuizesPage;