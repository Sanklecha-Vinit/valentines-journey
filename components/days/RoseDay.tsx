"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RoseDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 2400),
      setTimeout(() => setStep(3), 4000),
      setTimeout(() => setStep(4), 6500),
      setTimeout(() => onComplete(), 18000),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-rose-950 via-pink-900 to-rose-950 px-6 text-center overflow-hidden relative">
      <div className="max-w-lg z-10">
        {step >= 1 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="text-pink-200 text-xl mb-8 font-light"
          >
            I don't say this easily.
          </motion.p>
        )}

        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="text-pink-200 text-xl mb-12 font-light"
          >
            But with you… everything feels <span className="text-pink-100 font-medium">different</span>.
          </motion.p>
        )}

        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex justify-center mb-16"
          >
            <svg
              width="200"
              height="280"
              viewBox="0 0 200 300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="url(#roseGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="roseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fda4af" />
                  <stop offset="50%" stopColor="#fb7185" />
                  <stop offset="100%" stopColor="#be123c" />
                </linearGradient>
              </defs>

              {/* Outer petals */}
              <motion.path
                d="M100 70 C65 40, 35 85, 65 120 C45 150, 75 185, 100 160 C125 185, 155 150, 135 120 C165 85, 135 40, 100 70Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {/* Middle petals */}
              <motion.path
                d="M100 80 C75 60, 55 95, 75 120 C60 140, 85 165, 100 150 C115 165, 140 140, 125 120 C145 95, 125 60, 100 80Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
                strokeWidth="2"
              />

              {/* Inner swirl */}
              <motion.path
                d="M100 95 C90 90, 80 105, 90 115 C85 130, 100 140, 100 130 C100 140, 115 130, 110 115 C120 105, 110 90, 100 95Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 1.8 }}
                strokeWidth="1.8"
              />

              {/* Heart inside rose */}
              <motion.path
                d="M100 118 C100 105, 75 105, 75 123 C75 141, 100 153, 100 163 C100 153, 125 141, 125 123 C125 105, 100 105, 100 118Z"
                fill="url(#roseGradient)"
                stroke="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.1, 1], 
                  opacity: [0, 1, 1],
                }}
                transition={{
                  delay: 2.2,
                  duration: 1.5,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "center" }}
              />

              {/* Stem */}
              <motion.path
                d="M100 165 C98 210, 102 250, 100 285"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.8, duration: 2 }}
              />

              {/* Leaves */}
              <motion.path
                d="M100 215 C70 205, 60 225, 90 235"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 2.2, duration: 1.2 }}
              />
              <motion.path
                d="M100 230 C130 220, 140 240, 110 250"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 2.4, duration: 1.2 }}
              />
            </svg>
          </motion.div>
        )}

        {step >= 4 && (
          <div className="text-pink-200/90 text-base leading-relaxed tracking-wide space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              When something good happens, you're the first person I think of.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              When things feel heavy, you somehow make them lighter — even without trying.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 1 }}
            >
              I think about our late-night talks, the first time we met in the car,
              and the moments we lied to our families just to meet.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.8, duration: 1 }}
              className="text-pink-100"
            >
              This rose isn't meant to impress you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5, duration: 1 }}
              className="text-lg font-light text-pink-50"
            >
              It's just my way of saying you're important to me —
              and I didn't want today to pass without you knowing that.
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
