"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import P2 from "../public/P2.png";
import D1 from "../public/description/D1.png";
import D2 from "../public/description/D2.png";
import D3 from "../public/description/D3.png";
import D4 from "../public/description/D4.png";
import D5 from "../public/description/D5.png";
import G1 from "../public/description/G1.png";
import G2 from "../public/description/G2.png";
import G3 from "../public/description/G3.png";
import G4 from "../public/description/G4.png";
import G5 from "../public/description/G5.png";
import GetTheCataloge from "./GetTheCataloge";
import Contact from "./Contact";

function Description() {
  return (
    <>
      <section id="features" className="relative pt-8 p-6 scroll-mt-12">
        {/* Background */}
        <div
          className="absolute inset-0 bg-black bg-cover bg-center bg-fixed bg-no-repeat blur-[3px] contrast-70 -z-10"
          style={{ backgroundImage: `url(${P2.src})` }}
        />

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[var(--color-lightBlue)] p-2 font-extrabold max-w-[1024px]  text-2xl mx-auto text-center border-2 border-r-4 border-b-4 border-[var(--color-highlight)] rounded-2xl">
            <p>ABOUT THE PRODUCT</p>
          </div>
        </motion.div>

        {/* First Part */}
        <div className="grid grid-cols-12 gap-4 mt-12 max-w-[1024px] mx-auto">
          {/* Image Container */}
          <motion.div
            className="md:col-span-7 col-span-10 bg-[var(--color-lightBlue)]/70 rounded-2xl border-2 border-r-4 border-b-4 border-[var(--color-highlight)]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              src={D1}
              alt="Product Image"
              width={32}
              height={32}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="col-start-6 col-span-7 bg-[var(--color-lightBlue)]/70 border-2 border-r-4 border-b-4 border-[var(--color-highlight)] rounded-2xl p-3 -mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <h2 className="font-bold text-2xl">GENERAL DESCRIPTION</h2>
            <p className="mt-2 text-justify text-xs md:text-lg">
              The ACPRC Series with new features is suitable for hotel, office,
              hospital, school, factory and supermarket applications. The low
              noise and compact series are completely leak tested, evacuated,
              dehydrated and charged with refrigerant prior to shipment. The
              units are rated in accordance with AHRI standards 340/360.
            </p>
          </motion.div>
        </div>

        {/* Second Part */}
        <div className="grid grid-cols-12 gap-4 mt-12 max-w-[1024px] mx-auto">
          {/* Image Container */}
          <motion.div
            className="md:col-span-7 col-span-11 bg-[var(--color-lightBlue)]/70 rounded-2xl border-2 border-r-4 border-b-4 border-[var(--color-highlight)] p-3"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h2 className="font-bold text-2xl">WIDE CAPACITY RANGE</h2>
            <p className="mt-2 text-justify text-xs md:text-lg">
              Wide cooling capacity range from 6.2 to 45 tons. <br />
              Heat pump and cooling only products are available.
            </p>

            <Image
              src={D2}
              alt="Product Image"
              width={32}
              height={32}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </motion.div>

          <motion.div
            className=" col-start-6 col-span-12 -mt-16 bg-[var(--color-lightBlue)]/70 rounded-2xl border-2 border-r-4 border-b-4 border-[var(--color-highlight)] p-3"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h2 className="font-bold text-2xl">WIDE OPERATION RANGE</h2>
            <p className="mt-2 text-justify">
              ACPRC series HP operate from 16°C to 52°c in cooling <br />
              Standard cooling only model operate from 16°C to 52°c. <br />
              Low ambient kit can be added to make the unit operate from -15°C
              to 52°c.
            </p>

            <Image
              src={D3}
              alt="Product Image"
              width={32}
              height={32}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </motion.div>
        </div>

        {/* Third Part */}
        <div className="mt-12 max-w-[1024px] mx-auto relative">
          {/* Image Container */}
          <motion.div
            className="w-full h-[660px] bg-[var(--color-lightBlue)]/70 rounded-2xl border-2 border-r-4 border-b-4 border-[var(--color-highlight)] p-3"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h2 className="font-bold text-2xl">
              ENVIRONMENTALLY FRIENDLY REFRIGERANT
            </h2>
            <p className="mt-2 text-justify">
              ACPRV series uses the environmentally friendly refrigerant,
              standard with R410A in each system. <br />
              <strong>zero ozone</strong> depletian potential. <br />
              Optional with R32 new refrigerant gas.{" "}
            </p>
            <div className="relative mt-26 mx-auto w-full max-w-[1024px]">
              {/* Main Image (Floating) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={G1}
                  alt="Main Image"
                  width={4}
                  height={4}
                  className="w-3/4 max-w-[400px] h-auto object-contain mx-auto"
                  unoptimized
                />
              </motion.div>

              {/* Floating Icons — use % or translate for positioning */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="absolute md:top-[50%] md:left-[25%] top-[60%] left-[5%] "
              >
                <Image
                  src={G2}
                  alt="Icon"
                  className="md:w-26 w-16 h-auto object-contain"
                  unoptimized
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="absolute md:top-[99%] md:left-[35%] top-[100%] left-[25%]"
              >
                <Image
                  src={G3}
                  alt="Icon"
                  className="md:w-26 w-16 h-auto object-contain"
                  unoptimized
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="absolute md:top-[99%] md:right-[35%] top-[100%] left-[55%]"
              >
                <Image
                  src={G4}
                  alt="Icon"
                  className="md:w-26 w-16 h-auto object-contain"
                  unoptimized
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute md:top-[50%] md:right-[25%] top-[60%] right-[5%]"
              >
                <Image
                  src={G5}
                  alt="Icon"
                  className="md:w-26 w-16 h-auto object-contain"
                  unoptimized
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Fourth Part */}
        <div
          id="design"
          className="grid grid-cols-12 gap-4 mt-26 max-w-[1024px] mx-auto scroll-mt-36"
        >
          {/* Text Content */}
          <motion.div
            className="md:col-span-7 col-start-1 col-span-10 z-10 bg-[var(--color-lightBlue)]/70 border-2 border-r-4 border-b-4 border-[var(--color-highlight)] rounded-2xl p-3 -mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <h2 className="font-bold text-2xl">
              COMPACT STRUCTURE & EASY TRANSITING
            </h2>
            <p className="mt-2 text-justify text-xs md:text-lg">
              Unit with compact structure design for better loading. <br />
              The base frame of the unit is designed with forklift slots and
              rigging holes for easier transportation and installation.
            </p>
          </motion.div>

          {/* Image Container */}
          <motion.div
            className="col-start-6 col-span-12 bg-[var(--color-lightBlue)]/70 rounded-2xl border-2 border-r-4 border-b-4 border-[var(--color-highlight)] -mt-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              src={D4}
              alt="Product Image"
              width={32}
              height={32}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </motion.div>
        </div>

        {/* Fifth Part */}
        <div className="grid grid-cols-12 gap-4 mt-26 max-w-[1024px] mx-auto">
          {/* Text Content */}
          <motion.div
            className="md:col-span-7 col-start-1 col-span-10 z-10 bg-[var(--color-lightBlue)]/70 border-2 border-r-4 border-b-4 border-[var(--color-highlight)] rounded-2xl p-3 -mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <h2 className="font-bold text-2xl">DESIGN FLEXIBILITY</h2>
            <p className="mt-2 text-justify text-xs md:text-lg">
              Vertical side-discharge structure design. <br />
              Flangers of air flow inlet and outlet as standard. <br />
              It is suitable for installation on rooftop and ground.
            </p>
          </motion.div>

          {/* Image Container */}
          <motion.div
            className="col-start-6 col-span-12 bg-[var(--color-lightBlue)]/70 rounded-2xl border-2 border-r-4 border-b-4 border-[var(--color-highlight)] -mt-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              src={D5}
              alt="Product Image"
              width={32}
              height={32}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </motion.div>
        </div>
        <GetTheCataloge />
        <Contact />
      </section>
    </>
  );
}

export default Description;
