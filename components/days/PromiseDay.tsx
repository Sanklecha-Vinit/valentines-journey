"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PromiseDay({ onComplete }: { onComplete?: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),   // pause
      setTimeout(() => setStep(2), 2800),   // choice
      setTimeout(() => setStep(3), 5200),   // message
      setTimeout(() => onComplete?.(), 15000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#090910] to-black px-6 text-center">
      <div className="max-w-md flex flex-col items-center">

        {/* Emotional pause */}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mb-12 w-2 h-2 rounded-full bg-pink-400"
          />
        )}

        {/* The choice */}
        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-pink-300 text-lg tracking-wide mb-10"
          >
            I choose you.
          </motion.p>
        )}

        {/* The promise */}
        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="text-pink-200 text-sm leading-relaxed tracking-wide"
          >
            Not because it’s easy.
            <br />
            Not because it’s perfect.
            <br /><br />
            But because when things get heavy,
            <br />
            and the noise fades,
            <br /><br />
            you’re the one I still want to stand beside.
            <br /><br />
            That’s my promise.
          </motion.p>
        )}
      </div>
    </div>
  );
}
