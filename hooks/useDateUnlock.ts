"use client";

import { useEffect, useState } from "react";

export function useDateUnlock(targetDate: string) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const checkUnlock = () => {
      const now = new Date();

      // Normalize "today" to local midnight
      const today = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );

      // 🔥 CRITICAL FIX: parse date as LOCAL, not UTC
      const [year, month, day] = targetDate.split("-").map(Number);
      const unlockDate = new Date(year, month - 1, day);

      setUnlocked(today >= unlockDate);
    };

    checkUnlock();

    const interval = setInterval(checkUnlock, 60 * 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return unlocked;
}
