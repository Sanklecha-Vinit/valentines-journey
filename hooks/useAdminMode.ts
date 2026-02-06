"use client";
import { useEffect, useState } from "react";

export function useAdminMode() {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("adminMode");
    if (saved === "true") setAdmin(true);
  }, []);

  const toggleAdmin = () => {
    const next = !admin;
    setAdmin(next);
    localStorage.setItem("adminMode", String(next));
  };

  return { admin, toggleAdmin };
}
