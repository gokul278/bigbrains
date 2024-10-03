import React from "react";
import bg1 from "../../assets/Img/Home/01-BG.png";
import bg2 from "../../assets/Img/Home/02-BG.png";
import bg3 from "../../assets/Img/Home/03-BG.png";
import bg4 from "../../assets/Img/Home/04-BG.png";
import design1 from "../../assets/Img/Home/01-DESIGN.png";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import animation1 from "../../assets/Img/Animation/animation1.json";
import animation2 from "../../assets/Img/Animation/animation2.json";
import design2 from "../../assets/Img/Home/02-DESIGN.jpg";
import design3 from "../../assets/Img/Home/03-DESIGN.jpg";
import identify from "../../assets/Img/Home/Logo/identify.svg";
import evaluate from "../../assets/Img/Home/Logo/evaluate.svg";
import exprienced from "../../assets/Img/Home/Logo/exprienced.svg";
import personalized from "../../assets/Img/Home/Logo/personalized.svg";
import learning from "../../assets/Img/Home/Logo/learning.svg";
import TestimonialSlider from "../../Pages/TestimonialSlider/TestimonialSlider";
import "./Home.css";

export const Home = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div>
      <div className="w-full h-[auto] lg:h-[100vh] bg-[#F5F7F8]" align="center">
        <div
          className="w-[100%] bg-right lg:bg-left lg:bg-[cover] py-7 lg:w-[85%] h-[auto] lg:h-screen flex flex-col items-center justify-center lg:flex-row"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${bg1})`,
          }}
        >
          <div className="w-[100%] lg:w-[53%] flex flex-col justify-center items-center">
            <h1
              className="w-[90%] lg:w-[100%] my-10 pt-4 lg:pt-0 lg:my-0 text-[28px] lg:text-[28px] font-outfit font-semibold"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("home.heading1")}{" "}
              <span className="text-[#309591]">Maven Academy</span>
            </h1>
            <p className="w-[85%] lg:w-[100%] mt-4 text-[18px] font-normal font-outfit">
              {t("home.content1")}{" "}
            </p>
          </div>
          <div className="w-[100%] lg:w-[30%] flex justify-center items-center">
            <img className="w-[100%] mt-5 lg:mt-0" src={design1} alt="img1" />
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#F5F7F8]" align="center">
        <div className="w-[100%] lg:w-[80%] flex justify-center items-center">
          <h1 className="text-[40px] text-[#309591] flex font-bebas tracking-widest">
            {t("home.whyquestion")}
          </h1>
          <span className="">
            <Lottie
              className="w-[120px] h-[120px]"
              animationData={animation1}
              loop={true}
            />
          </span>
        </div>
      </div>
      <div
        className="w-[100%] py-5 bg-[#F5F7F8]"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        align="center"
      >
        <div className="w-[80%] h-[auto] lg:h-[65vh] flex flex-col lg:flex-row justify-between items-center">
          <div className="w-[100%] lg:w-[40%]">
            <img
              className="w-[90%] rounded-md shadow-sm"
              src={design2}
              alt="design2"
              data-aos="zoom-in"
            />
          </div>
          <div className="w-[100%] pt-5 py-5 lg:pt-0 lg:w-[55%]">
            <p
              className="text-[18px] lg:text-[18px] font-normal lg:font-normal font-outfit"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {t("home.whyanswer")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f5f7f8] h-[auto] lg:h-screen" align="center">
        <div
          className="w-[100%] bg-scroll lg:bg-fixed rounded h-[auto] lg:h-screen"
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            className="w-full py-10 lg:py-0 h-[auto] lg:h-screen flex flex-col justify-evenly items-center rounded bg-[#000]/[.8]"
            align="center"
          >
            <div>
              <h1
                className="w-full flex justify-center text-[30px] lg:text-[40px] text-[#fff] font-bebas tracking-widest"
                align="center"
              >
                {t("home.howquestion")}
              </h1>
              <p className="mt-4 w-[95%] text-[20px] text-[#fff] font-normal lg:font-normal font-outfit">
                {t("home.howanswer")}
              </p>
            </div>
            <div className="text-[#fff] py-10 lg:py-0 gap-y-8 w-full flex flex-col lg:flex-row justify-evenly items-center">
              <div
                className="w-[290px] lg:w-[220px] h-[auto] lg:h-[310px] cursor-pointer rounded border-2"
                data-aos="zoom-in"
              >
                <img className="w-[100px] py-3" src={identify} alt="identify" />
                <div className="py-2 text-[17px] font-semibold font-outfit">
                  {t("home.howhead1")}
                </div>
                <p className="w-[95%] text-[15px] pb-3 lg:pb-0 font-normal font-outfit">
                  {t("home.howcontent1")}
                </p>
              </div>
              <div
                className="w-[290px] lg:w-[220px] h-[auto] lg:h-[310px] cursor-pointer rounded border-2"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img className="w-[100px] py-3" src={evaluate} alt="evaluate" />
                <div className="py-2 text-[17px] font-semibold font-outfit">
                  {t("home.howhead2")}
                </div>
                <p className="w-[95%] text-[15px] pb-3 lg:pb-0 font-normal font-outfit">
                  {t("home.howcontent2")}
                </p>
              </div>
              <div
                className="w-[290px] lg:w-[220px] h-[auto] lg:h-[310px] cursor-pointer rounded border-2"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  className="w-[100px] py-3"
                  src={exprienced}
                  alt="exprienced"
                />
                <div className="py-2 text-[17px] font-semibold font-outfit">
                  {t("home.howhead3")}
                </div>
                <p className="w-[95%] text-[15px] pb-3 lg:pb-0 font-normal font-outfit">
                  {t("home.howcontent3")}
                </p>
              </div>
              <div
                className="w-[290px] lg:w-[220px] h-[auto] lg:h-[310px] cursor-pointer rounded border-2"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img
                  className="w-[100px] py-3"
                  src={personalized}
                  alt="personalized"
                />
                <div className="py-2 text-[17px] font-semibold font-outfit">
                  {t("home.howhead4")}
                </div>
                <p className="w-[95%] text-[15px] pb-3 lg:pb-0 font-normal font-outfit">
                  {t("home.howcontent4")}
                </p>
              </div>
              <div
                className="w-[290px] lg:w-[220px] h-[auto] lg:h-[310px] cursor-pointer rounded border-2"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <img className="w-[100px] py-3" src={learning} alt="learning" />
                <div className="py-2 text-[17px] font-semibold font-outfit">
                  {t("home.howhead5")}
                </div>
                <p className="w-[95%] text-[15px] pb-3 lg:pb-0 font-normal font-outfit">
                  {t("home.howcontent5")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] pt-14 bg-[#f5f7f8]" align="center">
        <div className="w-[95%] lg:w-[80%] flex justify-center items-center">
          <span className="">
            <Lottie
              className="w-[120px] h-[120px]"
              animationData={animation2}
              loop={true}
            />
          </span>
          <h1 className="text-[40px] text-[#309591] flex flex-col font-bebas tracking-widest">
            {t("home.coding")}&nbsp;
            <span className="text-[#000] font-bold">Maven Academy</span>
          </h1>
        </div>
      </div>

      <div
        className="w-[100%] py-5 bg-[#F5F7F8]"
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        align="center"
      >
        <div className="w-[85%] h-[auto] lg:h-[65vh] flex flex-col lg:flex-row justify-evenly items-center">
          <div className="w-[100%] lg:w-[50%]">
            <p
              className="w-[100%] text-[18px] lg:text-[18px] font-normal font-outfit"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {t("home.codingcontent1")}
              <div className="pt-[20px]">{t("home.codingcontent2")}</div>
            </p>
          </div>
          <div className="w-[100%] mt-5 lg:mt-0 lg:w-[40%]">
            <img
              className="w-[90%] rounded-md shadow-sm"
              src={design3}
              alt="design2"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      <div
        className="w-full py-10 flex flex-col justify-evenly items-center h-[autp] bg-[#f5f7f8]"
        align="center"
      >
        <h1
          className="text-[60px] text-[#309591] flex flex-col font-bebas tracking-widest"
          align="center"
        >
          Testimonials
        </h1>
        <div className="w-[90%] lg:w-[70%]">
          <TestimonialSlider />
        </div>
        <p
          className="w-[90%] mt-7 text-[16px] lg:text-[18px] font-normal font-outfit"
          align="center"
        >
          {t("home.enrollcontent")}&nbsp;
          <div className="text-[#309591] font-bold">Maven Academy!</div>
        </p>

        <div className="mt-5">
          <button className="c-button c-button--gooey">
            {t("home.enrollbutton")}
            <div className="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="block w-0 h-0"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in="SourceGraphic" in2="goo"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
