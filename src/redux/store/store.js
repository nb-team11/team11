import { configureStore } from '@reduxjs/toolkit';
import mapApiSlice from '../mapApiSlice';
import mainTitleSlice from '../mainTitleSlice';
import postsSlice from '../slice/postsSlice';

const store = configureStore({
  reducer: {
    mapSlice: mapApiSlice,
    titleSlice: mainTitleSlice,
    postsSlice
  }
});

export default store;
