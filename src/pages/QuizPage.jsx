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

    const categoryMapping = {
        1: "Литература",
        2: "Кино",
        3: "Искусство",
        4: "Психология",
        6: "Музыка",
        7: "Философия",
        8: "История",
    };

    const navigate = useNavigate();
    const { quizId} = useParams();
    console.log('quizId', quizId)

    const quizDataResponse = useSelector((state) => state.quizes.data);
    const articlesCardsData = quizDataResponse.results || [];

    const quizData = articlesCardsData[quizId-1]

    const handleStartQuiz = () => {
        navigate(`/quiz-test/${quizData.category}`);
    };


    return (
        <div className="container">
            <BackBtn/>
            <div className={styles.quizBlock}>
                <div className={styles.titleWithBackgraund}>
                    <p>Квиз “{categoryMapping[quizData.category]}”</p>

                </div>
                <div className={styles.quizImg}>
                    <img src={quizData.image} alt="quizImage"/>
                </div>
                <div className={styles.quizDescription}>
                    <p>{quizData.description}</p>
                </div>
                <div className={styles.startBtn_quizBlock}>
                    <button className={styles.startBtn_quiz} onClick={handleStartQuiz}>Начать квиз</button>
                </div>
            </div>
        </div>
    );
}

export default QuizPage;