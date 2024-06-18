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
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
