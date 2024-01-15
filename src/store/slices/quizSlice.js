
import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
    name: 'quiz',
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

export const { incrementCorrectAnswers, resetCorrectAnswers } = quizSlice.actions;

export default quizSlice.reducer;
