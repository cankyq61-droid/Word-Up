import { useCallback, useRef } from 'react';

export function useSpeech() {
  const synthRef = useRef(window.speechSynthesis);

  const speak = useCallback((text, rate = 0.9) => {
    const synth = synthRef.current;
    if (!synth) return;

    // Cancel any ongoing speech
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    // On some mobile browsers, voices load asynchronously
    const voices = synth.getVoices();
    if (voices.length > 0) {
      const enVoice =
        voices.find((v) => v.lang === 'en-US' && v.localService) ||
        voices.find((v) => v.lang.startsWith('en'));
      if (enVoice) utterance.voice = enVoice;
    }

    synth.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    synthRef.current?.cancel();
  }, []);

  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  return { speak, stop, isSupported };
}
