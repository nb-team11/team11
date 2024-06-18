import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Navbar from './components/Navbar/Navbar';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import MapApI from './components/MapApi/MapApI';
import AppRouter from './Router/Router';
import GlobalStyle from './GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const Globalstyle = createGlobalStyle`
//   ${reset}
// `;

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
