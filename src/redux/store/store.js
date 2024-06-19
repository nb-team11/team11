import { configureStore } from '@reduxjs/toolkit';
import mapApiSlice from '../mapApiSlice';
import mainTitleSlice from '../mainTitleSlice';

const store = configureStore({
  reducer: {
    mapSlice: mapApiSlice,
    titleSlice: mainTitleSlice
  }
});

export default store;
