import React, {useState} from 'react';
import styles from '../pages/styles.module.scss'
import BackBtn from "../components/backBtn.jsx";
function QuizTest(props) {
    const [clickedAnswers, setClickedAnswers] = useState({
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false
    });
    const handleAnswerClick = (answerId) => {
        setClickedAnswers(prevState => ({
            ...prevState,
            [answerId]: true
        }));
    };
    return (
        <div className='container'>
            <div className={styles.quizTest__header}>
                <BackBtn path={"/quiz"}/>
                <p>
                    Вопрос 4 из 10
                </p>
                <div></div>
            </div>
            <div className={styles.quizTest__progressBar}>
                <div className={styles.quizTest__progress} style={{width: '40%'}}></div>
            </div>
            <div className={styles.quizTest__question}>
                <p>
                    Вопрос 4. Какое событие считается началом Французской революции?
                </p>
            </div>

            <div className={styles.quizTest__answers}>
                <button className={styles.quizTest__answer} onClick={() => handleAnswerClick('answer1')} style={{backgroundColor: clickedAnswers.answer1 ? '#B9FFA0' : ''}}>
                    Взятие Бастилии
                </button>
                <button className={styles.quizTest__answer} onClick={() => handleAnswerClick('answer2')} style={{backgroundColor: clickedAnswers.answer2 ? '#EF6E6E' : ''}}>
                    Восстание Бастилии
                </button>
                <button className={styles.quizTest__answer} onClick={() => handleAnswerClick('answer3')} style={{backgroundColor: clickedAnswers.answer3 ? '#EF6E6E' : ''}}>
                    Созыв Генеральных штатов
                </button>
                <button className={styles.quizTest__answer} onClick={() => handleAnswerClick('answer4')} style={{backgroundColor: clickedAnswers.answer4 ? '#EF6E6E' : ''}}>
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