import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/00-Header/Header";
import "./App.css";
import { Home } from "./Components/02-Home/Home";
import { Footer } from "./Components/01-Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
