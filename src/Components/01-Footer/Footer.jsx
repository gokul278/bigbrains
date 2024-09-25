import React from "react";
import logo from "../../assets/Img/Logo/logo.webp";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
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
              Welcome to Big Brains, where we ignite your child's passion for
              robotics! Our programs nurture creativity, boost problem-solving
              skills, and inspire a love for technology. Join us and watch your
              child grow into a confident innovator, ready to shape the
              future—one robot at a time!
            </div>
          </div>
          <div className="w-[100%] lg:w-[30%] mt-7 lg:mt-0" align="start">
            <div className="text-[28px] tracking-widest text-[#000] underline font-bebas">
              Contact us
            </div>
            <div className=" flex items-center cursor-pointer gap-x-3 mt-4">
              <div className="w-[40px] h-[40px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i class="text-[25px] fa-regular fa-envelope rounded-full"></i>
              </div>
              <div className="text-[18px] font-nomral font-semibold font-outfit">
                bigbrains.swiss@gmail.com
              </div>
            </div>
            <div className=" flex items-center cursor-pointer gap-x-3 mt-4">
              <div className="w-[40px] h-[40px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i class="text-[18px] fa-solid fa-phone"></i>
              </div>
              <div className="text-[18px] font-nomral font-semibold font-outfit">
                Call / Whatsapp +41 76 760 39 21
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[15%] mt-7 lg:mt-0" align="start">
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
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div className="text-[18px] font-nomral font-semibold font-outfit">
                Home
              </div>
            </div>
            <div className=" flex items-center cursor-pointer gap-x-3 mt-4"
            onClick={() => {
                navigate("/about");
              }}>
              <div className="w-[25px] h-[25px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div className="text-[18px] font-nomral font-semibold font-outfit">
                About
              </div>
            </div>
            <div className=" flex items-center cursor-pointer gap-x-3 mt-4"
            onClick={() => {
                navigate("/programs");
              }}>
              <div className="w-[25px] h-[25px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div className="text-[18px] font-nomral font-semibold font-outfit">
                Programs
              </div>
            </div>
            <div className=" flex items-center cursor-pointer gap-x-3 mt-4"
            onClick={() => {
                navigate("/contact");
              }}>
              <div className="w-[25px] h-[25px] flex border-2 border-[#000] rounded-full justify-center items-center">
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div className="text-[18px] font-nomral font-semibold font-outfit">
                Contact
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
