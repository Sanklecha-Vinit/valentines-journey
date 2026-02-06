"use client";
import { useRef } from "react";
import { useAdminMode } from "@/hooks/useAdminMode";

export default function AdminTrigger({ children }: { children: React.ReactNode }) {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const { toggleAdmin } = useAdminMode();

  const startPress = () => {
    timer.current = setTimeout(() => {
      toggleAdmin();
      alert("Admin Mode Toggled");
    }, 4500);
  };

  const endPress = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  return (
    <div onTouchStart={startPress} onTouchEnd={endPress} onMouseDown={startPress} onMouseUp={endPress}>
      {children}
    </div>
  );
}
