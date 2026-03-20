import { useEffect } from 'react';

export default function StreakCelebration({ streak, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 anim-page-in">
      <div className="text-center anim-streak-pop">
        <div className="text-[96px] leading-none mb-5 select-none">🔥</div>
        <p className="text-6xl font-extrabold text-orange-400 tabular-nums mb-2">
          {streak}. Gün
        </p>
        <p className="text-xl font-bold text-white mt-1">Seri devam ediyor!</p>
        <p className="text-sm text-gray-500 mt-2">{streak} gün üst üste çalıştın 💪</p>
      </div>
    </div>
  );
}
