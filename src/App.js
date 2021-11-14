import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import Home from "./pages/Home.js";
import BookEvent from "./pages/BookEvent.js";
import Cocktails from "./pages/Cocktails.js";
import Services from "./pages/Services.js";
import ThemeBar from "./pages/ThemeBar.js";
import Workshops from "./pages/Workshops.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookEvent" element={<BookEvent />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/themeBar" element={<ThemeBar />} />
          <Route path="/workshops" element={<Workshops />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
