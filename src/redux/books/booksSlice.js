/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiBooks from '../booksApI';

// const initialState = {
//   loading: false,
//   books: [],
//   error: '',
//   state: 'idle',
// };

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
  initialState: {
    loading: false,
    books: [],
    error: '',
    state: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    }).addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = Object.entries(action.payload).map(
        ([itemId, itemData]) => ({
          item_id: itemId,
          ...itemData[0],
        }),
      );
      state.error = '';
    }).addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    }).addCase(addBook.fulfilled, (state, action) => {
      state.state = 'succeeded';
      const book = {
        ...action.meta.arg,
      };
      state.books = [...state.books, book];
    })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
