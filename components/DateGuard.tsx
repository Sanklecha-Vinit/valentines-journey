"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DAYS } from "@/data/daysConfig";
import { useDateUnlock } from "@/hooks/useDateUnlock";

export default function DateGuard({
  dayId,
  children,
}: {
  dayId: number;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const day = DAYS.find(d => d.id === dayId);

  const unlocked = day ? useDateUnlock(day.date) : false;

  // 🔑 NEW: wait until hook has evaluated
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // mark that we've evaluated at least once
    setChecked(true);
  }, [unlocked]);

  useEffect(() => {
    if (!checked) return;

    if (!unlocked) {
      router.replace("/");
    }
  }, [checked, unlocked, router]);

  // ⏳ While checking, render nothing (or a loader)
  if (!checked) return null;

  return <>{children}</>;
}
