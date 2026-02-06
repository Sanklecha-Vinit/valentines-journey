"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function KissDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),   // closeness exists
      setTimeout(() => setStep(2), 3200),   // overlap
      setTimeout(() => setStep(3), 5200),   // words
      setTimeout(() => onComplete(), 16000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#050509] to-black px-6 text-center">
      <div className="max-w-md flex flex-col items-center">

        {/* Intimate overlap */}
        {step >= 1 && (
          <div className="relative w-56 h-28 mb-20">
            {/* Presence */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.45,
                scale: step >= 2 ? [1, 1.01, 1] : 1,
              }}
              transition={{ duration: 6, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-pink-300/40 blur-xl"
            />

            {/* Second presence */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.45,
                scale: step >= 2 ? [1, 1.01, 1] : 1,
              }}
              transition={{ duration: 6, ease: "easeInOut", delay: 0.2 }}
              className="absolute inset-2 rounded-full bg-pink-300/40 blur-xl"
            />
          </div>
        )}

        {/* Intimate words */}
        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="text-pink-200 text-sm leading-relaxed tracking-wide"
          >
            I don’t think about this moment.
            <br />
            I just feel it.
            <br /><br />
            The way the world goes quiet
            <br />
            when you’re this close.
            <br /><br />
            Nothing needs to happen.
            <br />
            Being here —
            <br />
            together —
            <br />
            is already everything.
          </motion.p>
        )}
      </div>
    </div>
  );
}
