"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
// import dynamic from "next/dynamic";

// // Dynamically importing the MapComponent with SSR disabled
// const MapComponent = dynamic(() => import("@/components/MapComponent"), {
//   ssr: false, // Disable server-side rendering
//   loading: () => <p className="">Loading The Map...</p>,
// });

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="max-w-[1024px] mx-auto py-8 space-y-4 mt-16"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center bg-[var(--color-lightBlue)] p-3 rounded-2xl border-2 border-r-4 border-b-4 border-[var(--color-highlight)]"
        >
          CONTACT
        </motion.h2>

        {/* Contact info and location map section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Contact details section */}
          <div className="flex flex-col justify-end bg-[var(--color-lightBlue)]/70 border-2 border-r-4 border-b-4 border-[var(--color-highlight)] p-5 rounded-lg">
            {/* Phone */}
            <div className="flex items-center justify-between gap-2 ">
              <div className="flex gap-2 items-center">
                <BsTelephoneInbound />
                Telephone:
              </div>
              <a
                href="tel:+98919****"
                className="flex items-center justify-between px-4 hover:scale-105  border border-gray-800 rounded-2xl cursor-pointer  transition"
              >
                0919****
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-between gap-2 mt-8">
              <div className="flex gap-2 items-center">
                <FaInstagram />
                Instagram:{" "}
              </div>
              <a
                href="https://instagram.com/we_packaging"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:scale-105 border border-gray-800 rounded-2xl cursor-pointer gap-2 px-2 transition"
              >
                <FaLink className="w-5 h-5 " />
                Click!
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center justify-between gap-2 mt-8">
              <div className="flex gap-2 items-center">
                <FaWhatsapp />
                Whats App:
              </div>

              <a
                href="https://wa.me/+98919601****"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:scale-105 border border-gray-800 rounded-2xl cursor-pointer gap-2 px-2 transition"
              >
                <FaLink className="w-5 h-5 " />
                Click!
              </a>
            </div>

            {/* Telegram */}
            <div className="flex items-center justify-between gap-2 mt-8">
              <div className="flex gap-2 items-center">
                <FaTelegramPlane />
                Telegram:
              </div>

              <a
                href="https://t.me/we_packaging"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:scale-105 border border-gray-800 rounded-2xl cursor-pointer gap-2 px-2 transition"
              >
                <FaLink className="w-5 h-5 " />
                Click!
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center justify-between gap-2 mt-8">
              <div className="flex gap-2 items-center">
                <HiOutlineOfficeBuilding />
                <span className="font-semibold">Address:</span>
              </div>
              Iran - Tehran
            </div>
          </div>
          {/* Map showing business location */}
          {/* <div className="flex justify-center items-center mt-6 bg-[var(--color-lightBlue)]/70 border-2 border-r-4 border-b-4 border-[var(--color-highlight)] p-5 rounded-lg"> */}
          {/* <MapComponent /> */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default Contact;
