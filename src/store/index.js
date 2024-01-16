// В вашем файле, где настраивается store, должны быть добавлены middleware
import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../store/slices/articlesSlice';
import quizesReducer from '../store/slices/quizesSlice';
import quizTestReducer from './slices/quizTestSlice';

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        quizes: quizesReducer,
        quizTest: quizTestReducer,
    },
});

export default store;
