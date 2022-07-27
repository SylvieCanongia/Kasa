import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import AppartmentDetail from '../../pages/AppartmentDetail';
import About from '../../pages/About';

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/appartment/:id' element={<AppartmentDetail />} />
      <Route path='/about' element={<About />} />
      {/* default route if no other matches */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default index;