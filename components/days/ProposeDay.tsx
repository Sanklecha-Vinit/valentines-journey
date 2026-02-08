"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProposeDay() {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1200),
      setTimeout(() => setStep(2), 2600),
      setTimeout(() => setStep(3), 4200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="day-content propose-cute">
      {/* Heart */}
      <motion.div
        className="cute-heart"
        animate={
          accepted
            ? { scale: [1, 1.25, 1], rotate: [45, 45, 45] }
            : { scale: [0, 1.1, 1], rotate: 45 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Messages before proposal */}
      {!accepted && step >= 1 && (
        <motion.p
          className="day-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          I smile a little more when I think of you.
        </motion.p>
      )}

      {!accepted && step >= 2 && (
        <motion.p
          className="day-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          And somehow… that happens all the time.
        </motion.p>
      )}

      {/* Question + buttons */}
      {!accepted && step >= 3 && (
        <motion.div
          className="cute-question"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="question-text">
            Will you be mine? 💕
          </p>

          <div className="cute-buttons">
            <button onClick={() => setAccepted(true)}>
              Yes! 💖
            </button>
            <button onClick={() => setAccepted(true)}>
              Always 💗
            </button>
          </div>
        </motion.div>
      )}

      {/* Acceptance message */}
      {accepted && (
        <motion.p
          className="accept-message"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          You just made my heart very, very happy.  
          <br />
          I’m so glad it’s you. 💞
        </motion.p>
      )}
    </div>
  );
}
