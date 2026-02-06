"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ProposeDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const hasRun = useRef(false);
  const [answered, setAnswered] = useState<null | boolean>(null);

  // One-time sequence only
  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const timers = [
      setTimeout(() => setStep(1), 1200), // first line
      setTimeout(() => setStep(2), 2800), // second line
      setTimeout(() => setStep(3), 4500), // ring appears
      setTimeout(() => setStep(4), 6500), // question
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-6 text-center">
      <div className="max-w-md">

        {/* Scene 1 */}
        {step >= 1 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="text-pink-200 text-lg mb-6"
          >
            I’m not saying this impulsively.
          </motion.p>
        )}

        {/* Scene 2 */}
        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="text-pink-200 text-lg mb-10"
          >
            I know what I want.
          </motion.p>
        )}

{/* Scene 3 — Premium Ring Icon */}
{step >= 3 && (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex justify-center mb-10"
  >
    <svg
      width="120"
      height="120"
      viewBox="0 0 64 64"
      stroke="#f9a8d4"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Diamond */}
      <path d="M32 6 L38 14 L32 22 L26 14 Z" fill="#f9a8d4" />

      {/* Diamond top facets */}
      <path d="M26 14 L22 14 L28 6" />
      <path d="M38 14 L42 14 L36 6" />

      {/* Ring */}
      <circle cx="32" cy="40" r="18" />
    </svg>
  </motion.div>
)}


        {/* Scene 4 — The question */}
        {step >= 4 && answered === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className="space-y-8"
          >
            <p className="text-pink-300 text-base leading-relaxed">
              I want to choose you —  
              not just today,  
              but in the days that actually matter.
            </p>

            <p className="text-pink-200 text-lg">
              Will you choose me too?
            </p>

            <div className="flex justify-center gap-6 pt-4">
              <button
                onClick={() => {
                  setAnswered(true);
                  setTimeout(onComplete, 3000);
                }}
                className="px-6 py-2 rounded-full bg-pink-600 text-white text-sm tracking-wide"
              >
                Yes
              </button>

              <button
                onClick={() => {
                  setAnswered(false);
                  setTimeout(onComplete, 3000);
                }}
                className="px-6 py-2 rounded-full border border-pink-400 text-pink-300 text-sm tracking-wide"
              >
                Always
              </button>
            </div>
          </motion.div>
        )}

        {/* Scene 5 — After answer */}
        {answered !== null && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className="text-pink-300 text-base leading-relaxed mt-10"
          >
            Then that’s enough for me.
          </motion.p>
        )}
      </div>
    </div>
  );
}
