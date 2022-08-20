import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import AppartmentDetail from "../../pages/AppartmentDetail/AppartmentDetail";
import About from "../../pages/About/About";
import Error from "../../pages/Error/Error";

const index = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appartment/:id" element={<AppartmentDetail />} />
        <Route path="/about" element={<About />} />
        {/* default route if no other matches */}
        <Route path="*" element={<Error />} />
      </Routes>
    </React.StrictMode>
  );
};

export default index;
