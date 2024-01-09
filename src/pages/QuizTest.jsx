import React from 'react';
import styles from '../pages/styles.module.scss'
import BackBtn from "../components/backBtn.jsx";
function QuizTest(props) {
    return (
        <div className='container'>
            <div className={styles.quizTest__header}>
                <BackBtn path={"/quiz"}/>
                <p>
                    Вопрос 4 из 10
                </p>
                <div></div>
            </div>
            <div className={styles.quizTest__progressBar}></div>
            <div className={styles.quizTest__question}>
                <p>
                    Вопрос 4. Какое событие считается началом Французской революции?
                </p>
            </div>

            <div className={styles.quizTest__answers}>
                <button className={styles.quizTest__answer}>
                    Взятие Бастилии
                </button>
                <button className={styles.quizTest__answer}>
                    Восстание Бастилии
                </button>
                <button className={styles.quizTest__answer}>
                    Созыв Генеральных штатов
                </button>
                <button className={styles.quizTest__answer}>
                    Публикация "Прав человека и гражданина"
                </button>

            </div>
                <button className={styles.quizTest__btnNextQuestion}>
                    Следующий вопрос
                </button>
        </div>
    );
}

export default QuizTest;