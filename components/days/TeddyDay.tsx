"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TeddyDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 600),   // penguin appears
      setTimeout(() => setStep(2), 2200),  // hug motion
      setTimeout(() => setStep(3), 4200),  // message
      setTimeout(() => onComplete(), 9000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1a0b12] to-black px-6 text-center">
      <div className="flex flex-col items-center">

        {/* 🐧 Penguin Teddy */}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-12"
          >
            {/* Body */}
            <div className="relative w-32 h-40 rounded-full bg-[#f7a1c4] mx-auto">

              {/* Belly */}
              <div className="absolute left-1/2 top-10 w-20 h-24 -translate-x-1/2 rounded-full bg-[#fde2ec]" />

              {/* Eyes */}
              <div className="absolute left-10 top-10 w-2 h-2 rounded-full bg-[#4a2433]" />
              <div className="absolute right-10 top-10 w-2 h-2 rounded-full bg-[#4a2433]" />

              {/* Beak */}
              <div className="absolute left-1/2 top-14 w-4 h-3 -translate-x-1/2 rounded-b-full bg-[#f4b942]" />

              {/* Flippers */}
              <motion.div
                initial={{ x: -18 }}
                animate={{ x: step >= 2 ? -6 : -18 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-[-20px] top-16 w-10 h-20 rounded-full bg-[#f7a1c4]"
              />

              <motion.div
                initial={{ x: 18 }}
                animate={{ x: step >= 2 ? 6 : 18 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute right-[-20px] top-16 w-10 h-20 rounded-full bg-[#f7a1c4]"
              />
            </div>
          </motion.div>
        )}

        {/* 💬 Message */}
        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className="text-pink-200 text-sm leading-relaxed tracking-wide"
          >
            Even on days when the world feels cold,
            <br />
            I hope you always feel warm.
            <br /><br />
            If you ever need comfort —
            <br />
            just know I’m right here.
          </motion.p>
        )}
      </div>
    </div>
  );
}
