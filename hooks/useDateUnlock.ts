"use client";
import { useEffect, useState } from "react";

export function useDateUnlock(targetDate: string) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const now = new Date();
    const unlockDate = new Date(targetDate);
    unlockDate.setHours(0, 0, 0, 0);
    setUnlocked(now >= unlockDate);
  }, [targetDate]);

  return unlocked;
}
