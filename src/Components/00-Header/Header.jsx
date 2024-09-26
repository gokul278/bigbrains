import React, { useState } from "react";
import logo from "../../assets/Img/Logo/logo.webp";
import { useLocation, useNavigate } from "react-router-dom";
import navbg from "../../assets/Img/Logo/nav-bg.png";
import { useTranslation } from "react-i18next";
import enimg from "../../assets/Img/Language/en.svg";
import deimg from "../../assets/Img/Language/de.svg";
import Loader from "../../Pages/Loader/Loader";

const Header = () => {
  const [language, setLanguage] = useState("de");
  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();
  const location = useLocation();

  const [loadingStatus, setLoadingStatus] = useState(false);

  const changeLanguage = (newLanguage) => {
    setLoadingStatus(true);
    i18n.changeLanguage(newLanguage);

    if (newLanguage === "de") setLanguage("en");
    else setLanguage("de");

    setTimeout(() => {
      setLoadingStatus(false);
    }, 1000);
  };

  return (
    <div className="bg-[#F5F7F8]">
      {loadingStatus && <Loader />}
      {/* rounded-b-[35%] lg:rounded-b-[50%] lg:hover:rounded-b-[0] */}
      <div
        className={`w-[100%] h-[160px] bg-center lg:bg-left rounded-b-[25%] lg:rounded-b-[50%] lg:hover:rounded-b-[0] transition-all duration-100`}
        style={{
          backgroundImage: `url(${navbg})`,
          backgroundSize: "cover",
        }}
        align="center"
      >
        <div className="w-full flex">
          <div className="w-[90%] lg:w-[95%]">
            <img className="w-[120px] ml-[70px]" src={logo} alt="logo" />
          </div>
          <div className="w-[10%] lg:w-[5%] mt-5">
            {language === "en" ? (
              <img
                onClick={() => changeLanguage("en")}
                className="w-[30px] lg:w-[40px] rounded cursor-pointer"
                src={enimg}
                alt="en"
              />
            ) : (
              <img
                onClick={() => changeLanguage("de")}
                className="w-[30px] lg:w-[40px] rounded cursor-pointer"
                src={deimg}
                alt="de"
              />
            )}
          </div>
        </div>
        <div className="flex w-[100%] justify-center gap-x-3 lg:gap-x-8 mt-3">
          <div
            className={`tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#f5f7f8] font-bebas ${
              location.pathname === "/" ? "underline" : ""
            }`}
            onClick={() => {
              navigate("/");
            }}
          >
            {t("nav.home")}
          </div>
          <div
            className={`tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#f5f7f8] font-bebas ${
              location.pathname === "/about" ? "underline" : ""
            }`}
            onClick={() => {
              navigate("/about");
            }}
          >
            {t("nav.about")}
          </div>
          <div
            className={`tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#f5f7f8] font-bebas ${
              location.pathname === "/programs" ? "underline" : ""
            }`}
            onClick={() => {
              navigate("/programs");
            }}
          >
            {t("nav.programs")}
          </div>
          <div
            className={`tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#f5f7f8] font-bebas ${
              location.pathname === "/contact" ? "underline" : ""
            }`}
            onClick={() => {
              navigate("/contact");
            }}
          >
            {t("nav.contact")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
