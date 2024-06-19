import React from 'react';
import App from './App';
import './index.css'; // 폰트 적용해야해서 지우지 말아주세요 ~
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './GlobalStyle';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </Provider>
  </>
);
