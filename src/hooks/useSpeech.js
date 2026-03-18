import { useCallback, useRef } from 'react';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { Capacitor } from '@capacitor/core';

export function useSpeech() {
  const synthRef = useRef(window.speechSynthesis);
  const isNative = Capacitor.isNativePlatform();

  const speak = useCallback((text, rate = 0.9) => {
    if (isNative) {
      TextToSpeech.speak({
        text,
        lang: 'en-US',
        rate,
        pitch: 1.0,
        volume: 1.0,
      }).catch(() => {});
      return;
    }

    const synth = synthRef.current;
    if (!synth) return;

    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = synth.getVoices();
    if (voices.length > 0) {
      const enVoice =
        voices.find((v) => v.lang === 'en-US' && v.localService) ||
        voices.find((v) => v.lang.startsWith('en'));
      if (enVoice) utterance.voice = enVoice;
    }

    synth.speak(utterance);
  }, [isNative]);

  const stop = useCallback(() => {
    if (isNative) {
      TextToSpeech.stop().catch(() => {});
    } else {
      synthRef.current?.cancel();
    }
  }, [isNative]);

  const isSupported = true;

  return { speak, stop, isSupported };
}
