import About2 from "@/components/about/About2";
import Banner from "@/components/about/Banner";
import Steps from "@/components/about/Steps";
import React from "react";

export default function page() {
  return (
    <div className="">
      <title>About us | Onlineassignmentdesk.com</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link rel="canonical" href={`https://onlineassignmentdesk.com/ca/about`}></link>

      <Banner region={"/ca"} />
      <About2 region={"/ca"} />
      <Steps region={"/ca"} />
    </div>
  );
}
