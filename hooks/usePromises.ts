"use client";
import { useEffect, useState } from "react";

const DEFAULT = [
  "I promise to stand by you.",
  "I promise to listen.",
  "I promise to choose you every day."
];

export function usePromises() {
  const [promises, setPromises] = useState<string[]>(DEFAULT);

  useEffect(() => {
    const saved = localStorage.getItem("promises");
    if (saved) setPromises(JSON.parse(saved));
  }, []);

  const save = (next: string[]) => {
    setPromises(next);
    localStorage.setItem("promises", JSON.stringify(next));
  };

  return { promises, save };
}
