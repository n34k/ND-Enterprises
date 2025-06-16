import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import logo from "../assets/images/logo-white-transparent.png"

export default function Main() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1.2, 0.91]);
  const opacity = useTransform(scrollY, [0, 500], [0.7, 0.1]);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id='main' className="h-[200vh] relative">
      {!videoLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
          <img className="text-xl animate-pulse" src={logo} alt="ND Enterprises" />
        </div>
      )}
      <div className="sticky top-0 -mt-20 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.video
          src="/assets/warehouse.mp4"
          className="absolute w-full h-[95vh] object-cover z-0 rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          style={{ scale, opacity }}
          onLoadedData={() => setVideoLoaded(true)}
        />
        <div className="flex flex-col gap-3 items-center absolute text-center z-10 px-4">
            <p className="text-5xl md:text-7xl font-bold mt-2">Your Products, Delivered with Precision.</p>
            <p className="text-3xl">ND ENTERPRISES</p>
        </div>
      </div>
    </section>
  );
}
