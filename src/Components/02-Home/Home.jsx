import React from "react";
import bg1 from "../../assets/Img/Home/01-BG.png";
import design1 from "../../assets/Img/Home/01-DESIGN.png";
export const Home = () => {
  return (
    <div>
      <div className="w-full h-[auto] lg:h-screen bg-[#F5F7F8]" align="center">
        <div
          className="w-[100%] bg-auto lg:bg-[cover] py-7 lg:w-[90%] h-[auto] lg:h-screen flex flex-col items-center lg:flex-row"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: "center",
          }}
        >
          <div className="w-[90%] lg:w-[50%] flex flex-col justify-end lg:justify-center items-end">
            <h1
              className="w-[80%] lg:w-[100%] text-[28px] lg:text-[30px] font-outfit font-semibold"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Unlock Your Child’s Potential with Robotics and Coding at{" "}
              <span className="text-[#309591]">Big Brains</span>
            </h1>
            <p className="mt-4 text-[16px] font-normal font-outfit">
              At Big Brains, we’re introducing children to the exciting world of
              robotics and coding, helping them unlock their full potential. Our
              programs go beyond just building robots—they nurture creativity,
              boost problem-solving skills, and cultivate a deep passion for
              technology. We believe every child is an innovator in the making,
              and we’re here to help them realize that potential.{" "}
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] flex justify-center items-center">
            <img className="w-[80%] mt-5 lg:mt-0" src={design1} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  );
};
