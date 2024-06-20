import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import MapApI from './../components/MapApi/MapApI';
import DetailPage from './../pages/DetailPage';
import MainLocaton from '../pages/MainLocation';
import UploadPost from '../components/uploadpost/UploadPost';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppRouter = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainLocaton />} />
          <Route path="upload" element={<UploadPost />} />
          <Route path="mapapi" element={<MapApI />} />
          <Route path="/post-detail/:id" element={<DetailPage />} />
          {/* 여기에 추가해주시면 됩니당(LayOut은 navbaer와 footer예정) */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
