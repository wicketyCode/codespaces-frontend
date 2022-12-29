import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components for each page
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';

function Router() {
  return (

      <Routes>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
      </Routes>

  );
}

export default Router;
