"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ValentinesDay() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const o1 = useTransform(scrollYProgress, [0.0, 0.2], [0, 1]);
  const o2 = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const o3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const o4 = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-[400vh] bg-gradient-to-b from-[#06060b] to-black"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <div className="max-w-md space-y-20 text-center relative">

          {/* Scroll hint */}
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 text-pink-300/70 text-xs tracking-wide"
          >
            scroll slowly
          </motion.div>

          {/* Letter – Part 1 */}
          <motion.p
            style={{ opacity: o1 }}
            className="text-pink-200 text-sm leading-relaxed tracking-wide"
          >
            I didn’t fall for you
            <br />
            all at once.
            <br /><br />
            It happened quietly —
            <br />
            in late replies,
            <br />
            shared silences,
            <br />
            and the way you stayed
            <br />
            even when things were simple.
          </motion.p>

          {/* Letter – Part 2 */}
          <motion.p
            style={{ opacity: o2 }}
            className="text-pink-200 text-sm leading-relaxed tracking-wide"
          >
            Somewhere between
            <br />
            ordinary days
            <br />
            and conversations that lasted
            <br />
            longer than they should have,
            <br /><br />
            you became the first place
            <br />
            my mind goes
            <br />
            when I need comfort.
          </motion.p>

          {/* Letter – Part 3 */}
          <motion.p
            style={{ opacity: o3 }}
            className="text-pink-200 text-sm leading-relaxed tracking-wide"
          >
            Loving you
            <br />
            didn’t feel dramatic.
            <br />
            It felt steady.
            <br /><br />
            Like choosing you
            <br />
            without needing a reason.
            <br />
            Like feeling safe
            <br />
            just knowing you exist.
          </motion.p>

          {/* Letter – Part 4 (Confession) */}
          <motion.p
            style={{ opacity: o4 }}
            className="text-pink-200 text-sm leading-relaxed tracking-wide"
          >
            So this is me,
            <br />
            finally saying
            <br />
            what I’ve known for years.
            <br /><br />
            I don’t want a perfect story.
            <br />
            I want *you* —
            <br />
            in the small moments,
            <br />
            the quiet days,
            <br />
            and everything that comes after.
            <br /><br />
            I love you.
          </motion.p>

        </div>
      </div>
    </div>
  );
}
