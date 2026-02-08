"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HugDay({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [showMessage, setShowMessage] = useState(false);
  const completed = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);

      if (!completed.current && onComplete) {
        completed.current = true;
        setTimeout(onComplete, 2500);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="day-content">
      {/* Hug Visual */}
      <div className="hug-visual">
        <motion.div
          className="hug-shape left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        <motion.div
          className="hug-shape right"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      {/* Message */}
      {showMessage && (
        <motion.p
          className="day-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          Some hugs don’t try to fix anything.
          <br /><br />
          They just remind you  
          that you’re not carrying everything alone.
        </motion.p>
      )}
    </div>
  );
}
