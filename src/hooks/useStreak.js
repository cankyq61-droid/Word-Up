function todayStr() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function daysBetween(d1, d2) {
  return Math.round((new Date(d2) - new Date(d1)) / 86400000);
}

function loadState() {
  const count    = parseInt(localStorage.getItem('streak_count') || '0', 10);
  const lastDate = localStorage.getItem('streak_last_date') || '';
  const today    = todayStr();

  if (!lastDate) return { streak: 0, doneToday: false };

  const diff = daysBetween(lastDate, today);

  if (diff === 0) return { streak: count, doneToday: true };
  if (diff === 1) return { streak: count, doneToday: false };

  // Seri bozuldu
  localStorage.setItem('streak_count', '0');
  return { streak: 0, doneToday: false };
}

import { useState, useCallback } from 'react';

export function useStreak() {
  const [{ streak, doneToday }, setState] = useState(loadState);

  const markDone = useCallback(() => {
    const today    = todayStr();
    const lastDate = localStorage.getItem('streak_last_date') || '';
    if (lastDate === today) return; // zaten bugün yapıldı

    const prev = parseInt(localStorage.getItem('streak_count') || '0', 10);
    const diff = lastDate ? daysBetween(lastDate, today) : 999;
    const newCount = diff === 1 ? prev + 1 : 1;

    localStorage.setItem('streak_count', newCount);
    localStorage.setItem('streak_last_date', today);
    setState({ streak: newCount, doneToday: true });
  }, []);

  return { streak, doneToday, markDone };
}
