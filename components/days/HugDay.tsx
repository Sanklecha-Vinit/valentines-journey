"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HugDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1200),   // presence
      setTimeout(() => setStep(2), 3200),   // hug closes
      setTimeout(() => setStep(3), 5200),   // message
      setTimeout(() => onComplete(), 14000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#090910] to-black px-6 text-center">
      <div className="max-w-md flex flex-col items-center">

        {/* The Hug */}
        {step >= 1 && (
          <div className="relative w-72 h-40 mb-20 overflow-hidden">
            {/* Left side */}
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              animate={{
                x: step >= 2 ? -40 : -120,
                opacity: 1,
              }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 w-44 h-full rounded-full bg-pink-300/40"
            />

            {/* Right side */}
            <motion.div
              initial={{ x: 120, opacity: 0 }}
              animate={{
                x: step >= 2 ? 40 : 120,
                opacity: 1,
              }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-0 w-44 h-full rounded-full bg-pink-300/40"
            />
          </div>
        )}

        {/* Message */}
        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-pink-200 text-sm leading-relaxed tracking-wide"
          >
            You don’t have to say anything.
            <br />
            You don’t have to be okay.
            <br /><br />
            This is just me,
            <br />
            holding you,
            <br />
            for as long as you need.
          </motion.p>
        )}
      </div>
    </div>
  );
}
