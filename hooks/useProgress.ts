import { useEffect, useState } from "react";

export function useProgress() {
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("completedDays");
    if (saved) setCompletedDays(JSON.parse(saved));
  }, []);

  const markComplete = (day: number) => {
    const updated = [...new Set([...completedDays, day])];
    setCompletedDays(updated);
    localStorage.setItem("completedDays", JSON.stringify(updated));
  };

  return { completedDays, markComplete };
}
