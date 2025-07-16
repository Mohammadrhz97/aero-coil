"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="shadow bg-[var(--color-primary)]/70  relative  -mt-0.5">
      <div className="w-full max-w-screen-xl mx-auto p-4 ">
        {/* Top section: Logo and navigation links */}
        <div className="flex items-center justify-between">
          {/* Logo linking to homepage */}
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              <div className="w-32">
                <Image
                  src={logo}
                  height={0}
                  width={0}
                  alt="logo"
                  className="w-auto h-auto"
                />
              </div>
            </span>
          </Link>

          {/* Navigation links */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#features" className="hover:underline me-4 md:me-6">
                Features
              </Link>
            </li>
            <li>
              <Link href="#download" className="hover:underline me-4 md:me-6">
                Download
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline me-4 md:me-6">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider line */}
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />

        {/* Footer bottom text */}
        <span className="block mt-4 text-sm text-gray-500 text-center dark:text-gray-400">
          © 2025–
          <Link href="https://aero-coil.com/" className="hover:underline">
            Aero Coil
          </Link>
          . All Rights Reserved.
          <br /> WebDesign and Develope by{" "}
          <Link
            href="https://github.com/mohammadrhz97"
            className="underline text-gray-800"
          >
            M.HosseinZadeh
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
