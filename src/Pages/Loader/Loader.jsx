import React from "react";
import "./Loader.css";
import logo from "../../assets/Img/Logo/logo.webp";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="spinner">
        <div className="spinner-bg"></div>
        <div className="w-[290px] h-[290px] rounded-full flex justify-center items-center bg-[#f5f7f8]">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
