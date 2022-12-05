import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

import Home from "./pages/Home";
import Day01 from "./pages/Day01";
import Day02 from "./pages/Day02";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="day01" element={<Day01 />} />
          <Route path="day01" element={<Day02 />} />
      </Routes>
  </BrowserRouter>
);
