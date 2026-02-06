"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SequenceGuard({
  dayId,
  completedDays,
  children,
}: {
  dayId: number;
  completedDays: number[];
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const prevDay = dayId - 1;

    if (dayId > 1 && !completedDays.includes(prevDay)) {
      router.push("/");
    }
  }, [dayId, completedDays, router]);

  return <>{children}</>;
}
