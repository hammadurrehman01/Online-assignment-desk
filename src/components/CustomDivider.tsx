"use client";
import { showToastError } from "@/lib/ToastMessages";
import intlTelInput from "intl-tel-input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileModal from "./MobileModal";
import Modal from "./Modal";

export default function CustomDivider(props: any) {
  const {
    number,
    title,
    country,
    locationDetails,
    mainHeadingPartOne,
    mainHeadingPartTwo,
    subHeadingPartOne,
    subHeadingPartTwo,
    leftButton,
    rightButton,
    bannerImageUrl,
  } = props;
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [userName, setUserName] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [validEmail, setIsValidEmail] = useState(true);
  const [code, setCode] = useState("");

  const phoneInputRef = useRef(null);

  const [userNamecheck, setUserNamecheck] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailcheck, setUserEmailcheck] = useState(false);
  const [OK, setIsOK] = useState(true);
  const [number1, setIsNumber2] = useState("");
  const [numberCheck, setIsNumberCheck] = useState(false);
  const [reg, setReg] = useState("");
  const [currentURL, setCurrentURL] = useState("");
  const [displayText, setDisplayText] = useState("...");
  const router = useRouter();

  const handleInputChange = (event: any) => {
    const newEmail = event.target.value;
    setUserEmail(newEmail);

    // Check if the email contains &apos;@&apos;
    setIsValidEmail(newEmail.includes("@"));
  };

  useEffect(() => {
    const input = phoneInputRef.current;
    if (input) {
      const iti = intlTelInput(input, {
        initialCountry: country,
      });

      // Clean up the event listener when the component unmounts
      return () => {
        iti.destroy();
      };
    }
  }, [phoneInputRef, country]);

  let img;
  if (country == "UK") {
    img = "/GGImages/Banner/UK-Banner.jpg";
  } else if (country == "IE") {
    img = "/GGImages/Banner/IE-Banner.jpg";
  } else if (country == "AU") {
    img = "/GGImages/Banner/AUS-Banner.jpg";
  } else if (country == "GB") {
    img = "/GGImages/Banner/UK-Banner.jpg";
  } else if (country == "NL") {
    img = "/GGImages/Banner/NL-Banner.jpg";
  } else if (country == "NO") {
    img = "/GGImages/Banner/NO-Banner.jpg";
  } else if (country == "NZ") {
    img = "/GGImages/Banner/NZ-Banner.jpg";
  } else if (country == "OM") {
    img = "/GGImages/Banner/OM-Banner.jpg";
  } else if (country == "AE") {
    img = "/GGImages/Banner/UAE-Banner.jpg";
  } else if (country == "US") {
    img = "/GGImages/DLF/US-DLF.jpg";
  } else if (country == "TR") {
    img = "/GGImages/Banner/TR-Banner.jpg";
  } else if (country == "PL") {
    img = "/GGImages/Banner/PL-Banner.jpg";
  } else if (country == "IT") {
    img = "/GGImages/Banner/IT-Banner.jpg";
  } else if (country == "FI") {
    img = "/GGImages/Banner/FI-Banner.jpg";
  } else if (country == "SE") {
    img = "/GGImages/Banner/SE-Banner.jpg";
  } else if (country == "AT") {
    img = "/GGImages/Banner/AT-Banner.jpg";
  } else if (country == "IS") {
    img = "/GGImages/Banner/IS-Banner.jpg";
  } else if (country == "CA") {
    img = "/GGImages/Banner/CA-Banner.jpg";
  } else if (country == "MX") {
    img = "/GGImages/Banner/maxicoBanner-min.jpg";
  } else {
    img = "/GGImages/Banner/UK-Banner.jpg";
  }

  let img2;
  if (country == "UK") {
    img2 = "/GGImages/DLF/UK-DLF.jpg";
  } else if (country == "IE") {
    img2 = "/GGImages/DLF/IE-DLF.jpg";
  } else if (country == "AU") {
    img2 = "/GGImages/DLF/AUS-DLF.jpg";
  } else if (country == "GB") {
    img2 = "/GGImages/DLF/UK-DLF.jpg";
  } else if (country == "NL") {
    img2 = "/GGImages/DLF/NL-DLF.jpg";
  } else if (country == "NO") {
    img2 = "/GGImages/DLF/NO-DLF.jpg";
  } else if (country == "NZ") {
    img2 = "/GGImages/DLF/NZ-DLF.jpg";
  } else if (country == "OM") {
    img2 = "/GGImages/DLF/OM-DLF.jpg";
  } else if (country == "AE") {
    img2 = "/GGImages/DLF/UAE-DLF.jpg";
  } else if (country == "US") {
    img2 = "/GGImages/Banner/US-Banner.jpg";
  } else if (country == "TR") {
    img2 = "/GGImages/DLF/TR-DLF.jpg";
  } else if (country == "PL") {
    img2 = "/GGImages/DLF/PL-DLF.jpg";
  } else if (country == "IT") {
    img2 = "/GGImages/DLF/IT-DLF.jpg";
  } else if (country == "FI") {
    img2 = "/GGImages/DLF/FI-DLF.jpg";
  } else if (country == "SE") {
    img2 = "/GGImages/DLF/SE-DLF.jpg";
  } else if (country == "AT") {
    img2 = "/GGImages/DLF/AT-DLF.jpg";
  } else if (country == "IS") {
    img2 = "/GGImages/DLF/IS-DLF.jpg";
  } else if (country == "CA") {
    img2 = "/GGImages/DLF/CA-DLF.jpg";
  } else if (country == "MX") {
    img2 = "/GGImages/DLF/MX-DLF.jpg";
  } else {
    img2 = "/GGImages/DLF/UK-DLF.jpg";
  }

  const formData = new FormData();

  const modalChange = (modal: any) => {
    setModal(false);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  // const handleSubmit = () => {
  //   if (isVerified) {
  //     formData.append("phone_code", code);
  //     formData.append("Name", userName);
  //     formData.append("Phone", number);
  //     formData.append( "Email", userEmail);
  //     formData.append("currentURL", currentURL);
  //     formData.append("locationDetails", JSON.stringify(locationDetails));
  //     formData.append("access_token", "AAH-DLF_Form");
  //     if (userNamecheck && userEmailcheck && numberCheck && validEmail) {
  //       setLoader(true);
  //       const response = fetch("/api/dlf2", {
  //         method: "POST",
  //         body: formData,
  //       }).then((response) => {
  //         if (response.ok) {
  //           setIsOK(true);
  //           router.push(`/thankyou`);
  //         }
  //         // setLoader(false);
  //       });
  //     } else {
  //       setIsOK(false);
  //       setLoader(false);
  //     }
  //   } else {
  //     const verified = showToastError(isVerified);
  //     if (verified) {
  //       return;
  //     }
  //   }
  // };

  const handleSubmit = () => {
    if (isVerified) {
      setLoader(true);
      formData.append("phone_code", code);
      formData.append("Name", userName);
      formData.append("Phone", number);
      formData.append("Email", userEmail);
      formData.append("currentURL", currentURL);
      formData.append("locationDetails", JSON.stringify(locationDetails));
      formData.append("access_token", "AAH-DLF_Form");
      if (userNamecheck && userEmailcheck && numberCheck && validEmail) {
        setLoader(true);
        const response = fetch("/api/dlf2", {
          method: "POST",
          body: formData,
        }).then((response) => {
          if (response.ok) {
            setIsOK(true);
            router.push(`/thankyou`);
          }
          // setLoader(false);
        });
      } else {
        setIsOK(false);
        setLoader(false);
      }
    } else {
      const verified = showToastError(isVerified);
      if (verified) {
        return;
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bannerImageUrl})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
      className="bg-fixed  bg-cover bg-center object-contain bg-blend-multiply flex flex-col py-16 bg-no-repeat gap-2  px-[20px] md:px-[40px]"
    >
      <h3 className="text-2xl text-center text-white font-semibold">
        {mainHeadingPartOne} <span>{mainHeadingPartTwo}</span>
      </h3>
      <p className="text-white text-center max-w-3xl mx-auto mt-1">
        {subHeadingPartOne}
        {title} {subHeadingPartTwo}
      </p>

      <div className="flex flex-col md:flex-row cursor-pointer scale-90 md:scale-100 pb-12 w-full md:w-[52%] mx-auto items-center gap-12 max-sm:justify-center mt-6 ">
        <div
          className="relative w-[90%] hover:scale-95 transition-all duration-300 ease-in-out"
          onClick={() => {
            setModal(true);
            localStorage.setItem("externalModal", "true");
          }}
        >
          <div className="bg-zinc-100 w-[300px] text-center py-3 z-[1] text-xl text-[#ff8e38] font-semibold absolute">
            {leftButton}
          </div>

          <div className="bg-[#ff8e38] w-[300px] h-12 ml-1.5 mt-2.5 text-xl text-white font-semibold absolute"></div>
        </div>

        <div className="relative w-[90%] z-0 mt-6 md:mt-0 hover:scale-95 transition-all duration-300 ease-in-out">
          <Link
            href={`https://wa.me/${number}?text=Hello Online Assignment Desk Team, I need Academic Assistance. Could you help me complete my task on time?`}
            className="bg-[#ff8e38] flex items-center justify-center text-center w-[300px] h-12 z-[11] text-xl text-white font-semibold absolute"
          >
            {rightButton}
          </Link>
          <div className="bg-zinc-100 w-[300px] h-12 ml-1.5 mt-1.5 text-xl text-white font-semibold absolute"></div>
        </div>
      </div>

      {modal && <Modal setModal={setModal} locationDetails={locationDetails} />}
      {modal && (
        <MobileModal setModal={setModal} locationDetails={locationDetails} />
      )}
    </div>
  );
}
