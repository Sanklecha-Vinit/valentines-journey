"use client";

import { useParams } from "next/navigation";
import { DAYS } from "@/data/daysConfig";

// Day components
import RoseDay from "@/components/days/RoseDay";
import ProposeDay from "@/components/days/ProposeDay";
import ChocolateDay from "@/components/days/ChocolateDay";
import TeddyDay from "@/components/days/TeddyDay";
import PromiseDay from "@/components/days/PromiseDay";
import HugDay from "@/components/days/HugDay";
import KissDay from "@/components/days/KissDay";
import ValentinesDay from "@/components/days/ValentinesDay";
import DateGuard from "@/components/DateGuard";


export default function DayPage() {
  const params = useParams();
  const dayId = Number(params.dayId);

  const day = DAYS.find(d => d.id === dayId);

  if (!day) {
    return (
      <div style={{ padding: 40, color: "white" }}>
        Invalid Day
      </div>
    );
  }

  const renderDay = () => {
    switch (dayId) {
      case 1:
        return <RoseDay onComplete={() => {}} />;
      case 2:
        return <ProposeDay onComplete={() => {}} />;
      case 3:
  return <ChocolateDay />;
      case 4:
        return <TeddyDay onComplete={() => {}} />;
      case 5:
        return <PromiseDay onComplete={() => {}} />;
      case 6:
        return <HugDay onComplete={() => {}} />;
      case 7:
        return <KissDay onComplete={() => {}} />;
      case 8:
        return <ValentinesDay onComplete={() => {}} />;
      default:
        return null;
    }
  };

  return (
  <DateGuard dayId={dayId}>
    <main className="min-h-screen flex items-center justify-center bg-pink-600">
      {renderDay()}
    </main>
  </DateGuard>
);

}
