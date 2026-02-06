"use client";

import { useEffect, useState } from "react";


export function useDateUnlock(targetDate: string) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const checkUnlock = () => {
      const now = new Date();
      const unlockDate = new Date(targetDate);
      unlockDate.setHours(0, 0, 0, 0);

      setUnlocked(now >= unlockDate);
    };

    checkUnlock();
    const interval = setInterval(checkUnlock, 60 * 1000); // check every minute

    return () => clearInterval(interval);
  }, [targetDate]);

  return unlocked;
  
}
