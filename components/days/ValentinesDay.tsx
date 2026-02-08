"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ValentinesDay() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpened(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="valentine-container">
      {/* Envelope */}
      {!opened && (
        <motion.div
          className="envelope"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}

      {/* Letter */}
      {opened && (
        <motion.div
          className="valentine-letter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <p className="scroll-hint"></p>

          <section>
            <p>
              This wasn’t something I planned in a moment.  
              It’s something I realized slowly.
            </p>
          </section>

          <section>
            <p>
              In the way you listen.  
              In the way you stay.  
              In the way things feel easier just because you’re there.
            </p>
          </section>

          <section>
            <p>
              Loving you doesn’t feel loud or dramatic.  
              It feels steady.  
              It feels sure.
            </p>
          </section>

          <section>
            <p>
              And if I had to choose again —  
              I wouldn’t look for anything new.
            </p>
          </section>

          <section>
            <p className="final-line">
              I’d just choose you.
            </p>
          </section>
        </motion.div>
      )}
    </div>
  );
}
