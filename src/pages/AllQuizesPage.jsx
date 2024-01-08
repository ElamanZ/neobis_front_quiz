import React, {useState} from 'react';
import {Link} from "react-router-dom";
import arrow_left from '../assets/images/arrow_left_icon.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

import styles from './styles.module.scss'
import card_quiz_icon1 from "../assets/images/card_quiz_icon111.svg";
import card_quiz_icon2 from "../assets/images/card_quiz_icon222.svg";
import card_quiz_icon3 from "../assets/images/card_quiz_icon333.svg";
import card_quiz_icon4 from "../assets/images/card_quiz_icon444.svg";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function AllQuizesPage(props) {

    const allQuizCardsData = [
        {
            id: 1,
            title: 'История',
            image: card_quiz_icon1,
            text: '10 вопросов',
            backgroundColor: '#FFA9A3',
            boxShadow: '0 0 24px 8px #FFA0A0'

        },
        {
            id: 2,
            title: 'История',
            image: card_quiz_icon2,
            text: '10 вопросов',
            backgroundColor: '#ADD3FF',
            boxShadow: '0 0 24px 8px #9CC7FA'

        },
        {
            id: 3,
            title: 'Философия',
            image: card_quiz_icon3,
            text: '10 вопросов',
            backgroundColor: '#CBF89E',
            boxShadow: '0 0 24px 8px #CBF89E'
        },
        {
            id: 4,
            title: 'Психология',
            image: card_quiz_icon4,
            text: '20 вопросов',
            backgroundColor: '#DAB5FF',
            boxShadow: '0 0 24px 8px #DAB5FF'
        }
    ];

    return (
        <>
            <div className='container'>
                <Link to='/main' className={styles.back_btn}>
                    <img className={styles.back_btn_arrow_left} src={arrow_left} alt="arrow_left"/>
                    <div className={styles.back_btn_title}>
                        <p>Все квизы</p>
                    </div>
                </Link>
            </div>
            <div className={styles.allQuiz_cards}>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 1,
                        modifier: -1,
                        slideShadows: true,
                    }}

                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >
                    {allQuizCardsData.map((allQuizData) => (
                        <SwiperSlide key={allQuizData.id}>
                            <div className={styles.allQuiz_card} style={{ backgroundColor: allQuizData.backgroundColor, boxShadow: allQuizData.boxShadow }}>
                                <img src={allQuizData.image} alt="allQuiz_card_icon1" />
                                <p>{allQuizData.title}</p>
                                <span>{allQuizData.text}</span>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>

            </div>

            <button className={styles.startBtn_quiz}>Начать квиз</button>
        </>


    );
}

export default AllQuizesPage;