"use client";
import { useEffect, useState } from "react";

const DEFAULT = `
My love,

This little journey is just a small reflection
of how much you mean to me.

Happy Valentine’s Day ❤️
`;

export function useLoveLetter() {
  const [letter, setLetter] = useState(DEFAULT);

  useEffect(() => {
    const saved = localStorage.getItem("loveLetter");
    if (saved) setLetter(saved);
  }, []);

  const save = (text: string) => {
    setLetter(text);
    localStorage.setItem("loveLetter", text);
  };

  return { letter, save };
}
