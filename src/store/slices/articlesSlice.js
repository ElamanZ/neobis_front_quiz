import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getArticles = createAsyncThunk(
    'getArticles',
    async function () {
        try {
            const response = await fetch('https://rio-backender.org.kg/articles/?page=1&page_size=50');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    }
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default articlesSlice.reducer;
