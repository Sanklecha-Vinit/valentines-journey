"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function ChocolateDay({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [opened, setOpened] = useState(false);
  const completed = useRef(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);

    if (!completed.current) {
      completed.current = true;
      if (onComplete) {
        setTimeout(onComplete, 2500);
      }
    }
  };

  return (
    <div className="day-content">
      {/* Chocolate Block */}
      <motion.div
        onClick={handleOpen}
        className="chocolate-wrapper"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Piece */}
        <motion.div
          className="chocolate-piece left"
          animate={opened ? { x: -24, rotate: -4 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Right Piece */}
        <motion.div
          className="chocolate-piece right"
          animate={opened ? { x: 24, rotate: 4 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Heart Reveal */}
        {opened && (
          <motion.div
            className="chocolate-heart"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            ♥
          </motion.div>
        )}
      </motion.div>

      {/* Message */}
      {opened && (
        <motion.p
          className="day-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Some things don’t need to be shared.  
          <br />
          But with you, I want to.
        </motion.p>
      )}
    </div>
  );
}
