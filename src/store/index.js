// В вашем файле, где настраивается store, должны быть добавлены middleware
import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../store/slices/articlesSlice.js';
import quizReducer from '../store/slices/quizSlice.js';

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        quiz: quizReducer,
    },
});

export default store;
