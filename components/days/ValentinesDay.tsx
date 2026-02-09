"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ValentinesDay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3500),
      setTimeout(() => onComplete && onComplete(), 25000),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-rose-950 via-red-900 to-pink-950 px-6 py-12 text-center">
      <div className="max-w-2xl w-full">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mb-8 text-8xl"
          >
            💌
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-gradient-to-br from-rose-50/10 to-pink-50/10 backdrop-blur-lg rounded-3xl p-8 border border-pink-300/20 max-h-[70vh] overflow-y-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-3xl font-light text-rose-100 mb-8"
            >
              To the one who changed everything
            </motion.h2>

            <div className="text-rose-100/90 text-base leading-relaxed space-y-6 text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                I've thought about this letter a thousand times. What to say, how to say it, 
                whether words could ever do justice to what I feel. But here's the truth —
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="text-rose-50 text-lg"
              >
                You make me believe in things I thought were just stories.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 1 }}
              >
                Before you, I thought love was supposed to be complicated — 
                full of games, doubts, and overthinking. But with you, it's simple. 
                It's honest. It's real.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.5, duration: 1 }}
              >
                You've seen me at my best and my worst, and somehow, you stayed. 
                You didn't try to fix me or change me. You just... loved me. 
                Exactly as I am. And that's something I'll never take for granted.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5.5, duration: 1 }}
                className="text-rose-50"
              >
                I think about our late-night conversations, the moments we laughed until we cried, 
                the silences that felt comfortable instead of awkward.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6.5, duration: 1 }}
              >
                You make me want to be better. Not because you demand it, but because you inspire it.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 7.5, duration: 1 }}
                className="text-lg text-rose-50"
              >
                I choose you. Not just today, but every day. 
                I choose you when you're happy, when you're sad, when you're frustrated.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 8.5, duration: 1 }}
                className="pt-8 text-center"
              >
                <p className="text-2xl font-light text-rose-50 mb-4">
                  Happy Valentine's Day
                </p>
                <p className="text-lg text-rose-100">
                  You're not just my love —
                  <br />
                  <span className="text-2xl font-medium text-pink-100">
                    you're my home, my peace, my everything.
                  </span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 9.5, duration: 1 }}
                className="pt-8 text-right"
              >
                <p className="text-rose-200 italic text-lg">Forever yours,</p>
                <div className="mt-4 text-4xl">💕</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
