"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HugDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1200),
      setTimeout(() => setStep(2), 3500),
      setTimeout(() => onComplete(), 12000),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-950 px-6 text-center">
      <div className="max-w-lg">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-16 text-9xl"
          >
            🤗
          </motion.div>
        )}

        {step >= 2 && (
          <div className="text-cyan-100 text-base leading-relaxed space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg text-cyan-50"
            >
              Sometimes words aren't enough.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              But a hug?
              <br />
              A hug says everything.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              It says "I'm here."
              <br />
              It says "You're not alone."
              <br />
              It says "I've got you."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 1 }}
              className="text-lg text-teal-50 pt-4"
            >
              With you, I've found a place where I can rest —
              <br />
              <span className="text-xl font-light">a home in your arms.</span>
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
