export default function DayCard({ day, unlocked, onClick }) {
  return (
    <button
      disabled={!unlocked}
      onClick={onClick}
      className={`
        w-full rounded-2xl px-5 py-4 text-left transition
        ${unlocked
          ? "bg-white/15 hover:bg-white/25"
          : "bg-white/10 opacity-60 cursor-not-allowed"}
      `}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-white text-lg">{day.title}</h3>
          <p className="text-white/80 text-sm italic">
            {day.subtitle}
          </p>
        </div>

        <span className="text-white">
          {unlocked ? "✨" : "🔒"}
        </span>
      </div>

      {!unlocked && (
        <p className="text-xs text-white/70 mt-2">
          Unlocks tomorrow
        </p>
      )}
    </button>
  );
}
