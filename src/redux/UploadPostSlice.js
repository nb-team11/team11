import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: ''
};

const UploadPostSlice = createSlice({
  name: 'UploadPostSlice',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    }
  }
});

export const { setCategory } = UploadPostSlice.actions;
export default UploadPostSlice.reducer;
