import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    name: "Yasir",
    email: "yasir@gmail.com",
    address: {
      city: "Ranchi",
      state: "Jharkhand",
      houseNumber: 58,
    },
  });
};
