"use client";
import { motion } from "framer-motion";

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-300 opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: -30
          }}
          animate={{ y: -900, opacity: 0 }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          🌸
        </motion.span>
      ))}
    </div>
  );
}
