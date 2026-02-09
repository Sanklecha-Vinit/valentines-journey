"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function KissDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => onComplete(), 12000),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-950 via-pink-900 to-rose-950 px-6 text-center">
      <div className="max-w-lg">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-16 text-9xl"
          >
            💋
          </motion.div>
        )}

        {step >= 2 && (
          <div className="text-pink-100 text-base leading-relaxed space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg text-pink-50"
            >
              There's something about being close to you
              <br />
              that feels like coming home.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              No distance.
              <br />
              No hesitation.
              <br />
              Just us.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="text-lg pt-4"
            >
              Every kiss is a silent promise —
              <br />
              <span className="text-xl font-light text-rose-100">
                I'm here, I'm yours, and I'm not going anywhere.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 1 }}
              className="text-sm text-pink-200 italic pt-4"
            >
              In your arms, the world fades away.
              <br />
              And that's exactly where I want to be.
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
