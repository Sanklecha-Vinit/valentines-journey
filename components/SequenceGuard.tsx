"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DAYS } from "@/data/daysConfig";
import { useDateUnlock } from "@/hooks/useDateUnlock";

export default function SequenceGuard({
  dayId,
  children,
}: {
  dayId: number;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const day = DAYS.find(d => d.id === dayId);

  const unlockedByDate = day ? useDateUnlock(day.date) : false;

  useEffect(() => {
    if (!unlockedByDate) {
      router.replace("/");
    }
  }, [unlockedByDate, router]);

  return <>{children}</>;
}
