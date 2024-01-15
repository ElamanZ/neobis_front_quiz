import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import arrow_left from '../assets/images/arrow_left_icon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';

import styles from './styles.module.scss';
import card_quiz_icon1 from '../assets/images/card_quiz_icon111.svg';
import card_quiz_icon2 from '../assets/images/card_quiz_icon222.svg';
import card_quiz_icon3 from '../assets/images/card_quiz_icon333.svg';
import card_quiz_icon4 from '../assets/images/card_quiz_icon444.svg';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

function AllQuizesPage(props) {
    const navigate = useNavigate();

    const quizesDataResponse = useSelector((state) => state.quizes.data);
    const allQuizCardsData = quizesDataResponse.results || [];

    const [selectedQuizIndex, setSelectedQuizIndex] = useState(0);

    const handleQuizClick = (quizId) => {
        navigate(`/quiz/${quizId}`);
    };

    return (
        <>
            <div className="container">
                <div className={styles.back_btn}>
                    <img
                        className={styles.back_btn_arrow_left}
                        src={arrow_left}
                        alt="arrow_left"
                        onClick={() => navigate('/main')}
                    />
                    <div className={styles.titleWithBackgraund} onClick={() => navigate('/main')}>
                        <p>Все квизы</p>
                    </div>
                </div>
            </div>
            <div className={styles.allQuiz_cards}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 8,
                        stretch: 0,
                        depth: -3,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                    onSlideChange={(swiper) => setSelectedQuizIndex(swiper.activeIndex)}
                >
                    {allQuizCardsData.map((quizData) => (
                        <SwiperSlide key={quizData.id} onClick={() => handleQuizClick(quizData.id)}>
                            <div
                                className={styles.allQuiz_card}
                                style={{ backgroundColor: quizData.backgroundColor, boxShadow: quizData.boxShadow }}
                            >
                                <img src={quizData.image} alt="allQuiz_card_icon1" />
                                <p>{quizData.category}</p>
                                <span>{quizData.num_questions} вопросов</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.startBtn_quizBlock}>
                <button onClick={() => handleQuizClick(allQuizCardsData[selectedQuizIndex].id)} className={styles.startBtn_quiz}>
                    Начать квиз
                </button>
            </div>
        </>
    );
}

export default AllQuizesPage;
