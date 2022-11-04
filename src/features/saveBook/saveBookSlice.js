import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedBooks: [],
};

export const saveBookSlice = createSlice({
  name: "savedBooks",
  initialState,
  reducers: {
    saveBook: (state, action) => {
      state.savedBooks.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.savedBooks = state.savedBooks.filter(
        (book) => book.id !== action.payload.id
      );
    },
  },
});

export const { saveBook, deleteBook } = saveBookSlice.actions;
export default saveBookSlice.reducer;
