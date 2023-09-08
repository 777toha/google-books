import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks } from './bookSliceAPI';

interface Book {
    id: string;
    volumeInfo: {
        title: string;
        categories?: string[];
        authors?: string[];
        description?: string;
        imageLinks?: {
        thumbnail: string;
        };
    };
}

interface BookState {
    books: Book[]
    loading: boolean;
    error: unknown
}

const initialState: BookState = {
    books: [],
    loading: false,
    error: '',
};

export const searchBooks = createAsyncThunk(
    'books/search',
    async (arg: { query: string; category: string; sorting: string }) => {
        const { query, category, sorting } = arg;
        try {
            const data = await fetchBooks(query, category, sorting);
            return data.items;
        } catch (error) {
            return error;
        }
    }
);

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(searchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const bookReducer = bookSlice.reducer;
