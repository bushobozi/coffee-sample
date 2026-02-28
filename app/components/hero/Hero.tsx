"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SVG from "../svg/SVG";
import Button from "../buttons/Button";

const slides = [
  {
    id: 1,
    src: "https://media.istockphoto.com/id/696944132/photo/grains-of-ripe-coffee-in-the-handbreadths-of-a-person-east-africa-coffee-plantation.webp?a=1&b=1&s=612x612&w=0&k=20&c=WdESDGIizu76R6se1VLchlehVPzgq-nl8_QB6ZrcbMY=",
    alt: "Coffee Growing",
    title: "Growing Coffee",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
    alt: "Coffee Processing",
    title: "Processing",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
    alt: "Coffee Exporting",
    title: "Exporting",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <svg className="clipppy absolute -top-249.5 -left-249.5 w-0 h-0">
        <defs>
          <clipPath id="clip-another1" clipPathUnits={"objectBoundingBox"}>
            <path
              d="M0 0.0417599C0 0.0186966 0.0250721 0 0.056 0H0.6105C0.641428 0 0.6665 0.0186965 0.6665 0.0417599V0.148024C0.6665 0.171087 0.691572 0.189784 0.7225 0.189784H0.944C0.974928 0.189784 1 0.20848 1 0.231544V0.95824C1 0.981303 0.974928 1 0.944 1H0.056C0.0250721 1 0 0.981303 0 0.95824V0.0417599Z"
              fill="#D9D9D9"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight uppercase">
            Growing
            <span className="inline-block align-middle mx-2">
              <div className="h-10 w-24 lg:h-14 lg:w-32 rounded-full overflow-hidden border border-gray-200 relative shadow-inner">
                <Image
                  src={slides[0].src}
                  alt="Growing Coffee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
            </span>
            Importing
            <br />
            <span className="flex items-center gap-2 lg:gap-4 mt-2 lg:mt-4 flex-wrap">
              <span>& Exporting</span>
              <div className="h-10 w-24 lg:h-14 lg:w-32 rounded-full overflow-hidden border border-gray-200 relative shadow-inner">
                <Image
                  src={slides[2].src}
                  alt="Exporting Coffee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
              <span>Coffee</span>
            </span>
          </h1>

          <motion.p
            className="mt-8 text-gray-500 text-lg max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From the rich soils of Uganda to the world. We specialize in the
            sustainable growth, meticulous processing, and global export of
            premium coffee beans.
          </motion.p>

          <motion.div
            className="mt-8 lg:w-2/3 md:w-1/2 w-full lg:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              variant="primary"
              size="xl"
              type="button"
              block={true}
              roundedFull
              className="shadow-xl shadow-orange-500/20"
            >
              <span className="font-medium mx-4">Explore Our Beans</span>
              <span className="text-gray-50 rounded-full -ml-2 p-2 group-hover:bg-gray-200 transition">
                <SVG width="25" height="25" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative w-full h-125 lg:h-150 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slides[currentIndex].src}
                alt={slides[currentIndex].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ clipPath: "url(#clip-another1)" }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-md bg-white/5 border-t border-white/10 rounded-t-3xl">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-white text-3xl font-bold tracking-wide"
                >
                  {slides[currentIndex].title}
                </motion.h3>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="xl"
              type="button"
              className="h-25 w-45 rounded-2xl"
            >
              <span className="text-gray-900 rounded-full p-2 group-hover:bg-gray-200 transition">
                <SVG width="65" height="65" />
              </span>
            </Button>
          </div>
          <div className="absolute bottom-28 left-8 flex space-x-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-orange-500 w-8"
                    : "bg-white/40 w-4 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
