"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import openTawkToChat from "./herosection/tawkto";
export default function HowItWorksTest(title: any) {
  const [reg, setReg] = useState("");

  useEffect(() => {
    if (title.region !== undefined) {
      setReg(title.region);
    } else {
      setReg("");
    }
  }, [title.region]);
  return (
    <div
      className="flex max-sm:px-[10px] px-[30px] justify-center items-center py-20 bg-[#F5F5F5] bg-[url('/compress.png')] gap-10 md:flex-row flex-col"
      id="process"
    >
      <div className="flex flex-col md:w-[400px] md:min-w-[300px] max-md:text-center">
        <h3 className="uppercase text-2xl md:text-4xl sm:text-[24px] section-main-heading font-semibold">
          -How it works
        </h3>
        <h4 className="section-sub-heading text-base font-medium leading-tight  mt-2">
          Three Simple Steps to Avail
          {title.title ? ` ${title.title}` : ` Academic Assistance`}
        </h4>
        <p className="text-[#3E4657]  text-[13px] sm:text-[16px] mt-2">
          Ready to place an {title.title} order? You dont have to go through
          complicated processes; all you need to do is follow 3 easy steps!
        </p>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-3 w-full pt-4 pb-8">
          <div className="relative w-[40%] mx-auto  hover:scale-95 transition-all duration-300 ease-in-out">
            <div className="bg-[#292929] w-full text-center py-3 z-[1] text-xl  text-white font-semibold absolute">
              <Link href={`${reg}/order?coupon=GG-50%off`}>Order Now</Link>
            </div>
            <div className="bg-[#ff8e38] w-full h-12 ml-1.5 mt-2.5 text-xl text-white font-semibold absolute"></div>
          </div>

          <div className="cursor-pointer relative w-[40%] mx-auto z-0 mt-6 md:mt-0 hover:scale-95 transition-all duration-300 ease-in-out">
            <div
              onClick={openTawkToChat}
              className="bg-[#ff8e38] flex items-center justify-center text-center w-full h-12 z-[11] text-xl text-white font-semibold absolute"
            >
              Chat Now
            </div>
            <div className="bg-[#292929] w-full h-12 ml-1.5 mt-1.5 text-xl text-white font-semibold absolute"></div>
          </div>
        </div>
      </div>
      <div className="max-w-[600px] bg-white border shadow-md">
        <div className="h-[40px] border-b flex items-start py-3 pl-2">
          <img
            src="/assets/iphoneDots.png"
            className="h-[16px] w-[60px]"
            height={20}
            width={60}
            alt="png"
          />
        </div>
        <div className="flex px-6 py-6 gap-4 max-sm:gap-2">
          <img
            src="/assets/sideline.png"
            alt="side"
            height={400}
            width={100}
            className="sm:block hidden h-[370px] w-[96px]"
          />
          <div className="flex flex-col gap-14 py-2 items-center">
            <div className="leading-[20px] flex flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
              <img
                width={100}
                height={100}
                src="/sss2.png"
                alt="side"
                className="h-[10] w-[10] block sm:hidden mb-4"
              />
              <h3 className="text-[#071E57] sm:text-[18px] text-[24px] font-semibold">
                Submit Your Order
              </h3>
              <h4 className="text-[#3E4657] max-sm:leading-[18px] text-[15px]">
                List out the specifications and details in our online order form
                and submit it. We assure the confidentiality of your personal
                details.
              </h4>
            </div>
            <div className="leading-[20px] flex flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
              <img
                width={100}
                height={100}
                src="/sideline1.png"
                alt="side"
                className="h-[10] w-[10] block sm:hidden mb-4"
              />
              <h3 className="text-[#071E57] sm:text-[18px] text-[24px] font-semibold">
                Discussion With EXPERT
              </h3>
              <h4 className="text-[#3E4657] max-sm:leading-[18px] text-[15px]">
                Once we receive the form, our experts will contact you at the
                earliest to discuss all details related to your task. Our
                experts are more than happy to help you.
              </h4>
            </div>
            <div className="leading-[20px] flex flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
              <img
                width={100}
                height={100}
                src="/endd.png"
                alt="side"
                className="h-[10] w-[10] block sm:hidden mb-4"
              />
              <h3 className="text-[#071E57] sm:text-[18px] text-[24px] font-semibold">
                Assignment Dispatched
              </h3>
              <h4 className="text-[#3E4657] max-sm:leading-[18px] text-[15px]">
                Once we have finished the help work, the document goes through a
                proofreading process. After quality check, the final document is
                dropped to your email.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
