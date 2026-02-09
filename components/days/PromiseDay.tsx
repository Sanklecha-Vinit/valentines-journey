"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PromiseDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => onComplete(), 14000),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-950 px-6 text-center">
      <div className="max-w-lg">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-16 text-8xl"
          >
            🤝
          </motion.div>
        )}

        {step >= 2 && (
          <div className="text-indigo-200 text-base leading-relaxed space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg text-indigo-100"
            >
              I can't promise that everything will be easy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              But I can promise that I'll stay.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              On the good days.
              <br />
              And especially on the hard ones.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 1 }}
              className="text-lg pt-4"
            >
              I choose you —
              <br />
              not just when it's simple,
              <br />
              <span className="text-xl font-light text-indigo-50">but when it actually matters.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 6, duration: 1 }}
              className="text-sm text-indigo-300 italic pt-6"
            >
              That's not just a promise. That's my commitment to you.
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
