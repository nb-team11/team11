import { configureStore } from '@reduxjs/toolkit';
import mapApiSlice from '../mapApiSlice';

const store = configureStore({
  reducer: {
    mapSlice: mapApiSlice
  }
});

export default store;
