import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

import Image from "next/image";

export default function TrustedTest(country: any) {
  const countryCode = country.country;
  let img = "/GGImages/University-Images/Uk-Uni.jpg";
  if (countryCode == "UK") {
    img = "/GGImages/University-Images/Uk-Uni.jpg";
  } else if (countryCode == "IE") {
    img = "/GGImages/University-Images/IE-Uni.jpg";
  } else if (countryCode == "AU") {
    img = "/GGImages/University-Images/AU-Uni.jpg";
  } else if (countryCode == "GB") {
    img = "/GGImages/University-Images/Uk-Uni.jpg";
  } else if (countryCode == "NL") {
    img = "/GGImages/University-Images/NL-Uni.jpg";
  } else if (countryCode == "NO") {
    img = "/GGImages/University-Images/NO-Uni.jpg";
  } else if (countryCode == "NZ") {
    img = "/GGImages/University-Images/NZ-Uni.jpg";
  } else if (countryCode == "OM") {
    img = "/GGImages/University-Images/OM-Uni.jpg";
  } else if (countryCode == "AE") {
    img = "/Universities-in-Dubai.jpg";
  } else if (countryCode == "US") {
    img = "/GGImages/University-Images/US-Uni.jpg";
  } else if (countryCode == "TR") {
    img = "/GGImages/University-Images/TR-Uni.jpg";
  } else if (countryCode == "PL") {
    img = "/GGImages/University-Images/PL-Uni.jpg";
  } else if (countryCode == "IT") {
    img = "/GGImages/University-Images/IT-Uni.jpg";
  } else if (countryCode == "FI") {
    img = "/GGImages/University-Images/FI-Uni.jpg";
  } else if (countryCode == "SE") {
    img = "/GGImages/University-Images/SE-Uni.jpg";
  } else if (countryCode == "AT") {
    img = "/GGImages/University-Images/AT-Uni.jpg";
  } else if (countryCode == "IS") {
    img = "/GGImages/University-Images/IS-Uni.jpg";
  } else if (countryCode == "CA") {
    img = "/GGImages/University-Images/CA-Uni.jpg";
  } else {
    img = "/GGImages/University-Images/GB-Uni.jpg";
  }

  const sliderImages = [
    "/random/ran1.png",
    "/random/ran10.png",
    "/random/ran11.png",
    "/random/ran12.png",
    "/random/ran5.png",
    "/random/ran15.png",
    "/random/ran16.png",
    "/random/ran22.png",
    "/random/ran23.png",
    "/random/ran24.png",
    "/random/ran26.png",
    "/random/ran27.png",
    "/random/ran29.png",
    "/random/ran30.png",
  ];

  return (
    <div className="">
      <h3 className="section-main-heading  font-semibold leading-tight text-2xl md:text-3xl text-center mt-7">
        Trusted by 85,000 Students <br />
      </h3>
      <p className="section-sub-heading text-base text-center  md:text-lg font-medium mt-2">
        Connect with over 4,500 trusted experts today
      </p>
      <div className="w-full flex flex-col items-center justify-center  text-center px-2 pt-5">
        <div className="w-[80%]  mx-auto mt-2">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            breakpoints={{
              300: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            className="!py-8 "
          >
            {sliderImages.map((slide, index) => (
              <>
                <SwiperSlide
                  key={index}
                  className="mx-0.5 md:mx-2 !hidden !md:block"
                >
                  <Image
                    src={slide}
                    alt="universities-logo"
                    width={150}
                    height={10}
                    className="flex items-center justify-center"
                  />
                </SwiperSlide>
                <SwiperSlide
                  key={index}
                  className="mx-0.5 md:mx-2 !block !md:hidden"
                >
                  <Image
                    src={slide}
                    alt="universities-logo"
                    width={100}
                    height={10}
                    className="flex items-center justify-center"
                  />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
