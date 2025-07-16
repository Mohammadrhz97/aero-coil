"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { FaArrowDown } from "react-icons/fa";

import Link from "next/link";

const catalogs = [
  {
    name: "DC Inverter VRF System",
    file: "/pdfs/dc-inverter-vrf-system.pdf",
  },
  {
    name: "Fan Coil Units",
    file: "/pdfs/fan-coil-units.pdf",
  },
  {
    name: "Rooftop Air Conditioner Unit",
    file: "/pdfs/rooftop-AC-unit.pdf",
  },
];

function GetTheCataloge() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="download"
      className="max-w-[1024px] mx-auto py-8 space-y-4 mt-16 scroll-mt-14"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-center bg-[var(--color-lightBlue)] p-3 rounded-2xl border-2 border-r-4 border-b-4 border-[var(--color-highlight)]"
      >
        GET THE PRODUCT CATALOGS
      </motion.h2>

      {catalogs.map((catalog, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div
            className="cursor-pointer bg-[var(--color-lightBlue)]/80 p-4 rounded-xl border-2 border-r-4 border-b-4 border-[var(--color-highlight)] flex items-center justify-between"
            onClick={() => toggle(index)}
          >
            <p className="text-lg font-semibold">{catalog.name}</p>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl"
            >
              <FaArrowDown />
            </motion.span>
          </div>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 mt-2 bg-[var(--color-highlight)]/70 rounded-lg shadow-md flex justify-center">
                  <Link
                    href={catalog.file}
                    download
                    target="_blank"
                    className="bg-[var(--color-lightBlue)] text-black px-4 py-2 rounded-lg font-medium hover:bg-[var(--color-lightBlue)]/50 transition"
                  >
                    <Download className="inline mr-2 w-4 h-4" />
                    Download PDF
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </section>
  );
}

export default GetTheCataloge;
