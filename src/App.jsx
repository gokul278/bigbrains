import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/00-Header/Header";
import "./App.css";
import { Home } from "./Components/02-Home/Home";
import { Footer } from "./Components/01-Footer/Footer";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";
import About from "./Components/03-About/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
