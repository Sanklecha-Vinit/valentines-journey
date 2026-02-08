"use client";

import { useParams } from "next/navigation";
import { DAYS } from "@/data/daysConfig";
import { useDateUnlock } from "@/hooks/useDateUnlock";

import RoseDay from "@/components/days/RoseDay";
import ProposeDay from "@/components/days/ProposeDay";
import ChocolateDay from "@/components/days/ChocolateDay";
import TeddyDay from "@/components/days/TeddyDay";
import PromiseDay from "@/components/days/PromiseDay";
import HugDay from "@/components/days/HugDay";
import KissDay from "@/components/days/KissDay";
import ValentinesDay from "@/components/days/ValentinesDay";

export default function DayPage() {
  const params = useParams();
  const dayId = Number(params.dayId);
  const day = DAYS.find(d => d.id === dayId);

  if (!day) return <div className="center">Invalid day</div>;

  const unlocked = useDateUnlock(day.date);

  if (!unlocked) {
    return (
      <div className="locked-screen">
        <p>This moment opens at midnight 💕</p>
      </div>
    );
  }

  switch (dayId) {
    case 1: return <RoseDay />;
    case 2: return <ProposeDay />;
    case 3: return <ChocolateDay />;
    case 4: return <TeddyDay />;
    case 5: return <PromiseDay />;
    case 6: return <HugDay />;
    case 7: return <KissDay />;
    case 8: return <ValentinesDay />;
    default: return null;
  }
}
