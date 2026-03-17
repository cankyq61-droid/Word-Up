import { useState, useCallback } from 'react';

/**
 * Manages the user's word learning progress.
 *
 * Storage is currently backed by localStorage. The interface is deliberately
 * kept generic so that swapping the backend (e.g. Supabase) only requires
 * changing the two private helpers below — the hook's public API stays the same.
 */

const STORAGE_KEY = 'kelime_progress_v1';

// ─── Private storage helpers (swap these for Supabase later) ─────────────────

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveToStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Quota exceeded or private browsing — fail silently
  }
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useProgress() {
  const [learned, setLearned] = useState(loadFromStorage);

  const markLearned = useCallback((wordId) => {
    setLearned((prev) => {
      const next = { ...prev, [wordId]: true };
      saveToStorage(next);
      return next;
    });
  }, []);

  const markUnlearned = useCallback((wordId) => {
    setLearned((prev) => {
      const next = { ...prev };
      delete next[wordId];
      saveToStorage(next);
      return next;
    });
  }, []);

  /** Returns true if the word with the given id has been marked as learned */
  const isLearned = useCallback((wordId) => Boolean(learned[wordId]), [learned]);

  /** Returns the count of learned words within the given array */
  const getLearnedCount = useCallback(
    (words) => words.filter((w) => learned[w.id]).length,
    [learned]
  );

  /** Wipes all progress */
  const resetAll = useCallback(() => {
    setLearned({});
    saveToStorage({});
  }, []);

  return { learned, markLearned, markUnlearned, isLearned, getLearnedCount, resetAll };
}
