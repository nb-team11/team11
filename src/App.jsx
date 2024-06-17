import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react'; // 이거 지우면 오류가 나네요...?
import DetailPage from './pages/DetailPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DetailPage />
    </>
  );
}

export default App;
