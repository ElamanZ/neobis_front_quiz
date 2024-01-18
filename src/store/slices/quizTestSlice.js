import { createSlice } from '@reduxjs/toolkit';

const quizTestSlice = createSlice({
    name: 'quizTest',
    initialState: {
        correctAnswers: 0,
    },
    reducers: {
        incrementCorrectAnswers: (state) => {
            state.correctAnswers += 1;
        },
        resetCorrectAnswers: (state) => {
            state.correctAnswers = 0;
        },
    },
});

export const { incrementCorrectAnswers, resetCorrectAnswers } = quizTestSlice.actions;

export default quizTestSlice.reducer;
