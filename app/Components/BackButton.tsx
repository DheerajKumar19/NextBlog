"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Backbutton = () => {
  const router = useRouter();
  return (
    <button className="btn " onClick={() => router.back()}>
      <ChevronLeft />
      Back
    </button>
  );
};

export default Backbutton;
