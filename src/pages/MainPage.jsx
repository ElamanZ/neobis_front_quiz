import React, {useEffect} from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../store/slices/articlesSlice.js";
import {getQuizes} from "../store/slices/quizesSlice.js";


function MainPage(props) {
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const articlesDataResponse = useSelector((state) => state.articles.data);
    const quizesDataResponse = useSelector((state) => state.quizes.data);
    const articleCardsData = articlesDataResponse.results || [];
    const quizCardsData = quizesDataResponse.results || [];

    useEffect(() => {
        dispatch(getArticles());
        dispatch(getQuizes());
    }, []);

    const handleArticleClick = (articleId) => {
        navigate(`/article/${articleId}`);
    };

    const handleQuizClick = (articleId) => {
        navigate(`/quiz/${articleId}`);
    };

    const categoryMapping = {
        1: "Литература",
        2: "Кино",
        3: "Искусство",
        4: "Психология",
        6: "Музыка",
        7: "Философия",
        8: "История",
    };

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
                    {articleCardsData.slice(0,5).map((articleData) => (
                        <SwiperSlide key={articleData.id} onClick={() => handleArticleClick(articleData.id)}>
                            <div className={styles.main__articleCard} style={{ backgroundColor: articleData.backgroundColor }}>
                                <p>{articleData.title}</p>
                                <img src={articleData.image} alt={`card_icon${articleData.id}`} />
                                <span>#{categoryMapping[articleData.category]}</span>
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

                {quizCardsData.slice(0,5).map((quizData) => (
                    <div onClick={() => handleQuizClick(quizData.id)} className={styles.main__quiz_card} key={quizData.id} style={{ backgroundColor: quizData.backgroundColor }}>
                        <img src={quizData.image} alt="card_quiz_icon1"/>
                        <p>{categoryMapping[quizData.category]}</p>
                        <span>{quizData.num_questions} вопросов</span>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default MainPage;