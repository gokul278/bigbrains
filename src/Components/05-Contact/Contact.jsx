import React from "react";
import bannerabout from "../../assets/Img/About/Banner-About.png";
import design1 from "../../assets/Img/Contact/01-DESIGN.svg";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation("global");
  console.log("t", t);

  return (
    <div className="w-full bg-[#f5f7f8]" align="center">
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
        <h1
          className={`w-[90%] ${
            t("contact.contact") === "Contact Us"
              ? "text-[30px]"
              : "text-[25px]"
          } text-[#fff] font-outfit font-bold`}
        >
          {t("contact.contact")}
        </h1>
      </div>
      <div className="w-[80%] h-[auto] lg:h-[70vh]" align="center">
        <div className="w-[100%] flex-col lg:flex-row flex justify-evenly">
          <div
            className="w-full lg:w-[50%] flex flex-col justify-center items-center"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <p className="text-[18px] pb-14 lg:text-[21px] font-normal lg:font-normal font-outfit">
              {t("contact.para")}
            </p>
          </div>
          <div
            className="w-full lg:w-[45%] lg:my-0 flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img className="w-[100%]" src={design1} alt="design1" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-y-6 lg:justify-evenly pb-16">
        <a
          href="tel:+41767603921"
          target="_blank"
          className="w-[320px] h-[120px] rounded flex shadow-sm bg-[#309591]"
        >
          <div className="w-[70px] flex items-center justify-center">
            <i class="text-[40px] fa-solid fa-phone"></i>
          </div>
          <div className="w-[240px] flex flex-col items-start justify-center">
            <div className="text-[19px] font-bold font-outfit">
              +41 76 760 39 21
            </div>
            <div className="text-[16px] font-normal font-outfit pt-1">
              Call Us / Whatsapp
            </div>
          </div>
        </a>
        <a
          href="mailto:bigbrains.swiss@gmail.com"
          target="_blank"
          className="w-[320px] h-[120px] rounded flex shadow-sm bg-[#309591]"
        >
          <div className="w-[70px] flex items-center justify-center">
            <i class="text-[40px] fa-regular fa-envelope"></i>
          </div>
          <div className="w-[240px] flex flex-col items-start justify-center">
            <div className="text-[19px] font-bold font-outfit">
              bigbrains.swiss@gmail.com
            </div>
            <div className="text-[16px] font-normal font-outfit pt-1">
              Send Email
            </div>
          </div>
        </a>
        <a
          href="https://maps.app.goo.gl/XFbhUnkjVX2f2Eaa9"
          target="_blank"
          className="w-[320px] h-[120px] rounded flex shadow-sm bg-[#309591]"
        >
          <div className="w-[70px] flex items-center justify-center">
            <i class="text-[35px] fa-solid fa-map-location-dot"></i>
          </div>
          <div className="w-[240px] flex flex-col items-start justify-center">
            <div className="text-[19px] font-bold font-outfit">
              GZ Oerlikon, VFK Kloten,
            </div>
            <div className="text-[19px] font-bold font-outfit">
              GZ Heuried, GZ Leimbach.
            </div>
            <div className="text-[16px] font-normal font-outfit pt-1">
              Our Address
            </div>
          </div>
        </a>
      </div>

      <div className="w-[100%] h-[auto] lg:h-[90vh] flex justify-center items-center">
        <div className="pb-10 flex flex-col lg:flex-row w-[90%] g:w-[85%]">
          <div className="w-[100%] lg:w-[50%]">
            <div className="w-[100%] lg:w-[90%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.2124484173996!2d8.543173376015764!3d47.40779717117228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a8724770265%3A0xa8f0c252259ab770!2sGZ%20Oerlikon%20-%20Z%C3%BCrcher%20Gemeinschaftszentren!5e0!3m2!1sen!2sin!4v1727623062839!5m2!1sen!2sin"
                width="100%"
                allowfullscreen=""
                loading="lazy"
                className="h-[50vh] lg:h-[73vh]"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] mt-10 lg:mt-0">
            <div className="w-full flex justify justify-between mb-5">
              <div className="w-[48%]">
                <div class="flex flex-col justify-start items-start">
                  <div className="my-1 text-slate-500 font-outfit text-[16px]">
                    First Name
                  </div>
                  <input
                    class="px-3 w-[100%] text-[15px] font-outfit bg-[#fff] text-black p-2 border border-white/10 rounded outline-none ring-2 ring-blue-500/0 focus:ring-[#309591]"
                    name="text"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[48%]">
                <div class="flex flex-col justify-start items-start">
                  <div className="my-1 text-slate-500 font-outfit text-[16px]">
                    Last Name
                  </div>
                  <input
                    class="px-3 w-[100%] text-[15px] font-outfit bg-[#fff] text-black p-2 border border-white/10 rounded outline-none ring-2 ring-blue-500/0 focus:ring-[#309591]"
                    name="text"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="w-[100%] mb-5">
              <div class="flex flex-col justify-start items-start">
                <div className="my-1 text-slate-500 font-outfit text-[16px]">
                  Email Address
                </div>
                <input
                  class="px-3 w-[100%] text-[15px] font-outfit bg-[#fff] text-black p-2 border border-white/10 rounded outline-none ring-2 ring-blue-500/0 focus:ring-[#309591]"
                  name="text"
                  type="text"
                />
              </div>
            </div>
            <div className="w-[100%] mb-5">
              <div class="flex flex-col justify-start items-start">
                <div className="my-1 text-slate-500 font-outfit text-[16px]">
                  Phone Number
                </div>
                <input
                  class="px-3 w-[100%] text-[15px] font-outfit bg-[#fff] text-black p-2 border border-white/10 rounded outline-none ring-2 ring-blue-500/0 focus:ring-[#309591]"
                  name="text"
                  type="text"
                />
              </div>
            </div>

            <div className="w-[100%] mb-10">
              <div class="flex flex-col justify-start items-start">
                <div className="my-1 text-slate-500 font-outfit text-[16px]">
                  Your Message
                </div>
                <textarea
                  class="px-3 w-[100%] h-[15vh] text-[15px] font-outfit bg-[#fff] text-black p-2 border border-white/10 rounded outline-none ring-2 ring-blue-500/0 focus:ring-[#309591]"
                  name="text"
                  type="text"
                ></textarea>
              </div>
            </div>

            <div className="w-full">
              <button class="submitbutton">
                Send a Message
                <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
