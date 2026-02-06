"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ChocolateDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
//   const hasRun = useRef(false);

  useEffect(() => {
    // if (hasRun.current) return;
    // hasRun.current = true;

    const timers = [
      setTimeout(() => setStep(1), 1200), // chocolate appears
      setTimeout(() => setStep(2), 2600), // bite melts
      setTimeout(() => setStep(3), 4200), // message
      setTimeout(() => onComplete(), 9000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-6 text-center">
      <div className="max-w-md">

        {/* Chocolate slab */}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto mb-12 w-40 rounded-2xl bg-[#4b2e1e] p-4 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  className="h-12 rounded-lg bg-[#6b3e26]"
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: step >= 2 && i === 1 ? 0 : 1,
                    y: step >= 2 && i === 1 ? 6 : 0,
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Message */}
        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            className="text-pink-300 text-sm leading-relaxed tracking-wide"
          >
            You make life feel richer —
            <br />
            not louder.
            <br /><br />
            Like chocolate that melts slowly,
            <br />
            you make even the smallest moments
            <br />
            feel worth savoring.
          </motion.p>
        )}
      </div>
    </div>
  );
}
