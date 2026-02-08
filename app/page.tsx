"use client";

import { DAYS } from "@/data/daysConfig";
import { useDateUnlock } from "@/hooks/useDateUnlock";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="page">
      <div className="wrapper">
        <h1 className="title">A Little Love 💖</h1>
        <p className="subtitle">one day at a time</p>

        <div className="cards">
          {DAYS.map(day => {
            const unlocked = useDateUnlock(day.date);

            return (
              <button
                key={day.id}
                className={`day-card ${!unlocked ? "locked" : ""}`}
                onClick={() => unlocked && router.push(`/day/${day.id}`)}
              >
                <div>
                  <div className="day-title">{day.title}</div>
                  <div className="day-subtitle">{day.subtitle}</div>
                  {!unlocked && <div className="lock-text">🔒 Opens at midnight</div>}
                </div>
                <span className="icon">{unlocked ? "💗" : "🔒"}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
