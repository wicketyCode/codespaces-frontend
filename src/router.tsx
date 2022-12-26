import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components for each page
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function Router() {
  return (

      <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
      </Routes>

  );
}

export default Router;
