"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Guarantee(props: any) {
  const [reg, setReg] = useState<string>("");
  const { country, city, title, region } = props;

  useEffect(() => {
    if (region !== undefined) {
      setReg(region);
    } else {
      setReg("");
    }
  }, [region]);

  const data = [
    {
      header: "Zero Plagiarism Guaranteed",
      details: `When you choose our services, our Ph.D.-certified academic consultants craft each document from scratch, ensuring originality and uniqueness.   ${
        title ? ` ${title}` : `Academic Assistance`
      } We understand the rigorous scrutiny at universities, so we guarantee 100% original, thoroughly proofread, and edited documents to help you achieve top grades.`,
      image: "/ss1.png",
    },
    {
      header: "Full Refund Guaranteed",
      details: `We always aim for a win-win situation for our customers. While complaints are rare, we ensure a full refund if our services do not meet expectations. If the assistance provided fails to serve its purpose, we promptly return your money. Many students proudly say, “OnlineAssignmentDesk.com is fair and affordable.” We recognize the importance of trust in academic assistance and strive to build strong, reliable relationships with students.`,
      image: "/ss2.png",
    },
    {
      header: "Complete Satisfaction Guaranteed",
      details: `We are committed to delivering high-quality, well-researched documents that ensure student satisfaction and top grades. Our strict policies guarantee no compromises on quality. The expert  ${
        title ? ` ${title}` : `Academic Assistance`
      } ${city} in Pakistan work diligently to provide exceptional support. If you ever face any issues, our customer care team is always available to assist you.`,
      image: "/ss4.png",
    },
    {
      header: "Revisions Until Satisfaction",
      details: `When you choose our  ${
        title ? ` ${title}` : `Academic Assistance`
      } in ${city}, we deliver comprehensive and well-researched documents. If you have any doubts, we offer unlimited free revisions to ensure complete satisfaction. Our team ensures timely delivery, giving scholars ample time to review and research their work. With our free revisions, you can confidently say, “OnlineAssignmentDesk.com is always there for me, even after delivery.`,
      image: "/ss6.png",
    },
    {
      header: "Best Price Guaranteed",
      details: `With a transparent pricing structure, we ensure students receive fair value for our online  ${
        title ? ` ${title}` : `Academic Assistance`
      }. Our services are designed to be budget-friendly, offering regular discounts and freebies to keep costs manageable. We strive to provide quality assistance without adding financial burden.`,
      image: "/sideline1.png",
    },
  ];

  return (
    <div className="bg-white flex flex-col justify-center items-center text-center py-20 myContainer ">
      <h3 className="uppercase section-main-heading text-2xl md:text-4xl font-semibold">
        What We Guarantee
      </h3>
      <h4 className="section-sub-heading text-lg py-1 mt-2">
        Know Why Students Trust Our Academic Assistance
      </h4>
      <p className="text-primary-orange  text-[13px] sm:text-[16px] mt-6">
        OnlineAssignmentDesk.com guarantees top-quality work and complete
        student satisfaction. Here’s why you can rely on us with confidence.
      </p>
      <div className="flex justify-center items-start gap-10 my-10 flex-wrap">
        {data.map((item: any, index: number) => (
          <div className="mt-4 w-[45%] max-sm:w-[100%]" key={index}>
            <img
              height={"100"}
              width={"100"}
              src={item.image}
              alt="img"
              className="self-center  h-[100px] w-[100px] max-w-[100px] mx-auto mb-2"
            ></img>
            <h3 className="text-[24px] text-[#292929] font-medium">
              {item.header}
            </h3>
            <p className=" text-base font-medium  leading-[20px] text-[#2A2A2A] mt-2">
              {item.details}
            </p>
          </div>
        ))}
      </div>

      <div className="relative w-[70%] md:w-[25%] mx-auto hover:scale-95 transition-all duration-300 ease-in-out">
        {" "}
        <Link
          href={`${reg}/order?coupon=GG-50%off`}
          // href={`https://api.whatsapp.com/send?phone=${number}&text=Hello Online Assignment Desk!`}
          className="bg-[#ff8e38] flex items-center justify-center text-center w-[300px] h-12 z-[11] text-xl text-white font-semibold absolute"
        >
          Order Now
        </Link>
        <div className="bg-[#383838] w-[300px] h-12 ml-1.5 mt-2.5 text-xl text-white font-semibold absolute"></div>
      </div>
    </div>
  );
}
