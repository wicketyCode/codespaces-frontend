import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="products/details/:id" element={<ProductDetailsPage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}

export default Router;
