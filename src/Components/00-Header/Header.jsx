import React from "react";
import logo from "../../assets/Img/Logo/logo.webp";
import { useLocation, useNavigate } from "react-router-dom";
import navbg from "../../assets/Img/Logo/nav-bg.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-[#F5F7F8]">
      <div
        className={`w-[100%] h-[160px] bg-center lg:bg-left rounded-b-[35%] lg:rounded-b-[50%] lg:hover:rounded-b-[0] transition-all duration-100`}
        style={{
          backgroundImage: `url(${navbg})`,
          backgroundSize: "cover",
        }}
        align="center"
      >
        <img className="w-[120px]" src={logo} alt="logo" />
        <div className="flex w-[100%] justify-center gap-x-3 lg:gap-x-8 mt-3">
          <div
            className={` tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#fff] font-bebas ${
              location.pathname === "/" ? "underline" : ""
            }`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className={` tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#fff] font-bebas ${
              location.pathname === "/about" ? "underline" : ""
            }`}
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </div>
          <div
            className={` tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#fff] font-bebas ${
              location.pathname === "/programs" ? "underline" : ""
            }`}
            onClick={() => {
              navigate("/programs");
            }}
          >
            Programs
          </div>
          <div
            className={` tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#fff] font-bebas ${
              location.pathname === "/contact" ? "underline" : ""
            }`}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
