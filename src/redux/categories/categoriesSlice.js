import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    status: (state) => (state.categories === [] ? 'Under construction' : null),
  },
});

export default categoriesSlice.reducer;

export const { status } = categoriesSlice.actions;
