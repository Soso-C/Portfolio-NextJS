"use client";
import ButtonMain from "../Button/ButtonMain";
import ButtonsSocials from "../Button/ButtonsSocials";
import Avatar from "./Avatar";
import LeftSection from "./LeftSection";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen lg:pt-20">
      <div className="flex flex-col items-start justify-center w-full h-full max-w-6xl p-2 mx-auto mt-20 lg:mt-0">
        {/* Wrapper */}
        <div className="grid grid-cols-1 gap-6 md:gap-2 md:h-auto md:grid-cols-3 justify-items-center">
          {/* Left section */}
          <LeftSection />
          <Avatar />
        </div>
      </div>
    </div>
  );
}
