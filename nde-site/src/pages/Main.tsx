import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Main() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1.2, 0.91]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section id='main' className="h-[200vh] relative">
      <div className="sticky top-0 -mt-20 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.video
          src="/assets/warehouse.mp4"
          className="absolute w-11/12 h-11/12 object-cover z-0 rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          style={{ scale, opacity }}
        />
        <div className="absolute w-3/4 text-center z-10 text-white px-4">
            <p className="text-xl font-bold">ND Enterprises</p>
            <p className="text-5xl md:text-7xl font-bold mt-2">Your Products, Delivered with Precision.</p>
        </div>
      </div>
    </section>
  );
}
