import { configureStore } from '@reduxjs/toolkit';
import mapApiSlice from '../mapApiSlice';
import mainTitleSlice from '../mainTitleSlice';
import postsSlice from '../slice/postsSlice';
import UploadPostSlice from '../UploadPostSlice';

const store = configureStore({
  reducer: {
    mapSlice: mapApiSlice,
    titleSlice: mainTitleSlice,
    postsSlice,
    UploadPostSlice
  }
});

export default store;
