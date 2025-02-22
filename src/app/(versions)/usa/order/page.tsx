import Order from "@/components/Order";
import React from "react";

export default function page({ searchParams }: any) {
  return (
    <>
      <title>Order Now | Onlineassignmentdesk.com</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects"
        key="desc"
      />
      <link rel="canonical" href={`https://onlineassignmentdesk.com/usa/order`}></link>

      <Order coupon={searchParams.coupon} />
    </>
  );
}
