import { createSlice } from '@reduxjs/toolkit';

const mapApiSlice = createSlice({
  name: 'mapApiSlice',
  initialState: {
    lat: '',
    lng: '',
    user_lat: '',
    user_lng: '',
    road: '',
    bunji: '',
    distanceFromMe: 0
  },

  reducers: {
    setLat: (state, action) => {
      state.lat = action.payload;
    },
    setLng: (state, action) => {
      state.lng = action.payload;
    },
    setUserLat: (state, action) => {
      state.user_lat = action.payload;
    },
    setUserLng: (state, action) => {
      state.user_lng = action.payload;
    },
    resetValue: (state, action) => {
      state.lat = '';
      state.lng = '';
      state.user_lat = '';
      state.user_lng = '';
    },
    setDistanceFromMe: (state, action) => {
      state.distanceFromMe = action.payload;
    },
    setRoad: (state, action) => {
      state.road = action.payload;
    },

    setBunji: (state, action) => {
      state.bunji = action.payload;
    }
  }
});
export const { setLat, setLng, setUserLat, setUserLng, resetValue, setDistanceFromMe, setRoad, setBunji } =
  mapApiSlice.actions;
export default mapApiSlice.reducer;
