const mapApiSlice = createSlice({
  name: 'mapApiSlice',
  initialState: {
    lat: '',
    lng: '',
    user_lat: '',
    user_lng: ''
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
    }
  }
});
export const { setLat, setLng, setUserLat, setUserLng, resetValue } = mapApiSlice.actions;
export default mapApiSlice.reducer;
