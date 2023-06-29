/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import ApiBooks from '../booksApI';

// import axios from 'axios';

const initialState = {
  loading: false,
  books: [],
  error: '',
  state: 'idle',
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await ApiBooks.get('/books');
  return response.data;
});

export const addBook = createAsyncThunk(
  'books/createBook',
  async (bookData) => {
    const response = await ApiBooks.post('/books', bookData);
    if (response.data === 'Created') {
      // Book create successfuly
    }
  },
);

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await ApiBooks.delete(`/books/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBooks: (state, action) => {
    //   state.books.push(action.payload);
    // },
    // removeBook: (state, action) => {
    //   state.books = state.books.filter((book) => book.item_id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = Object.entries(action.payload).map(
        ([itemId, itemData]) => ({
          item_id: itemId,
          ...itemData[0],
        }),
      );
      state.error = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const book = {
        item_id: uuid(),
        ...action.meta.arg,
      };
      state.books = [...state.books, book];
      state.loading = true;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    });
  },
});

export default booksSlice.reducer;

export const { addBooks, removeBook } = booksSlice.actions;
