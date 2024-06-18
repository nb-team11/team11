import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Navbar from './components/Navbar/Navbar';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import MapApI from './components/MapApi/MapApI';
import AppRouter from './Router/Router';

const Globalstyle = createGlobalStyle`
  ${reset}
`;

const App = () => {
  return <></>;
};

export default App;
