"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TeddyDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 3500),
      setTimeout(() => onComplete(), 13000),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 px-6 text-center">
      <div className="max-w-lg">
        {step >= 1 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
            className="mb-16 text-9xl"
          >
            🧸
          </motion.div>
        )}

        {step >= 2 && (
          <div className="text-rose-900 text-base leading-relaxed space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg font-medium text-rose-800"
            >
              Some days, I don't know how to explain what I feel.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              But when I'm with you, I don't have to.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              I don't have to be strong.
              <br />
              I don't have to act okay.
              <br />
              I don't have to pretend I've figured everything out.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 1 }}
              className="text-lg text-rose-700 pt-4"
            >
              With you, I can just exist —
              <br />
              <span className="text-xl font-light text-rose-900">quietly, honestly, and safely.</span>
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
