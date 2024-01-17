// В вашем файле, где настраивается store, должны быть добавлены middleware
import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../store/slices/articlesSlice.js';
import quizesReducer from './slices/quizesSlice.js';
import searchArticlesSlice from './slices/articleSearchSlice.js';
import quizTestReducer from './slices/quizTestSlice.js';
import articlesCategoryReducer from './slices/categorySlice.js';

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        searchArticles: searchArticlesSlice,
        quizes: quizesReducer,
        quizTest: quizTestReducer,
        articlesCategory: articlesCategoryReducer,
    },
});

export default store;
