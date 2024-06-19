import { configureStore } from '@reduxjs/toolkit';
import mapApiSlice from '../mapApiSlice';
<<<<<<< HEAD
import mainTitleSlice from '../mainTitleSlice';
=======
import postsSlice from '../slice/postsSlice';
>>>>>>> dev

const store = configureStore({
  reducer: {
    mapSlice: mapApiSlice,
<<<<<<< HEAD
    titleSlice: mainTitleSlice
=======
    postsSlice
>>>>>>> dev
  }
});

export default store;
