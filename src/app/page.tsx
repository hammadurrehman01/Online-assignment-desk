"use client";

import CustomDivider from "@/components/CustomDivider";
import Footer from "@/components/Footer";
import FreeSample from "@/components/FreeSample";
import Guarantee from "@/components/Guarantee";
import Herosection from "@/components/Herosection";
import HowItWorks from "@/components/HowItWorks";
import MobileModal from "@/components/MobileModal";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import Reviews from "@/components/Reviews";
import Subjects from "@/components/Subjects";
import Trusted from "@/components/Trusted";
import WhyUs from "@/components/WhyUs";
import WhyGoGradesTest from "@/components/WhyUs";
import { useEffect, useState } from "react";

export default function Home() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("...");
  const [number, setNumber] = useState("");
  const [locationDetails, setLocationDetails] = useState<any>({});
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    const modalData = localStorage.getItem("modal");
    const storedTime = localStorage.getItem("modalTimestamp");
    const externalModal = localStorage.getItem("externalModal");

    if (modalData === "true" && storedTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(storedTime, 10);
      const eightHours = 8 * 60 * 60 * 1000;

      if (elapsedTime >= eightHours) {
        localStorage.setItem("modal", "false");
      }
    }

    // If modalData is "false" (or missing after 8 hours), show modal
    if (
      (!modalData || modalData === "false") &&
      externalModal &&
      externalModal === "false"
    ) {
      const timer = setTimeout(() => {
        setModal(true);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [modal]);

  const fetchCity = async () => {
    let cityy = localStorage.getItem("city");
    let countryy = localStorage.getItem("country");
    if (cityy !== null) {
      setCity(cityy as any);
    }
    if (countryy !== null) {
      setCountry(countryy as any);
    }

    const ipUrl = "https://api.ipify.org?format=json";

    try {
      // Fetch the user's IP address
      const response = await fetch(ipUrl);
      const data = await response.json(); // Assuming the response is in JSON
      const userIp = data.ip;

      // Fetch location data based on the IP address
      const locationResponse = await fetch(
        `https://pro.ip-api.com/json/${userIp}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
      );

      if (!locationResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const locationData = await locationResponse.json();

      // CHANGES: im change the city to country
      let fetchedCity = locationData.country || "London"; // Set default value
      // let fetchedCity = locationData.country || "London"; // Set default value
      let fetchedCountry = locationData.countryCode || "GB"; // Set default value

      // Store the city and country in local storage
      localStorage.setItem("city", fetchedCity);
      localStorage.setItem("country", fetchedCountry);

      // Assuming you have functions like setCity and setCountry to update your UI
      setCity(fetchedCity);
      setCountry(fetchedCountry);
      setLocationDetails(locationData);
    } catch (error) {
      // If the API request fails, set default values
    }
  };

  useEffect(() => {
    fetchCity();
  }, []);

  useEffect(() => {
    const dynamicNumber: any = {
      US: "+19179331132",
      MX: "+19179331132",
      CA: "+19179331132",
      AU: "+61480004010",
      NZ: "+61480004010",
      UK: "+447593709971",
    };

    if (dynamicNumber[country]) {
      setNumber(dynamicNumber[country]);
    } else {
      setNumber("+447593709971");
    }
  }, [country]);

  return (
    <div>
      <title>Best Academic Consultancy | Onlineassignmentdesk.com</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />

      <link rel="canonical" href={`https://onlineassignmentdesk.com/`}></link>
      <meta name="robots" content="noindex, nofollow" />

      <meta name="author" content="Onlineassignmentdesk.com"></meta>
      <meta
        property="og:title"
        content="Best Academic Consultancy | Onlineassignmentdesk.com"
      />
      <meta
        property="og:description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
      />
      <meta
        property="og:url"
        content="https://onlineassignmentdesk.com/"
      ></meta>
      <main>
        <Navbar number={number} />

        <Herosection
          country={country}
          city={city}
          locationDetails={locationDetails}
          title="Academic Consultancy"
        />
        {modal && (
          <Modal
            number={number}
            country={country}
            locationDetails={locationDetails}
            setModal={setModal}
            modal={modal}
          />
        )}
        {modal && (
          <MobileModal
            number={number}
            country={country}
            locationDetails={locationDetails}
            setModal={setModal}
          />
        )}

        <Trusted country={country} />
        <OurServices number={number} />
        <WhyUs
          country={country}
          number={number}
          title="Academic Consultancy"
          city={city}
          locationDetails={locationDetails}
        />
        {/* pp */}
        {/* <TrustedPartnerTest
          locationDetails={locationDetails}
          number={number}
          title="Academic Consultancy"
        /> */}

        <CustomDivider
          locationDetails={locationDetails}
          number={number}
          title="Academic Consultancy"
          mainHeadingPartOne="Your Trusted Partner for"
          mainHeadingPartTwo="Academic Excellence"
          subHeadingPartOne="We ensure premium "
          subHeadingPartTwo="tailored to meet your academic needs. Let our experienced team support you in achieving top-notch results at competitive prices."
          leftButton="Activate Discount Coupon"
          rightButton="Chat with Us Now"
          bannerImageUrl="/random/serious-teacher-checking-assignment-two-students.jpg"
        />

        {/* <OurServices number={number} /> */}
        <Subjects country={country} city={city} />
        {/* <WhatsappTest
          number={number}
          country={country}
          locationDetails={locationDetails}
        /> */}

        <CustomDivider
          locationDetails={locationDetails}
          number={number}
          title="Academic Consultancy"
          mainHeadingPartOne="One Stop Solution to All"
          mainHeadingPartTwo="Academic Worries"
          subHeadingPartOne="OnlineAssignmentDesk.com ensures to deliver the world-class "
          subHeadingPartTwo="at prices that are best in the market. Our team always responds to the demands of the students quickly and fulfills them in the best possible way."
          leftButton="Get Free Quote"
          rightButton="Whatsapp Direct Chat"
          bannerImageUrl="/random/cheerful-students-celebrating.jpg"
        />

        <Guarantee country={country} city={city} title="Academic Consultancy" />
        {/* <EveryStudentTest
          locationDetails={locationDetails}
          number={number}
          title="Academic Consultancy"
        /> */}

        <CustomDivider
          locationDetails={locationDetails}
          number={number}
          title="Academic Consultancy"
          mainHeadingPartOne="Reliable Academic Assistance Team for "
          mainHeadingPartTwo="Every Student"
          subHeadingPartOne="From tight deadlines to complex topics, we provide fast, reliable, and affordable assignment solutions. Connect with us to experience hassle-free academic success."
          subHeadingPartTwo=""
          leftButton="Order now"
          rightButton="Live Chat Support"
          bannerImageUrl="/random/5-Reasons-to-go-to-uni-besides-boosting-your-career-prospects.jpg"
        />

        <Reviews />
        <HowItWorks title="Academic Consultancy" />

        <FreeSample
          locationDetails={locationDetails}
          country={country}
          title="Academic Consultancy"
        />
        <Footer number={number} title="Academic Consultancy" />
      </main>
    </div>
  );
}
