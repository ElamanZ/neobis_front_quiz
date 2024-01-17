import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const searchArticles = createAsyncThunk(
    'searchArticles',
    async function (articleValue, { dispatch }) {
        try {
            const response = await fetch(`https://rio-backender.org.kg/articles/search/?search=${articleValue}`);
            const searchData = await response.json();
            dispatch(searchArticles.fulfilled(searchData));
            return searchData;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    }
);

const searchArticlesSlice = createSlice({
    name: 'searchArticlesSlice',
    initialState: {
        data: [],
        searchData: {},
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.searchData = action.payload;
            })
            .addCase(searchArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default searchArticlesSlice.reducer;
