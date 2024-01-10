import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
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
import './styles2.css';
import classNames from "classnames";


function MainPage(props) {
    const navigate = useNavigate();
    const articleCardsData = [
        {
            id: 1,
            title: 'Жизнь и правление Наполеона Бонапарта',
            image: card_icon1,
            category: 'История',
            backgroundColor: '#FFE0A3'
        },
        {
            id: 2,
            title: 'Философия Аристотеля',
            image: card_icon2,
            category: 'Философия',
            backgroundColor: '#CCFFF6'
        },
        {
            id: 3,
            title: 'Почему Чехов не так прост?',
            image: card_icon3,
            category: 'Литература',
            backgroundColor: '#FFCCFD'
        },
        {
            id: 4,
            title: 'Почему вы неправильно поняли «Мастера и Маргариту»?',
            image: card_icon4,
            category: 'Литература',
            backgroundColor: '#ADD3FF'
        }
    ];

    const quizCardsData = [
        {
            id: 1,
            title: 'История',
            image: card_quiz_icon1,
            text: '10 вопросов',
            backgroundColor: '#FFA9A3'
        },
        {
            id: 2,
            title: 'История',
            image: card_quiz_icon2,
            text: '10 вопросов',
            backgroundColor: '#ADD3FF'
        },
        {
            id: 3,
            title: 'Философия',
            image: card_quiz_icon3,
            text: '10 вопросов',
            backgroundColor: '#CBF89E'
        },
        {
            id: 4,
            title: 'Психология',
            image: card_quiz_icon4,
            text: '20 вопросов',
            backgroundColor: '#DAB5FF'
        }
    ];

    const titleClass = (classNames(styles.title, styles.titleMargin))

    return (
        <div className='container'>
            <div className={titleClass}>
                <h1>Статьи</h1>
                <img src={arrow_icon} alt="arrow_icon" onClick={() => navigate('/articles')}/>
            </div>
            <div className={styles.main__articleCards}>
                <Swiper

                    spaceBetween={-50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {articleCardsData.map((articleData) => (
                        <SwiperSlide key={articleData.id}>
                            <div className={styles.main__articleCard} style={{ backgroundColor: articleData.backgroundColor }}>
                                <p>{articleData.title}</p>
                                <img src={articleData.image} alt={`card_icon${articleData.id}`} />
                                <span>#{articleData.category}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            <div className={styles.title}>
                <h1>Квизы</h1>
                <img src={arrow_icon} alt="arrow_icon" onClick={() => navigate('/all-quizes')}/>
            </div>

            <div className={styles.main__quiz_cards}>

                {quizCardsData.map((quizData) => (
                    <div className={styles.main__quiz_card} key={quizData.id} style={{ backgroundColor: quizData.backgroundColor }}>
                        <img src={quizData.image} alt="card_quiz_icon1"/>
                        <p>{quizData.title}</p>
                        <span>{quizData.text}</span>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default MainPage;