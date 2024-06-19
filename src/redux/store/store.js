import { configureStore } from '@reduxjs/toolkit';
import mapApiSlice from '../mapApiSlice';
import postsSlice from '../slice/postsSlice';

const store = configureStore({
  reducer: {
    mapSlice: mapApiSlice,
    postsSlice
  }
});

export default store;
