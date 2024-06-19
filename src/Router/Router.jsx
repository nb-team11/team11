import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import MapApI from './../components/MapApi/MapApI';
import DetailPage from '../pages/DetailPage';
import MainLocaton from '../pages/MainLocation';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="mapapi" element={<MapApI />} />
          <Route path="/post-detail/:id" element={<DetailPage />} />
          <Route path="/mainmap" element={<MainLocaton />} />
          {/* 여기에 추가해주시면 됩니당(LayOut은 navbaer와 footer예정) */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
