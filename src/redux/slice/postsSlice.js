import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postsData: [],
  keyword: ''
};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    uploadPostsData: (state, action) => {
      state.postsData = action.payload;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    }
  }
});

export const { uploadPostsData, setKeyword } = postsSlice.actions;
export default postsSlice.reducer;
