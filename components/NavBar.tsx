"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Calling from "../public/Calling.gif";
import Link from "next/link";
import logo from "../public/logo.png";

function Navbar() {
  // Initialize state variables
  const [nav, setNav] = useState<boolean>(false); // Controls the mobile navigation menu state
  const [open, setOpen] = useState<boolean>(false); // Controls the product dropdown state

  // References for handling outside clicks
  const navRef = useRef<HTMLDivElement>(null); // Ref for the mobile navigation menu
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the product dropdown

  // Effect to handle closing mobile nav or product dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (nav && navRef.current && !navRef.current.contains(e.target as Node)) {
        setNav(false);
      }

      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false); // Close product dropdown when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Add event listener for mouse click
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
    };
  }, [nav, open]); // Re-run effect if 'nav' or 'open' state changes

  return (
    <div className="relative">
      {/* Navbar Container */}
      <div className="text-[var(--color-lightBlue)] font-light flex justify-between items-center mx-auto h-14 px-4 text-1 fixed w-full backdrop-blur-xs border-b border-gray-800 z-40  bg-[#202121]/35  ">
        {/* Brand Logo */}
        <Link href="/">
          <div className="w-32">
            <Image
              src={logo}
              height={0}
              width={0}
              alt="logo"
              className="w-auto h-auto"
            />
          </div>
        </Link>
        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex md:mx-auto text-lg">
          <li className="p-5 relative">
            <Link href="#home">Home</Link>
          </li>
          <li className="p-5 relative">
            <Link href="#features">Features</Link>
          </li>
          <li className="p-5 relative">
            <Link href="#download">Download</Link>
          </li>
          <li className="p-5 relative">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        {/* Calling Button */}
        <Link
          href={"#contact"}
          className="md:flex items-center justify-center cursor-pointer hidden "
        >
          <Image
            src={Calling}
            alt="Calling"
            width={18}
            height={18}
            className="w-12 h-12 object-contain p-1"
            unoptimized
          />
        </Link>
        {/* Mobile Menu Toggle */}
        <div onClick={() => setNav(!nav)} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={navRef}
        className={
          nav
            ? "text-white md:hidden fixed h-full right-0 top-0 w-[35%] bg-[#202121]/35 backdrop-blur-lg ease-in-out duration-500 z-20"
            : "fixed right-[-100%] ease-out duration-100"
        }
      >
        <ul className="p-8 text-md mt-12 text-right space-y-2 ">
          <li className="p-3 relative">
            <Link href="#home">Home</Link>
            <span className="absolute bottom-0 h-[1px] bg-gray-600 transition-all duration-300 w-full left-0"></span>
          </li>
          <li className="p-3 relative">
            <Link href="#features">Features</Link>
            <span className="absolute bottom-0 h-[1px] bg-gray-600 transition-all duration-300 w-full left-0"></span>
          </li>
          <li className="p-3 relative">
            <Link href="#download">Download</Link>
            <span className="absolute bottom-0 h-[1px] bg-gray-600 transition-all duration-300 w-full left-0"></span>
          </li>
          <li className="p-3 relative">
            <Link href="#contact">Contact</Link>
            <span className="absolute bottom-0 h-[1px] bg-gray-600 transition-all duration-300 w-full left-0"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
