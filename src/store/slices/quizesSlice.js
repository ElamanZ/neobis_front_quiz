import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getQuizes = createAsyncThunk(
    'getQuizes',
    async function () {
        try {
            const response = await fetch('https://rio-backender.org.kg/quizzes/');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    }
);

const quizesSlice = createSlice({
    name: 'quizes',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQuizes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getQuizes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getQuizes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default quizesSlice.reducer;


