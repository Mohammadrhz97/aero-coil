"use client";

import { TypeAnimation } from "react-type-animation";
import heroLogo from "../public/heroLogo.png";
import P1 from "../public/P1.png";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div id="home" className="relative h-screen w-full">
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${P1.src})` }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full pt-[20px]">
        {/* Typing animation text */}
        <div className="absolute inset-0 w-fit h-fit top-1/3 md:left-26 z-20 flex flex-col md:items-start mx-auto md:mx-0 items-center justify-center p-6 backdrop-blur-xs">
          <Image
            src={heroLogo}
            alt="heroLogo"
            width={32}
            height={32}
            className="w-96 h-auto object-contain"
            unoptimized
          />
          <h2 className="font-bold text-[32px] text-white">ROOFTOP</h2>
          <div className="w-[250px] h-[75px] flex items-center md:items-start flex-col">
            <TypeAnimation
              style={{
                whiteSpace: "normal",
                height: "auto",
                display: "block",
                textAlign: "left",
              }}
              speed={20}
              sequence={[`AIR CONDITIONER UNIT`, 2000, ""]}
              className="text-[18px] text-white"
              repeat={Infinity}
            />
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                height: "auto",
                display: "block",
                textAlign: "left",
              }}
              speed={20}
              sequence={[`Universal Compact Series`, 2000, ""]}
              className=" font-light text-[14px] text-white"
              repeat={Infinity}
            />
          </div>
          <Link
            href={"#contact"}
            className="border border-black text-2xl bg-[var(--color-lightBlue)]/60 rounded-3xl px-5 py-1 cursor-pointer font-semibold transition-transform duration-200 hover:scale-105"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full -mt-20 z-10">
        <Link
          href={"#features"}
          className="w-12 h-12 rounded-full bg-[var(--color-lightBlue)] flex items-center justify-center animate-bounce shadow-md cursor-pointer z-20 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
