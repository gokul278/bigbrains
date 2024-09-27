import React from "react";
import Lottie from "lottie-react";
import animation3 from "../../assets/Img/Animation/animation3.json";
import animation4 from "../../assets/Img/Animation/animation4.json";
import animation5 from "../../assets/Img/Animation/animation5.json";
import bannerabout from "../../assets/Img/About/Banner-About.png";
import img1 from "../../assets/Img/About/Logo/1.png";
import img2 from "../../assets/Img/About/Logo/2.png";
import img3 from "../../assets/Img/About/Logo/3.png";
import img4 from "../../assets/Img/About/Logo/4.png";
import num1 from "../../assets/Img/About/Logo/num1.svg";
import num2 from "../../assets/Img/About/Logo/num2.svg";
import num3 from "../../assets/Img/About/Logo/num3.svg";
import logo from "../../assets/Img/About/Logo/logo.png";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div className="w-full bg-[#F5F7F8]" align="center">
      <div
        data-aos="flip-left"
        className="w-[200px] h-[200px] flex justify-center items-center"
        style={{
          backgroundImage: `url(${bannerabout})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-[30px] text-[#fff] font-outfit font-bold">
          {t("about.aboutus")}
        </h1>
      </div>
      <div
        className="w-[80%] mt-0 lg:mt-10 h-[auto] lg:h-[70vh]"
        align="center"
      >
        <div className="w-[100%] flex-col lg:flex-row flex">
          <div className="w-full lg:w-[55%] flex justify-evenly items-center">
            <p
              className="text-[18px] lg:text-[21px] font-normal lg:font-normal font-outfit"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {t("about.content1")}{" "}
              <span className="text-[#309591] font-bold">Big Brains</span>
              {t("about.content2")}
            </p>
          </div>
          <div className="w-full lg:w-[40%] my-10 lg:my-0 flex justify-center items-center">
            <Lottie
              data-aos-delay="100"
              data-aos="zoom-in"
              className="w-[90%] lg:w-[90%]"
              animationData={animation3}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-[#309591]" align="center">
        <div className="w-[90%] lg:w-[80%] flex justify-center items-center">
          <h1 className="text-[40px] text-[#f5f7f8] flex font-bebas tracking-widest">
            {t("about.why")}
          </h1>
          <span className="">
            <Lottie
              className="w-[150px] h-[150px]"
              animationData={animation4}
              loop={true}
            />
          </span>
        </div>

        <div className="w-[95%] py-10 lg:w-[95%] flex flex-col lg:flex-row justify-evenly items-center lg:items-start gap-y-10">
          <div className="w-[260px]" align="center">
            <img
              className="rounded-full"
              src={img1}
              data-aos="zoom-in"
              alt="img1"
            />
            <h1 className="font-bold w-[50%] py-4 text-[23px] text-[#000]">
              {t("about.whyanswerhead1")}
            </h1>
            <p className="w-[100%] text-[18px] font-normal font-outfit">
              {t("about.whyanswercontent1")}
            </p>
          </div>
          <div className="w-[260px]" align="center">
            <img
              className="rounded-full"
              src={img2}
              data-aos="zoom-in"
              data-aos-delay="100"
              alt="img1"
            />
            <h1 className="font-bold w-[80%] py-4 text-[23px] text-[#000]">
              {t("about.whyanswerhead2")}
            </h1>
            <p className="w-[100%] text-[18px] font-normal font-outfit">
              {t("about.whyanswercontent2")}
            </p>
          </div>
          <div className="w-[260px]" align="center">
            <img
              className="rounded-full"
              src={img3}
              data-aos="zoom-in"
              data-aos-delay="200"
              alt="img1"
            />
            <h1 className="font-bold w-[80%] py-4 text-[23px] text-[#000]">
              {t("about.whyanswerhead3")}
            </h1>
            <p className="w-[100%] text-[18px] font-normal font-outfit">
              {t("about.whyanswercontent3")}
            </p>
          </div>
          <div className="w-[260px]" align="center">
            <img
              className="rounded-full"
              src={img4}
              data-aos="zoom-in"
              data-aos-delay="300"
              alt="img1"
            />
            <h1 className="font-bold w-[80%] py-4 text-[23px] text-[#000]">
              {t("about.whyanswerhead4")}
            </h1>
            <p className="w-[100%] text-[18px] font-normal font-outfit">
              {t("about.whyanswercontent4")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f5f7f8]">
        <div className="w-full flex justify-center items-center">
          <h1 className=" text-[45px] lg:text-[40px] pt-8 pb-5 text-[#309591] flex font-bebas tracking-widest">
            {t("about.ourteaching")}
          </h1>
        </div>
        <div className="w-[90%] block lg:hidden lg:w-[33%]">
          <Lottie
            className="w-[100%] lg:w-[70%]"
            animationData={animation5}
            loop={true}
          />
        </div>
        <div className="w-[95%] lg:w-[85%] pt-10 flex flex-col lg:flex-row">
          <div className="w-[100%]  mb-8 lg:mb-0 lg:w-[33%]">
            <img
              className="w-[100px]"
              src={num1}
              data-aos="flip-left"
              alt="num1"
            />
            <h1 className="font-bold py-4 text-[23px] text-[#309591]">
              {t("about.ourteachinghead1")}
            </h1>
            <p className="w-[100%] text-[18px] font-normal font-outfit">
              {t("about.ourteachingcontent1")}
            </p>
          </div>
          <div className="w-[100%] hidden lg:block lg:w-[33%]">
            <Lottie
              className="w-[100%] lg:w-[70%]"
              animationData={animation5}
              loop={true}
            />
          </div>
          <div className="w-[100%] lg:w-[33%]">
            <img
              className="w-[100px]"
              src={num2}
              data-aos-delay="400"
              data-aos="flip-left"
              alt="num2"
            />
            <h1 className="font-bold py-4 text-[23px] text-[#309591]">
              {t("about.ourteachinghead2")}
            </h1>
            <p className="w-[100%] text-[18px] font-normal font-outfit">
              {t("about.ourteachingcontent2")}
            </p>
          </div>
        </div>
        <div className="w-[95%] lg:w-full mt-8 lg:mt-0 pb-10">
          <div className="w-[100%] lg:w-[33%]">
            <img
              className="w-[100px]"
              src={num3}
              alt="num3"
              data-aos-delay="500"
              data-aos="flip-left"
            />
            <h1 className="font-bold py-4 text-[23px] text-[#309591]">
              {t("about.ourteachinghead3")}
            </h1>
            <p className="w-[100%] text-[18px] font-normal font-outfit">
              {t("about.ourteachingcontent3")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f5f7f8] pb-16">
        <div
          className="w-[90%] py-10 shadow-lg flex flex-col lg:flex-row justify-center items-center lg:justify-evenly rounded bg-[#fce34f]"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="w-[90%] lg:w-[50%] flex flex-col ">
            <h1 className="font-normal font-bebas py-4 text-center lg:text-start text-[40px] text-[#000]">
              {t("about.skillshead")}
            </h1>
            <p className="w-[100%] text-[18px] text-justify font-normal font-outfit">
              {t("about.skillscontent1")}
              <div className="mt-4">{t("about.skillscontent2")}</div>
            </p>
            <div className="flex mt-10">
              <div class="fancy">
                <span class="top-key"></span>
                <span class="text">{t("about.contact")}</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </div>
            </div>
          </div>
          <div className="w-[60%] mt-10 lg:mt-0 lg:w-[35%]">
            <img className="w-[100%]" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
