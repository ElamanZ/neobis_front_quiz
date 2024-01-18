import React, { useEffect } from 'react';
import styles from '../pages/styles.module.scss';
import salut from '../assets/images/salut.gif';
import confeti from '../assets/images/confetti.gif';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { questionsData } from '../pages/QuizTest.jsx';
import { resetCorrectAnswers } from '../store/slices/quizTestSlice';

function FinishTestPage(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();  // Добавлен dispatch
    const correctAnswers = useSelector((state) => state.quizTest.correctAnswers);

    const handleReturnClick = () => {
        dispatch(resetCorrectAnswers());  // Сбрасываем значение correctAnswers
        navigate('/all-quizes');
    };

    return (
        <div className="container">
            <div className={styles.finishTest__block}>
                <div className={styles.finishTest__title_content}>
                    <img src={salut} alt="salut" />
                    <div className={styles.finishTest__title}>
                        <img src={confeti} alt="confeti" />
                        <h2>Поздравляем!</h2>
                    </div>
                    <img src={salut} alt="salut" />
                </div>

                <p className={styles.finishTest__text}>Вы ответили правильно на</p>
                <p className={styles.finishTest__text} style={{ color: '#4AA829', marginBottom: '70px' }}>
                    {`Вы ответили правильно на ${correctAnswers} вопросов из ${questionsData.length}`}
                </p>
                <p className={styles.finishTest__lastText}>
                    У вас всегда есть возможность пройти квиз заново, чтобы еще раз проверить свои знания!
                </p>
                <button onClick={handleReturnClick} className={styles.startBtn_quiz}>
                    Вернуться
                </button>
            </div>
        </div>
    );
}

export default FinishTestPage;