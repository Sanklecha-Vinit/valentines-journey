"use client";

import { motion } from "framer-motion";

export default function ChocolateDay() {
  return (
    <div className="day-content chocolate-bg">
      {/* Chocolate animation */}
      <div className="chocolate-container">
        <motion.div
          className="choco left"
          initial={{ x: 0 }}
          animate={{ x: -50 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />

        <motion.div
          className="choco right"
          initial={{ x: 0 }}
          animate={{ x: 50 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />

        <motion.div
          className="choco-heart"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          ❤️
        </motion.div>
      </div>

      {/* Message */}
      <motion.p
        className="day-message"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 1 }}
      >
        Some things are sweet on their own.
        <br />
        But sharing them with you makes them unforgettable.
        <br /><br />
        Like chocolate that slowly melts —
        <br />
        you make everything softer, warmer, better.
      </motion.p>
    </div>
  );
}
