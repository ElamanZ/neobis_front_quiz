import React from 'react';
import {Link} from "react-router-dom";
import arrow_left from '../assets/images/arrow_left_icon.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import allQuiz_card_icon1 from '../assets/images/card_quiz_icon11.png'
import allQuiz_card_icon2 from '../assets/images/card_quiz_icon22.png'
import allQuiz_card_icon3 from '../assets/images/card_quiz_icon33.png'
import allQuiz_card_icon4 from '../assets/images/card_quiz_icon44.png'
import styles from './styles.module.scss'
import card_quiz_icon1 from "../assets/images/card_quiz_icon11.png";
import card_quiz_icon2 from "../assets/images/card_quiz_icon22.png";
import card_quiz_icon3 from "../assets/images/card_quiz_icon33.png";
import card_quiz_icon4 from "../assets/images/card_quiz_icon44.png";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function AllQuizesPage(props) {

    const allQuizCardsData = [
        {
            id: 1,
            title: 'История',
            image: card_quiz_icon1,
            text: '10 вопросов',
            backgroundColor: '#FFA9A3',
            boxShadow: '0 0 24px 8px #CBF89E'
        },
        {
            id: 2,
            title: 'История',
            image: card_quiz_icon2,
            text: '10 вопросов',
            backgroundColor: '#ADD3FF',
            boxShadow: '0 0 24px 8px #FFA0A0'
        },
        {
            id: 3,
            title: 'Философия',
            image: card_quiz_icon3,
            text: '10 вопросов',
            backgroundColor: '#CBF89E',
            boxShadow: '0 0 24px 8px #DAB5FF'
        },
        {
            id: 4,
            title: 'Психология',
            image: card_quiz_icon4,
            text: '20 вопросов',
            backgroundColor: '#DAB5FF',
            boxShadow: '0 0 24px 8px #C9F89B'
        }
    ];

    return (
        <div className='container'>
            <Link to='/main' className={styles.back_btn}>
                <img className={styles.back_btn_arrow_left} src={arrow_left} alt="arrow_left"/>
                <div className={styles.back_btn_title}>
                    <p>Все квизы</p>
                </div>
            </Link>

            <div className={styles.allQuiz_cards}>

                <Swiper

                    spaceBetween={12}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
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
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper>

                {/*<div className={styles.allQuiz_card} style={{ backgroundColor: '#C9F89B', boxShadow: '0 0 24px 8px #CBF89E' }}>*/}
                {/*    <img src={allQuiz_card_icon3} alt="allQuiz_card_icon1" />*/}
                {/*    <p>Философия</p>*/}
                {/*    <span>10 вопросов</span>*/}
                {/*</div>*/}

                {/*<div className={styles.allQuiz_card} style={{ backgroundColor: '#FF9494', boxShadow: '0 0 24px 8px #FFA0A0' }}>*/}
                {/*    <img src={allQuiz_card_icon1} alt="allQuiz_card_icon1" />*/}
                {/*    <p>История</p>*/}
                {/*    <span>10 вопросов</span>*/}
                {/*</div>*/}

                {/*<div className={styles.allQuiz_card} style={{ backgroundColor: '#DAB5FF', boxShadow: '0 0 24px 8px #DAB5FF' }}>*/}
                {/*    <img src={allQuiz_card_icon2} alt="allQuiz_card_icon1" />*/}
                {/*    <p>Литература</p>*/}
                {/*    <span>10 вопросов</span>*/}
                {/*</div>*/}

                {/*<div className={styles.allQuiz_card} style={{ backgroundColor: '#C9F89B', boxShadow: '0 0 24px 8px #C9F89B' }}>*/}
                {/*    <img src={allQuiz_card_icon4} alt="allQuiz_card_icon1" />*/}
                {/*    <p>Психология</p>*/}
                {/*    <span>10 вопросов</span>*/}
                {/*</div>*/}

            </div>

            <button className={styles.startBtn_quiz}>Начать квиз</button>
        </div>
    );
}

export default AllQuizesPage;