import React from 'react';
import styles from 'styles.module.scss'
function FinishTestPage(props) {
    return (
        <div className="container">
            <div className={styles.FinishTest__block}>
                <h2 className={styles.FinishTest__title}>Поздравляем!</h2>
                <img className={styles.FinishTest__img} src={salut} alt="" />
                <p className={styles.FinishTest__text}>Вы ответили правильно на</p>
                <p className={styles.FinishTest__textResult}>9 вопросов из 10</p>
                <p className={styles.FinishTest__lastText}>У вас всегда есть возможность пройти квиз заново, чтобы еще раз проверить свои знания!</p>
                <button className={styles.startBtn_quiz}>Вернуться</button>
            </div>
        </div>
    );
}

export default FinishTestPage;