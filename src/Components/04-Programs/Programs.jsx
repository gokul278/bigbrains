import React from "react";
import bannerabout from "../../assets/Img/About/Banner-About.png";
import design1 from "../../assets/Img/Programs/01-DESIGN.png";
import bg1 from "../../assets/Img/Programs/01-BG.png";
import paint1 from "../../assets/Img/Programs/01-PAINT.png";
import img1 from "../../assets/Img/Programs/01-IMG.png";
import img2 from "../../assets/Img/Programs/02-IMG.png";
import img3 from "../../assets/Img/Programs/03-IMG.png";
import point1 from "../../assets/Img/Programs/01-POINT.png";
import video1 from "../../assets/Img/Programs/01-VIDEO.mp4";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Programs = () => {
  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#f5f7f8]" align="center">
      <div
        data-aos="flip-left"
        className="w-[200px] h-[200px] flex justify-evenly items-center"
        style={{
          backgroundImage: `url(${bannerabout})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-[30px] text-[#fff] font-outfit font-bold">
          {t("program.program")}
        </h1>
      </div>
      <div className="w-[80%] h-[auto] lg:h-[70vh]" align="center">
        <div className="w-[100%] flex-col lg:flex-row flex justify-evenly">
          <div
            className="w-full lg:w-[45%] lg:my-0 flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img className="w-[100%]" src={design1} alt="design1" />
          </div>
          <div
            className="w-full lg:w-[50%] flex flex-col justify-center items-center"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className="font-bold py-2 lg:py-4 text-[23px] text-[#309591]">
              {t("program.heading1")}
            </h1>
            <p className="text-[18px] pb-14 lg:text-[21px] font-normal lg:font-normal font-outfit">
              {t("program.content1")}
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full h-[auto] py-10"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-[100vh] flex flex-col items-center justify-evenly">
          <div
            data-aos="flip-left"
            className="w-[350px] h-[150px] flex justify-evenly items-center"
            style={{
              backgroundImage: `url(${paint1})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="w-[90%] text-[40px] text-[#fff] font-bebas tracking-widest">
              {t("program.highlights")}
            </h1>
          </div>
          <div className="w-[100%] py-10 gap-y-16 flex flex-col justify-center items-center">
            <div
              className="w-[90%] lg:w-[70%] flex h-[120px] lg:h-[110px] shadow-sm rounded-r-full bg-[#CDE8E5]"
              data-aos="zoom-in"
            >
              <div className="w-[65%] lg:w-[80%] h-[120px] flex justify-end items-center text-[20px] lg:text-[30px] font-bold font-outfit">
                <p className="w-[90%]" align="start">
                  {t("program.highlightcontent1")}
                </p>
              </div>
              <div className="w-[45%] lg:w-[30%] h-[110px] flex justify-end items-center">
                <img
                  className="w-[150px]  h-[150px] mr-[-2] rounded-full"
                  src={img1}
                  alt="img1"
                />
                ​
              </div>
            </div>
            <div
              className="w-[90%] lg:w-[70%] flex h-[120px] lg:h-[110px] shadow-sm rounded-r-full bg-[#CDE8E5]"
              data-aos="zoom-in"
            >
              <div className="w-[65%] lg:w-[80%] h-[120px] flex justify-end items-center text-[20px] lg:text-[30px] font-bold font-outfit">
                <p className="w-[90%]" align="start">
                  {t("program.highlightcontent2")}
                </p>
              </div>
              <div className="w-[45%] lg:w-[30%] h-[110px] flex justify-end items-center">
                <img
                  className="w-[150px] h-[150px] mr-[-2] rounded-full"
                  src={img2}
                  alt="img2"
                />
                ​
              </div>
            </div>
            <div
              className="w-[90%] lg:w-[70%] flex h-[120px] lg:h-[110px] shadow-sm rounded-r-full bg-[#CDE8E5]"
              data-aos="zoom-in"
            >
              <div className="w-[65%] lg:w-[80%] h-[120px] flex justify-end items-center text-[20px] lg:text-[30px] font-bold font-outfit">
                <p className="w-[90%]" align="start">
                  {t("program.highlightcontent3")}
                </p>
              </div>
              <div className="w-[45%] lg:w-[30%] h-[110px] flex justify-end items-center">
                <img
                  className="w-[150px]  h-[150px] mr-[-2] rounded-full"
                  src={img3}
                  alt="img3"
                />
                ​
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f5f7f8] py-20">
        <h1
          className="w-[90%] lg:w-full flex justify-center text-[30px] lg:text-[40px] text-[#309591] font-bebas tracking-widest"
          align="center"
        >
          {t("program.overviewhead")}
        </h1>

        <div className="w-full pt-10">
          <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-between">
            <div className="w-[100%] lg:w-[45%]">
              <div className="w-full flex flex-col">
                <div className="w-[100%] flex justify-center">
                  <h1 className="text-[25px] font-bold font-outfit">
                    {t("program.overviewcontent11")}
                    <br />
                    {t("program.overviewcontent12")}
                  </h1>
                </div>
                <div className="w-[100%] pt-5 flex justify-center">
                  <p className="text-[18px] text-justify font-normal">
                    {t("program.overviewcontent13")}
                  </p>
                </div>
                <div className="w-[100%] pt-8 flex justify-center">
                  <h1 className="text-[25px] font-bold font-outfit">
                    {t("program.overviewcontent14s")}
                  </h1>
                </div>
                <div className="w-[100%] pt-5 flex justify-center">
                  <div className="w-[15%] h-[10px]">
                    <img
                      className="w-[80%]"
                      src={point1}
                      alt="point"
                      data-aos="zoom-in"
                    />
                  </div>
                  <div className="w-[80%] text-[18px] text-justify">
                    {t("program.overviewcontent15")}
                  </div>
                </div>
                <div className="w-[100%] pt-3 flex justify-center">
                  <div className="w-[15%]">
                    <img
                      className="w-[80%]"
                      src={point1}
                      alt="point"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    />
                  </div>
                  <div className="w-[80%] text-[18px] text-justify">
                    {t("program.overviewcontent16")}
                  </div>
                </div>
                <div className="w-[100%] pt-3 flex justify-center">
                  <div className="w-[15%]">
                    <img
                      className="w-[80%] mt-0 lg:-mt-2"
                      src={point1}
                      alt="point"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    />
                  </div>
                  <div className="w-[80%] text-[18px] text-justify">
                    {t("program.overviewcontent17")}
                  </div>
                </div>
                <div className="w-[100%] pt-5 flex justify-center">
                  <div class="flex flex-col border-2 border-black overflow-hidden p-0 rounded-xl shadow-large bg-[#fce34f] w-[90%] lg:w-[70%]">
                    <div class="px-2 py-8 sm:p-10 sm:pb-6">
                      <div class="items-center w-full justify-center grid grid-cols-1 text-left">
                        <div>
                          <h2 class="text-black font-bold text-lg lg:text-3xl">
                            Overview
                          </h2>
                          <p class="text-black tracking-tight xl:text-xl mt-5">
                            90 Minutes , once a week.​
                          </p>
                        </div>
                        <div class="mt-2">
                          <p>
                            <span class="text-black tracking-tight xl:text-4xl">
                              CHF 200
                            </span>
                            <span class="text-black font-medium text-base">
                              /mo
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col flex-1 justify-between pb-8 px-6 sm:px-8 space-y-6">
                      <div class="flex flex-col gap-3 sm:flex-row">
                        <div
                          onClick={() => {
                            navigate("/contact");
                          }}
                          class="text-black cursor-pointer items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2"
                        >
                          Contact Us
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] lg:w-[45%] mt-10 lg:m-0">
              <div className="w-full flex flex-col">
                <div className="w-[100%] flex justify-center">
                  <h1 className="text-[25px] font-bold font-outfit">
                    {t("program.overviewcontent21")}
                    <br />
                    {t("program.overviewcontent22")}
                  </h1>
                </div>
                <div className="w-[100%] pt-5 flex justify-center">
                  <p className="text-[18px] text-justify font-normal">
                    {t("program.overviewcontent23")}
                  </p>
                </div>
                <div className="w-[100%] pt-8 flex justify-center">
                  <h1 className="text-[25px] font-bold font-outfit">
                    {t("program.overviewcontent14")}
                  </h1>
                </div>
                <div className="w-[100%] pt-5 flex justify-center">
                  <div className="w-[15%] h-[10px]">
                    <img
                      className="w-[80%]"
                      src={point1}
                      alt="point"
                      data-aos="zoom-in"
                    />
                  </div>
                  <div className="w-[80%] text-[18px] text-justify">
                    {t("program.overviewcontent24")}
                  </div>
                </div>
                <div className="w-[100%] pt-3 flex justify-center">
                  <div className="w-[15%]">
                    <img
                      className="w-[80%] mt-0 lg:-mt-2"
                      src={point1}
                      alt="point"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    />
                  </div>
                  <div className="w-[80%] text-[18px] text-justify">
                    {t("program.overviewcontent25")}​
                  </div>
                </div>
                <div className="w-[100%] flex justify-center">
                  <div className="w-[15%]">
                    <img
                      className="w-[80%]"
                      src={point1}
                      alt="point"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    />
                  </div>
                  <div className="w-[80%] text-[18px] text-justify">
                    {t("program.overviewcontent26")}
                  </div>
                </div>
                <div className="w-[100%] pt-8 flex justify-center">
                  <div class="flex flex-col border-2 border-black overflow-hidden p-0 rounded-xl shadow-large bg-[#fce34f] w-[90%] lg:w-[70%]">
                    <div class="px-2 py-8 sm:p-10 sm:pb-6">
                      <div class="items-center w-full justify-center grid grid-cols-1 text-left">
                        <div>
                          <h2 class="text-black font-bold text-lg lg:text-3xl">
                            Overview
                          </h2>
                          <p class="text-black tracking-tight xl:text-xl mt-5">
                            90 Minutes , once a week.​
                          </p>
                        </div>
                        <div class="mt-2">
                          <p>
                            <span class="text-black tracking-tight xl:text-4xl">
                              CHF 200
                            </span>
                            <span class="text-black font-medium text-base">
                              /mo
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col flex-1 justify-between pb-8 px-6 sm:px-8 space-y-6">
                      <div class="flex flex-col gap-3 sm:flex-row">
                        <div
                          onClick={() => {
                            navigate("/contact");
                          }}
                          class="text-black cursor-pointer items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2"
                        >
                          Contact Us
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full pb-16">
          <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-between items-center">
            <div className="w-[100%] lg:w-[45%]">
              <h1
                className="w-[90%] lg:w-full flex justify-center text-[30px] lg:text-[40px] text-[#309591] font-bebas tracking-widest"
                align="center"
              >
                {t("program.overviewcontent18")}
              </h1>
              <p className="text-[18px] mt-5 text-justify font-normal">
                {t("program.overviewcontent19")}
              </p>
              <p className="text-[18px] mt-3 text-justify font-normal">
                {t("program.overviewcontent110")}
              </p>
            </div>
            <div className="w-[100%] lg:w-[45%] mt-8 lg:mt-0 flex justify-center items-center">
              <video src={video1} controls width="100%">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
