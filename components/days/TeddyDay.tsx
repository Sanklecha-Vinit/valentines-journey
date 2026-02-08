"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TeddyDay({
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
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="day-content">
      {/* Teddy */}
      <motion.div
        className="teddy"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Head */}
        <div className="teddy-head">
          <div className="teddy-eye left" />
          <div className="teddy-eye right" />
          <div className="teddy-nose" />
        </div>

        {/* Arms */}
<div className="teddy-arm left" />
<div className="teddy-arm right" />

{/* Body */}
<div className="teddy-body">
  <div className="teddy-belly" />
</div>

{/* Legs */}
<div className="teddy-leg left" />
<div className="teddy-leg right" />

      </motion.div>

      {/* Message */}
      {showMessage && (
        <motion.p
          className="day-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Some days I don’t know how to explain what I feel.  
          But when I’m with you, I don’t have to.
          <br /><br />
          I don’t have to be strong.  
          I don’t have to act okay.  
          I don’t have to pretend I’ve figured everything out.
          <br /><br />
          With you, I can just exist —  
          quietly, honestly, and safely.
        </motion.p>
      )}
    </div>
  );
}
