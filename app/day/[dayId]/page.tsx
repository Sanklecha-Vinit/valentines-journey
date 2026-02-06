"use client";

import { useParams } from "next/navigation";
import { DAYS } from "@/data/daysConfig";
import { useProgress } from "@/hooks/useProgress";
import SequenceGuard from "@/components/SequenceGuard";

import RoseDay from "@/components/days/RoseDay";
import ProposeDay from "@/components/days/ProposeDay";
import ChocolateDay from "@/components/days/ChocolateDay";
import TeddyDay from "@/components/days/TeddyDay";
import PromiseDay from "@/components/days/PromiseDay";
import HugDay from "@/components/days/HugDay";
import ValentinesDay from "@/components/days/ValentinesDay";
import KissDay from "@/components/days/KissDay";

export default function DayPage() {
  const { dayId } = useParams();
  const id = Number(dayId);
  const { completedDays, markComplete } = useProgress();

  const renderDay = () => {
    switch (id) {
      case 1: return <RoseDay onComplete={() => markComplete(1)} />;
      case 2: return <ProposeDay onComplete={() => markComplete(2)} />;
      case 3: return <ChocolateDay onComplete={() => markComplete(3)} />;
      case 4: return <TeddyDay onComplete={() => markComplete(4)} />;
      case 5: return <PromiseDay onComplete={() => markComplete(5)} />;
      case 6: return <HugDay onComplete={() => markComplete(6)} />;
      case 7: return <KissDay onComplete={() => markComplete(7)} />;
      case 8: return <ValentinesDay />;
      default: return null;
    }
  };

  return (
    <SequenceGuard dayId={id} completedDays={completedDays}>
      <div className="page">
        <div className="wrapper">
          <div className="day-box">
            {renderDay()}
          </div>
        </div>
      </div>
    </SequenceGuard>
  );
}
