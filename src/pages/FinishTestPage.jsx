import React from 'react';
import styles from '../pages/styles.module.scss';
import salut from '../assets/images/salut.gif';
import confeti from '../assets/images/confetti.gif';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetCorrectAnswers } from '../store/slices/quizTestSlice';
import { questionsData } from '../assets/quizTestData/quizTestData.js';

function FinishTestPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const correctAnswers = useSelector((state) => state.quizTest.correctAnswers);

    const handleReturnClick = () => {
        dispatch(resetCorrectAnswers());
        navigate('/main');
    };

    const { totalQuestions } = useParams();
    const percentageCorrect = (correctAnswers / totalQuestions) * 100;

    let congratulatoryMessage;

    if (percentageCorrect === 100) {
        congratulatoryMessage = 'Отлично! Вы ответили правильно на все вопросы!';
    } else if (percentageCorrect >= 75) {
        congratulatoryMessage = 'Поздравляем! Вы ответили правильно на большинство вопросов!';
    } else if (percentageCorrect >= 50) {
        congratulatoryMessage = 'Хорошая работа! Вы ответили правильно на половину вопросов!';
    } else {
        congratulatoryMessage = 'Может быть, в следующий раз вам удастся лучше. Пройдите квиз еще раз!';
    }

    return (
        <div className="container">
            <div className={styles.finishTest__block}>
                <div className={styles.finishTest__title_content}>
                    {percentageCorrect >= 80 && (
                        <>
                            <img src={salut} alt="salut" />
                            <div className={styles.finishTest__title}>
                                <img src={confeti} alt="confeti" />
                                <h2>Поздравляем!</h2>
                            </div>
                            <img src={salut} alt="salut" />
                        </>
                    )}
                </div>

                <p className={styles.finishTest__text}>Вы ответили правильно на</p>
                <p className={styles.finishTest__text} style={{ color: percentageCorrect >= 80 ? '#4AA829' : '#EF6E6E', marginBottom: '70px' }}>
                    {`Вы ответили правильно на ${correctAnswers} вопроса из ${totalQuestions}`}
                </p>
                <p className={styles.finishTest__lastText}>{congratulatoryMessage}</p>
                <button onClick={handleReturnClick} className={styles.startBtn_quiz}>
                    Вернуться
                </button>
            </div>
        </div>
    );
}

export default FinishTestPage;
