import React from 'react';
import MapApI from './components/MapApi/MapApI';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MapApI />
    </Provider>
  );
};

export default App;
