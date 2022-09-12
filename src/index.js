import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Main from "./pages/Main";
import OurCoffee from "./pages/OurCoffee";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/our-coffee" element={<OurCoffee />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
