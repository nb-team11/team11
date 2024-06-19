import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postsData: []
};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    uploadPostsData: (state, action) => {
      state.postsData = action.payload;
    }
  }
});

export const { uploadPostsData } = postsSlice.actions;
export default postsSlice.reducer;
