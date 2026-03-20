import { useState, useCallback } from 'react';

const STORAGE_KEY = 'kelime_progress_v1';

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw);
    // Eski boolean (true) değerleri level 2'ye çevir (geriye uyumluluk)
    const converted = {};
    for (const [k, v] of Object.entries(data)) {
      converted[k] = v === true ? 2 : v;
    }
    return converted;
  } catch {
    return {};
  }
}

function saveToStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export function useProgress() {
  const [learned, setLearned] = useState(loadFromStorage);

  /** Level 1: Quiz tamamlandı (kısmi, "devam ediyor") */
  const markQuizDone = useCallback((wordId) => {
    setLearned((prev) => {
      if ((prev[wordId] ?? 0) >= 1) return prev; // Zaten daha yüksek seviyedeyse düşürme
      const next = { ...prev, [wordId]: 1 };
      saveToStorage(next);
      return next;
    });
  }, []);

  /** Level 2: Quiz + Eşleştirme tamamlandı (tam öğrenildi) */
  const markLearned = useCallback((wordId) => {
    setLearned((prev) => {
      if (prev[wordId] === 2) return prev;
      const next = { ...prev, [wordId]: 2 };
      saveToStorage(next);
      return next;
    });
  }, []);

  /** Level 0: Öğrenilmedi / Sıfırlandı */
  const markUnlearned = useCallback((wordId) => {
    setLearned((prev) => {
      const next = { ...prev };
      delete next[wordId];
      saveToStorage(next);
      return next;
    });
  }, []);

  /** Herhangi bir seviyede çalışıldı mı? (level >= 1) */
  const isLearned = useCallback((wordId) => Boolean(learned[wordId]), [learned]);

  /** Tam öğrenilen (level 2) kelime sayısı — istatistikler için */
  const getLearnedCount = useCallback(
    (words) => words.filter((w) => learned[w.id] === 2).length,
    [learned]
  );

  /** Tüm ilerlemeyi sıfırla */
  const resetAll = useCallback(() => {
    setLearned({});
    saveToStorage({});
  }, []);

  return { learned, markQuizDone, markLearned, markUnlearned, isLearned, getLearnedCount, resetAll };
}
