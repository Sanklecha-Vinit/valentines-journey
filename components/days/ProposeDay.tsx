"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProposeDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => onComplete(), 12000),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 px-6 text-center">
      <div className="max-w-lg">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-16 text-8xl"
          >
            💍
          </motion.div>
        )}

        {step >= 2 && (
          <div className="text-purple-200 text-base leading-relaxed space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg text-purple-100"
            >
              I've been thinking about this for a while.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Not about what to say, but about how to say what I already know.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="text-lg"
            >
              You make the ordinary feel extraordinary.
              <br />
              The quiet moments feel full.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 1 }}
              className="text-xl font-light text-purple-50 pt-4"
            >
              So here's the truth —
              <br />
              <span className="text-2xl font-medium">I choose you.</span>
              <br />
              <span className="text-sm opacity-80">Not just today, but every day after.</span>
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
