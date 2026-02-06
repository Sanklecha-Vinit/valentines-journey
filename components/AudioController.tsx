"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("audioOn");
    if (saved === "true") setEnabled(true);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!audioRef.current || !ready) return;
    enabled ? audioRef.current.play().catch(() => {}) : audioRef.current.pause();
    localStorage.setItem("audioOn", String(enabled));
  }, [enabled, ready]);

  return (
    <>
      <audio ref={audioRef} loop src="/audio/lofi.mp3" preload="none" />
      <button
        onClick={() => setEnabled(prev => !prev)}
        className="fixed top-4 right-4 z-50 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow"
      >
        {enabled ? "🔊" : "🔈"}
      </button>
    </>
  );
}
