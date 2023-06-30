/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    status: '',
    reducers: {
      displayCategories: (state) => {
        state.status = 'Under construction';
      },
    },
  },
});

export default categoriesSlice.reducer;

export const { status } = categoriesSlice.actions;
