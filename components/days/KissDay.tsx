"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function KissDay({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [showMessage, setShowMessage] = useState(false);
  const completed = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);

      if (!completed.current) {
        completed.current = true;
        if (onComplete) {
          setTimeout(onComplete, 2500);
        }
      }
    }, 2600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="day-content">
      {/* Kiss Visual */}
      <div className="kiss-visual">
        <motion.div
          className="kiss-heart left"
          initial={{ x: -40, scale: 0.8, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        <motion.div
          className="kiss-heart right"
          initial={{ x: 40, scale: 0.8, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        {/* Glow */}
        <motion.div
          className="kiss-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        />
      </div>

      {/* Message */}
      {showMessage && (
        <motion.p
          className="day-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          It’s never just a kiss with you.
          <br /><br />
          It’s the way you get closer.  
          The way time slows down.  
          The way everything feels softer.
          <br /><br />
          Like the world quietly saying —  
          *this moment is ours.*
        </motion.p>
      )}
    </div>
  );
}
