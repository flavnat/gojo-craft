// store/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    availability: [],
    category: [],
  },
  reducers: {
    SET_AVAILABILITY: (state, action) => {
      state.availability = action.payload;
    },
    SET_CATEGORY: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { SET_AVAILABILITY, SET_CATEGORY } = filtersSlice.actions;
export default filtersSlice.reducer;