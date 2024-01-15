import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from "../pages/MainPage.jsx";
import ArticlesPage from "../pages/ArticlesPage.jsx";
import AllQuizesPage from "../pages/AllQuizesPage.jsx";
import QuizPage from "../pages/QuizPage.jsx";
import QuizTest from "../pages/QuizTest.jsx";
import FinishTestPage from "../pages/FinishTestPage.jsx";
import ArticlesNotfound from "../components/articlesNotfound.jsx";
import ArticleResult from "../components/articleResult.jsx";


function Routers(props) {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/main" element={<MainPage/>} />
            <Route path="/articles" element={<ArticlesPage/>} />
            <Route path="/all-quizes" element={<AllQuizesPage/>} />
            <Route path="/quiz" element={<QuizPage/>} />
            <Route path="/quiz-test" element={<QuizTest text='/main'/>} />
            <Route path="/finish-test" element={<FinishTestPage/>} />
            <Route path="/articles-not-found" element={<ArticlesNotfound/>} />
            <Route path="/article/:articleId" element={<ArticleResult/>} />
        </Routes>
    );
}

export default Routers;