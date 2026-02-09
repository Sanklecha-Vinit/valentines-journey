"use client";

import Link from "next/link";
import { DAYS } from "@/data/daysConfig";
import { useDateUnlock } from "@/hooks/useDateUnlock";

export default function Home() {
  return (
    <div className="page">
      <div className="wrapper">
        <h1 className="title">A Little Love 💖</h1>
        <p className="subtitle">one day at a time</p>

        <div className="margin-top-28">
          {DAYS.map(day => {
            const unlocked = useDateUnlock(day.date);

            return (
              <Link
                key={day.id}
                href={unlocked ? `/day/${day.id}` : "#"}
                className={`day-card ${!unlocked ? "locked" : ""}`}
                onClick={e => {
                  if (!unlocked) e.preventDefault();
                }}
              >
                <div>
                  <div className="day-title">{day.title}</div>
                  <div className="day-subtitle">{day.subtitle}</div>
                  {!unlocked && (
                    <div className="lock-text">🔒 Unlocks tomorrow</div>
                  )}
                </div>

                <span className="heart-icon">
                  {unlocked ? "💗" : "🔒"}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
