import React, {useEffect} from 'react';
import BackBtn from "./backBtn.jsx";
import styles from '../pages/styles.module.scss'
import {useParams} from "react-router-dom";
import { useSelector} from "react-redux";
function ArticleResult(props) {
    const { articleId} = useParams();


    console.log('articleId', articleId)


    const categoryMapping = {
        1: "Литература",
        2: "Кино",
        3: "Искусство",
        4: "Психология",
        6: "Музыка",
        7: "Философия",
        8: "История",
    };

    const articlesDataResponse = useSelector((state) => state.articles.data);
    const articlesCardsData = articlesDataResponse.results || [];

    const articlesCardsResultData = articlesCardsData[articleId-1]

    return (
        <div className='container'>
            <BackBtn path={"/articles"}/>
            <div className={styles.articleResult}>
                <p className={styles.articleResult__title}>{articlesCardsResultData.title}</p>
                <div className={styles.articleResult__category}>
                    <span>#{categoryMapping[articlesCardsResultData.category]}</span>
                    <div className={styles.articleResult__ellipse}></div>
                    <span>{articlesCardsResultData.study_time} минут</span>
                </div>
                <p className={styles.articleResult__text}>
                    {articlesCardsResultData.content}
                </p>
            </div>
        </div>
    );
}

export default ArticleResult;