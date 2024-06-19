import { createSlice } from '@reduxjs/toolkit';

const mainTitleSlice = createSlice({
  name: 'mapApiSlice',
  initialState: {
    user_lat: '',
    user_lng: '',
    distanceFromMe: 0,
    my_place: ''
  },

  reducers: {
    setUserLat: (state, action) => {
      state.user_lat = action.payload;
    },
    setUserLng: (state, action) => {
      state.user_lng = action.payload;
    },
    setUserPlace: (state, action) => {
      state.my_place = action.payload;
    }
  }
});
export const { setUserLat, setUserLng, setUserPlace } = mainTitleSlice.actions;
export default mainTitleSlice.reducer;
