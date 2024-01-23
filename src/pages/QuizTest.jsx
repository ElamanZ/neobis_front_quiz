import React, { useState, useEffect } from 'react';
import styles from '../pages/styles.module.scss';
import BackBtn from "../components/backBtn.jsx";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incrementCorrectAnswers } from '../store/slices/quizTestSlice.js';
import { questionsData } from "../assets/quizTestData/quizTestData.js";

function QuizTest(props) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [clickedAnswers, setClickedAnswers] = useState({});
    const [canClickNext, setCanClickNext] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const correctAnswers = useSelector((state) => state.quizTest.correctAnswers);
    const { quizId } = useParams();

    useEffect(() => {
        setCurrentQuestionIndex(0);
        setClickedAnswers({});
        setCanClickNext(false);
    }, [quizId]);

    const handleAnswerClick = (answerId, isCorrect) => {
        if (!canClickNext) {
            setClickedAnswers((prev) => ({ ...prev, [answerId]: true }));

            if (isCorrect) {
                dispatch(incrementCorrectAnswers());
            }

            setCanClickNext(true);
        }
    };

    const handleNextQuestionClick = () => {
        if (currentQuestionIndex === currentCategory.questions.length - 1) {
            navigate(`/finish-test/${currentCategory.questions.length}`);
        } else {
            setClickedAnswers({});
            setCanClickNext(false);
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    };

    const currentCategory = questionsData[quizId - 1];
    if (!currentCategory) {
        console.error("Данные для категории не найдены");
        return null;
    }

    const currentQuestion = currentCategory.questions[currentQuestionIndex];

    return (
        <div className="container">
            <div className={styles.quizTest__header}>
                <BackBtn path={"/quiz"} />
                <p>{`Вопрос ${currentQuestionIndex + 1} из ${currentCategory.questions.length}`}</p>
                <div></div>
            </div>
            <div className={styles.quizTest__progressBar}>
                <div className={styles.quizTest__progress} style={{ width: `${(currentQuestionIndex + 1) / currentCategory.questions.length * 100}%` }}></div>
            </div>
            <div className={styles.quizTest__question}>
                <p>{currentQuestion.questionText}</p>
            </div>

            <div className={styles.quizTest__answers}>
                {currentQuestion.answers.map((answer) => (
                    <button
                        key={answer.id}
                        className={styles.quizTest__answer}
                        onClick={() => handleAnswerClick(answer.id, answer.isCorrect)}
                        style={{ backgroundColor: clickedAnswers[answer.id] ? (answer.isCorrect ? '#B9FFA0' : '#EF6E6E') : '' }}
                        disabled={canClickNext}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
            <button
                className={styles.quizTest__btnNextQuestion}
                onClick={handleNextQuestionClick}
                disabled={!canClickNext}
            >
                {currentQuestionIndex === currentCategory.questions.length - 1 ? 'Завершить квиз' : 'Следующий вопрос'}
            </button>
        </div>
    );
}

export default QuizTest;
