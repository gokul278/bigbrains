import React from "react";
import logo from "../../assets/Img/Logo/logo.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[100%] py-10 bg-[#309591]" align="center">
        <div
          className="w-[90%] flex flex-col lg:flex-row justify-evenly"
          align="start"
        >
          <div className="w-[100%] lg:w-[30%]" align="start">
            <div>
              <img className="w-[120px]" src={logo} alt="logo" />
            </div>
            <div className="mt-5 text-justify font-semibold text-[18px] font-outfit">
              {t("footer.content")}
            </div>
          </div>
          <div className="w-[100%] lg:w-[30%] mt-7 lg:mt-0" align="start">
            <div className="text-[28px] tracking-widest text-[#000] underline font-bebas">
              Get in Touch
            </div>
            <a
              href="mailto:bigbrains.swiss@gmail.com"
              target="_blank"
              className=" flex items-center cursor-pointer text-[#000] hover:text-[#fff] transition-all duration-200 gap-x-3 mt-4"
            >
              <div className="w-[40px] h-[40px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i className="text-[25px] fa-regular fa-envelope rounded-full"></i>
              </div>
              <div className="text-[18px] font-nomral font-semibold font-outfit">
                bigbrains.swiss@gmail.com
              </div>
            </a>
            <a
              href="tel:+41767603921"
              target="_blank"
              className=" flex items-center cursor-pointer gap-x-3 mt-4 text-[#000] hover:text-[#fff] transition-all duration-200"
            >
              <div className="w-[40px] h-[40px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i className="text-[18px] fa-solid fa-phone"></i>
              </div>
              <div className="text-[18px] font-nomral font-semibold font-outfit">
                Call / Whatsapp +41 76 760 39 21
              </div>
            </a>
            <div className=" flex items-center cursor-pointer gap-x-3 mt-4 text-[#000] hover:text-[#fff] transition-all duration-200">
              <div className="w-[40px] h-[40px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i className="text-[18px] fa-solid fa-location-dot"></i>
              </div>
              <div className="text-[18px] font-nomral font-semibold font-outfit">
                GZ Oerlikon, VFK Kloten, <div className="block"></div>GZ
                Heuried, GZ Leimbach.
              </div>
            </div>
            <div className=" flex items-center cursor-pointer gap-x-3 mt-4 ">
              <div className="w-[40px] h-[40px] flex border-2 border-[#000] text-[#000] hover:text-[#fff] transition-all duration-200 rounded-full justify-center items-center">
                <i className="text-[18px] fa-brands fa-instagram"></i>
              </div>
              <div className="w-[40px] h-[40px] flex border-2 border-[#000] text-[#000] hover:text-[#fff] transition-all duration-200 rounded-full justify-center items-center">
                <i className="text-[18px] fa-brands fa-facebook-f"></i>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[17%] mt-7 lg:mt-0" align="start">
            <div className="text-[28px] tracking-widest text-[#000] underline font-bebas">
              Pages
            </div>
            <div
              className=" flex items-center cursor-pointer gap-x-3 mt-4"
              onClick={() => {
                navigate("/");
              }}
            >
              <div className="w-[25px] h-[25px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div
                className={`text-[18px]  font-nomral font-semibold font-outfit text-[#000] hover:text-[#fff] transition-all duration-200 ${
                  location.pathname === "/" ? "underline" : null
                }`}
              >
                {t("nav.home")}
              </div>
            </div>
            <div
              className=" flex items-center cursor-pointer gap-x-3 mt-4"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div className="w-[25px] h-[25px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div
                className={`text-[18px] font-nomral font-semibold font-outfit text-[#000] hover:text-[#fff] transition-all duration-200 ${
                  location.pathname === "/about" ? "underline" : null
                }`}
              >
                {t("nav.about")}
              </div>
            </div>
            <div
              className=" flex items-center cursor-pointer gap-x-3 mt-4"
              onClick={() => {
                navigate("/programs");
              }}
            >
              <div className="w-[25px] h-[25px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div
                className={`text-[18px] font-nomral font-semibold font-outfit text-[#000] hover:text-[#fff] transition-all duration-200 ${
                  location.pathname === "/programs" ? "underline" : null
                }`}
              >
                {t("nav.programs")}
              </div>
            </div>
            <div
              className=" flex items-center cursor-pointer gap-x-3 mt-4"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <div className="w-[25px] h-[25px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div
                className={`text-[18px] font-nomral font-semibold font-outfit text-[#000] hover:text-[#fff] transition-all duration-200 ${
                  location.pathname === "/contact" ? "underline" : null
                }`}
              >
                {t("nav.contact")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 py-3 border-[#fff] bg-[#309591]">
        <div
          className="text-[16px] lg:text-[17px] text-[#000] font-semibold font-outfit"
          align="center"
        >
          © Copyright @ BIG BRAINS - 2024.
          <div className="block lg:hidden"></div> All Rights Reserved
        </div>
      </div>
    </>
  );
};
