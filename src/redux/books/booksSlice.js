import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.books.push(action.payload.book);
    },
    removeBook: (state, action) => {
      state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export default booksSlice.reducer;

export const { addBooks, removeBook } = booksSlice.actions;
