import React from 'react';
import styles from './styles.module.scss'
import arrow_icon from '../assets/images/arrow_icon.svg'
import card_icon1 from '../assets/images/card_icon11.png'
import card_icon2 from '../assets/images/card_icon22.png'
import card_icon3 from '../assets/images/card_icon33.png'
import card_icon4 from '../assets/images/card_icon44.png'
import card_quiz_icon1 from '../assets/images/card_quiz_icon11.png'
import card_quiz_icon2 from '../assets/images/card_quiz_icon22.png'
import card_quiz_icon3 from '../assets/images/card_quiz_icon33.png'
import card_quiz_icon4 from '../assets/images/card_quiz_icon44.png'
function MainPage(props) {
    return (
        <div className='container'>
            <div className={styles.title}>
                <h1>Статьи</h1>
                <img src={arrow_icon} alt="arrow_icon"/>
            </div>
            <div className={styles.articleCards}>
                <div className={styles.articleCard} style={{ backgroundColor: '#FFE0A3' }}>
                    <p>Жизнь и правление Наполеона Бонапарта</p>
                    <img src={card_icon1} alt="card_icon1"/>
                    <span>#История</span>
                </div>

                <div className={styles.articleCard} style={{ backgroundColor: '#CCFFF6' }}>
                    <p>Философия Аристотеля</p>
                    <img src={card_icon2} alt="card_icon2"/>
                    <span>#Философия</span>
                </div>

                <div className={styles.articleCard} style={{ backgroundColor: '#FFCCFD' }}>
                    <p>Почему Чехов не так прост?</p>
                    <img src={card_icon3} alt="card_icon3"/>
                    <span>#Литература</span>
                </div>

                <div className={styles.articleCard} style={{ backgroundColor: '#ADD3FF' }}>
                    <p>Почему вы неправильно поняли «Мастера и Маргариту»?</p>
                    <img src={card_icon4} alt="card_icon4"/>
                    <span>#Литература</span>
                </div>

            </div>

            <div className={styles.title}>
                <h1>Квизы</h1>
                <img src={arrow_icon} alt="arrow_icon"/>
            </div>

            <div className={styles.quiz_cards}>
                <div className={styles.quiz_card} style={{ backgroundColor: '#FFA9A3' }}>
                    <img src={card_quiz_icon1} alt="card_quiz_icon1"/>
                    <p>История</p>
                    <span>10 вопросов</span>
                </div>

                <div className={styles.quiz_card} style={{ backgroundColor: '#ADD3FF' }}>
                    <img src={card_quiz_icon2} alt="card_quiz_icon2"/>
                    <p>Литература</p>
                    <span>15 вопросов</span>
                </div>

                <div className={styles.quiz_card} style={{ backgroundColor: '#CBF89E' }}>
                    <img src={card_quiz_icon3} alt="card_quiz_icon3"/>
                    <p>Философия</p>
                    <span>10 вопросов</span>
                </div>

                <div className={styles.quiz_card} style={{ backgroundColor: '#DAB5FF' }}>
                    <img src={card_quiz_icon4} alt="card_quiz_icon4"/>
                    <p>Психология</p>
                    <span>20 вопросов</span>
                </div>
            </div>
        </div>
    );
}

export default MainPage;