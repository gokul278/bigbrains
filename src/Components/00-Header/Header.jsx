import React, { useState } from "react";
import logo from "../../assets/Img/Logo/logo.webp";
import { useLocation, useNavigate } from "react-router-dom";
import navbg from "../../assets/Img/Logo/nav-bg.png";
import { useTranslation } from "react-i18next";
import enimg from "../../assets/Img/Language/en.svg";
import deimg from "../../assets/Img/Language/de.svg";
import Loader from "../../Pages/Loader/Loader";

export default function Header() {
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
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Component: Navbar with Avatar --> */}
      {/*<!-- Header --> */}
      {loadingStatus && <Loader />}
      <header className="relative z-20 w-full bg-[#309591] shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[6.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <div>
              <img className="w-[130px]" src={logo} alt="logo" />
            </div>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-[#309591] px-8 pb-5 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch mt-12 lg:mt-0">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 lg:px-8"
                >
                  <div
                    className={`tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#f5f7f8] font-bebas ${
                      location.pathname === "/" ? "underline" : ""
                    }`}
                    onClick={() => {
                      setIsToggleOpen(false);
                      navigate("/");
                    }}
                  >
                    {t("nav.home")}
                  </div>
                </div>
              </li>
              <li role="none" className="flex items-stretch">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 lg:px-8"
                >
                  <div
                    className={`tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#f5f7f8] font-bebas ${
                      location.pathname === "/about" ? "underline" : ""
                    }`}
                    onClick={() => {
                      setIsToggleOpen(false);
                      navigate("/about");
                    }}
                  >
                    {t("nav.about")}
                  </div>
                </div>
              </li>
              <li role="none" className="flex items-stretch">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 lg:px-8"
                >
                  <div
                    className={`tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#f5f7f8] font-bebas ${
                      location.pathname === "/programs" ? "underline" : ""
                    }`}
                    onClick={() => {
                      setIsToggleOpen(false);
                      navigate("/programs");
                    }}
                  >
                    {t("nav.programs")}
                  </div>
                </div>
              </li>
              <li role="none" className="flex items-stretch">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 lg:px-8"
                >
                  <div
                    className={`tracking-wide cursor-pointer text-[20px] lg:text-[25px] text-[#f5f7f8] font-bebas ${
                      location.pathname === "/contact" ? "underline" : ""
                    }`}
                    onClick={() => {
                      setIsToggleOpen(false);
                      navigate("/contact");
                    }}
                  >
                    {t("nav.contact")}
                  </div>
                </div>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              {/*        <!-- Avatar --> */}
              <div className="">
                {language === "en" ? (
                  <img
                    onClick={() => changeLanguage("en")}
                    className="w-[40px] rounded cursor-pointer"
                    src={enimg}
                    alt="en"
                  />
                ) : (
                  <img
                    onClick={() => changeLanguage("de")}
                    className="w-[40px] rounded cursor-pointer"
                    src={deimg}
                    alt="de"
                  />
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
