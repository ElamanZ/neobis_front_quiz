import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getArticlesCategory = createAsyncThunk(
    'getArticlesCategory',
    async function () {
        try {
            const response = await fetch('https://rio-backender.org.kg/categories/');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    }
);

const articlesCategory = createSlice({
    name: 'articlesCategory',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticlesCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getArticlesCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getArticlesCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default articlesCategory.reducer;
