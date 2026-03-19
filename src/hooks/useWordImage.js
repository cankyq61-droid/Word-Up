import { useState, useEffect } from 'react';

// Ücretsiz API key: https://pixabay.com/api/docs/
// .env dosyasına VITE_PIXABAY_KEY=senin_key buraya yaz
const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_KEY;

export function useWordImage(word) {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setImageUrl(null);
    setLoading(false);

    if (!word || !PIXABAY_KEY) return;

    const cacheKey = 'imgcache_v1_' + word.toLowerCase();
    const cached = localStorage.getItem(cacheKey);

    if (cached !== null) {
      setImageUrl(cached || null);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetch(
      `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${encodeURIComponent(word)}&image_type=photo&per_page=3&safesearch=true&lang=en`
    )
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const url = data.hits?.[0]?.webformatURL ?? '';
        localStorage.setItem(cacheKey, url);
        setImageUrl(url || null);
      })
      .catch(() => {
        if (!cancelled) setImageUrl(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [word]);

  return { imageUrl, loading };
}
