import React from 'react';
import backBtn from '../assets/images/arrow_left_icon.svg'
import styles from '../../src/pages/styles.module.scss'
import quizImg1 from "../assets/images/card_quiz_icon111.svg";
import quizImg2 from "../assets/images/card_quiz_icon222.svg";
import quizImg3 from "../assets/images/card_quiz_icon333.svg";
import quizImg4 from "../assets/images/card_quiz_icon444.svg";
import {useNavigate, useParams} from "react-router-dom";
import QuizTest from "./QuizTest.jsx";
import BackBtn from "../components/backBtn.jsx";
import {useSelector} from "react-redux";
function QuizPage(props) {

    // const quizData = [
    //     {
    //         id: 1,
    //         title: 'История',
    //         image: quizImg1,
    //         description: 'Добро пожаловать на квиз по истории.\n' +
    //             'Это увлекательное путешествие через века и эпохи, которые сформировали наш мир таким, каким мы его знаем сегодня. В этом квизе вы окунетесь в важнейшие события, великих личностей и ключевые моменты, которые оказали огромное влияние\n' +
    //             'на развитие человечества.'
    //     },
    //     {
    //         id: 2,
    //         title: 'Философия',
    //         image: quizImg2,
    //         description: 'Добро пожаловать на квиз по истории.\n' +
    //             'Это увлекательное путешествие через века и эпохи, которые сформировали наш мир таким, каким мы его знаем сегодня. В этом квизе вы окунетесь в важнейшие события, великих личностей и ключевые моменты, которые оказали огромное влияние\n' +
    //             'на развитие человечества.'
    //     },
    //     {
    //         id: 3,
    //         title: 'Литература',
    //         image: quizImg3,
    //         description: 'Добро пожаловать на квиз по истории.\n' +
    //             'Это увлекательное путешествие через века и эпохи, которые сформировали наш мир таким, каким мы его знаем сегодня. В этом квизе вы окунетесь в важнейшие события, великих личностей и ключевые моменты, которые оказали огромное влияние\n' +
    //             'на развитие человечества.'
    //     },
    //     {
    //         id: 4,
    //         title: 'Психология',
    //         image: quizImg4,
    //         description: 'Добро пожаловать на квиз по истории.\n' +
    //             'Это увлекательное путешествие через века и эпохи, которые сформировали наш мир таким, каким мы его знаем сегодня. В этом квизе вы окунетесь в важнейшие события, великих личностей и ключевые моменты, которые оказали огромное влияние\n' +
    //             'на развитие человечества.'
    //     }
    // ]
    const navigate = useNavigate();
    const { quizId} = useParams();
    console.log('quizId', quizId)

    const quizDataResponse = useSelector((state) => state.quizes.data);
    const articlesCardsData = quizDataResponse.results || [];

    const quizData = articlesCardsData[quizId-1]

    console.log(quizData)


    return (
        <div className="container">
            <BackBtn/>
            <div className={styles.quizBlock}>
                <div className={styles.titleWithBackgraund}>
                    <p>Квиз “{quizData.category}”</p>
                </div>
                <div className={styles.quizImg}>
                    <img src={quizData.image} alt="quizImage"/>
                </div>
                <div className={styles.quizDescription}>
                    <p>{quizData.description}</p>
                </div>
                <div className={styles.startBtn_quizBlock}>
                    <button className={styles.startBtn_quiz} onClick={() => navigate('/quiz-test')}>Начать квиз</button>
                </div>
            </div>
        </div>
    );
}

export default QuizPage;