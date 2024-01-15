import React, { useState } from 'react';
import styles from '../pages/styles.module.scss';
import BackBtn from "../components/backBtn.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { incrementCorrectAnswers } from '../store/slices/quizTestSlice.js';
export const questionsData = [
    {
        id: 1,
        questionText: 'Какое событие считается началом Французской революции?',
        answers: [
            { id: 'answer1', text: 'Взятие Бастилии', isCorrect: true },
            { id: 'answer2', text: 'Восстание Бастилии', isCorrect: false },
            { id: 'answer3', text: 'Созыв Генеральных штатов', isCorrect: false },
            { id: 'answer4', text: 'Публикация "Прав человека и гражданина"', isCorrect: false },
        ],
    },
    {
        id: 2,
        questionText: 'Кто Автор рассказа кавказский пленник',
        answers: [
            { id: 'answer1', text: 'Пушкин', isCorrect: false },
            { id: 'answer2', text: 'Гоголь', isCorrect: false },
            { id: 'answer3', text: 'Толстой', isCorrect: true },
            { id: 'answer4', text: 'Тургенев', isCorrect: false },
        ],
    },
    {
        id: 3,
        questionText: 'Когда родился Пушкин',
        answers: [
            { id: 'answer1', text: '1987', isCorrect: false },
            { id: 'answer2', text: '1539', isCorrect: false },
            { id: 'answer3', text: '1845', isCorrect: true },
            { id: 'answer4', text: '1869', isCorrect: false },
        ],
    },
    {
        id: 4,
        questionText: 'Когда родился Эламан',
        answers: [
            { id: 'answer1', text: '2001', isCorrect: true },
            { id: 'answer2', text: '2003', isCorrect: false },
            { id: 'answer3', text: '1999', isCorrect: false },
            { id: 'answer4', text: '2007', isCorrect: false },
        ],
    },
    {
        id: 5,
        questionText: 'Роналдо',
        answers: [
            { id: 'answer1', text: '1985', isCorrect: true },
            { id: 'answer2', text: '1988', isCorrect: false },
            { id: 'answer3', text: '1991', isCorrect: false },
            { id: 'answer4', text: '1983', isCorrect: false },
        ],
    },

];

function QuizTest(props) {
    const [clickedAnswers, setClickedAnswers] = useState({});
    const [canClickNext, setCanClickNext] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const correctAnswers = useSelector((state) => state.quizTest.correctAnswers);

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
        if (currentQuestionIndex === questionsData.length - 1) {
            navigate('/finish-test');
        } else {
            setClickedAnswers({});
            setCanClickNext(false);
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    };

    const currentQuestion = questionsData[currentQuestionIndex];

    return (
        <div className="container">
            <div className={styles.quizTest__header}>
                <BackBtn path={"/quiz"} />
                <p>{`Вопрос ${currentQuestionIndex + 1} из ${questionsData.length}`}</p>
                <div></div>
            </div>
            <div className={styles.quizTest__progressBar}>
                <div className={styles.quizTest__progress} style={{ width: `${(currentQuestionIndex + 1) / questionsData.length * 100}%` }}></div>
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
                {currentQuestionIndex === questionsData.length - 1 ? 'Завершить квиз' : 'Следующий вопрос'}
            </button>
        </div>
    );
}

export default QuizTest;

