"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function RoseDay({ onComplete }: { onComplete?: () => void }) {
  const [step, setStep] = useState(0);
  const hasRun = useRef(false); // 👈 hard guard

  useEffect(() => {
    if (hasRun.current) return; // 👈 prevents looping forever
    hasRun.current = true;

    const timers = [
      setTimeout(() => setStep(1), 1200),
      setTimeout(() => setStep(2), 2600),
      setTimeout(() => setStep(3), 4200),
      setTimeout(() => setStep(4), 6000),
      setTimeout(() => onComplete?.(), 12000),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []); // 👈 EMPTY dependency array (CRITICAL)

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-6 text-center">
      <div className="max-w-md">

        {step >= 1 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="text-pink-200 text-lg mb-6"
          >
            I don’t say this easily.
          </motion.p>
        )}

        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="text-pink-200 text-lg mb-10"
          >
            But with you… things feel <span className="text-pink-100">beta</span>.
          </motion.p>
        )}
{step >= 3 && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.6 }}
    className="flex justify-center mb-10"
  >
    <svg
      width="160"
      height="230"
      viewBox="0 0 200 300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="url(#roseGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="roseGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#be123c" />
        </linearGradient>
      </defs>

      {/* 🌹 Rose outline */}
      <motion.path
        d="M100 70
           C65 40, 35 85, 65 120
           C45 150, 75 185, 100 160
           C125 185, 155 150, 135 120
           C165 85, 135 40, 100 70Z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />

      {/* 🌹 Inner swirl */}
      <motion.path
        d="M100 95
           C90 90, 80 105, 90 115
           C85 130, 100 140, 100 130
           C100 140, 115 130, 110 115
           C120 105, 110 90, 100 95Z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 1.4 }}
      />

      {/* ❤️ Heart inside rose */}
      <motion.path
        d="M100 120
           C100 105, 75 105, 75 125
           C75 145, 100 155, 100 165
           C100 155, 125 145, 125 125
           C125 105, 100 105, 100 120Z"
        fill="#fb7185"
        stroke="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 2.6,
          duration: 1.2,
          ease: "easeOut",
        }}
style={{ transformOrigin: "center" }}
      />

      {/* Stem */}
      <motion.path
        d="M100 165 C98 210, 102 250, 100 285"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.6, duration: 1.6 }}
      />

      {/* Leaves */}
      <motion.path
        d="M100 215 C70 205, 60 225, 90 235"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
      />
      <motion.path
        d="M100 230 C130 220, 140 240, 110 250"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      />
    </svg>
  </motion.div>
)}



        {step >= 4 && (
          <div className="text-pink-300 text-sm leading-relaxed tracking-wide space-y-5">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              When something good happens, you’re the first person I think of.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              When things feel heavy, you somehow make them lighter — even without trying.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              I think about our late-night talks, the first time we met in the car,
              and the moments we lied to our families just to meet.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            >
              This rose isn’t meant to impress you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.6 }}
            >
              It’s just my way of saying you’re important to me —
              and I didn’t want today to pass without you knowing that.
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
