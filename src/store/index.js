// В вашем файле, где настраивается store, должны быть добавлены middleware
import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../store/slices/articlesSlice.js';
import quizesReducer from './slices/quizesSlice.js';
import quizTestReducer from './slices/quizTestSlice.js';
import articlesCategoryReducer from './slices/categorySlice.js';

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        quizes: quizesReducer,
        quizTest: quizTestReducer,
        articlesCategory: articlesCategoryReducer,
    },
});

export default store;
