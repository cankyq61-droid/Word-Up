import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import words from '../data/words.json';
import { useProgress } from '../hooks/useProgress';
import { useSpeech } from '../hooks/useSpeech';
import { WORD_EMOJI, NUMBER_TEXT } from '../data/wordEmoji';
import { WORD_ICON } from '../data/wordIcon';
import { WORD_PHONETIC } from '../data/wordPhonetic';

const topics = [...new Set(words.map((w) => w.topic))];

import { TOPIC_META, DEFAULT_META } from '../data/topics';

const TYPE_LABELS = { isim: 'isim', fiil: 'fiil', sıfat: 'sıfat', zarf: 'zarf' };

// ─────────────────────────────────────────────
// Kelime görseli: rakam metni → Lucide ikon → emoji → konu emojisi
// ─────────────────────────────────────────────
function WordVisual({ word, topicIcon }) {
  const key = word.toLowerCase();
  const numText = NUMBER_TEXT[key];
  const IconComponent = WORD_ICON[key];
  const emoji = WORD_EMOJI[key] ?? topicIcon;

  return (
    <div className="w-full h-36 rounded-2xl mb-4 flex items-center justify-center bg-white/[0.04] border border-white/[0.06]">
      {numText
        ? <span className="text-6xl font-black text-white/80 tabular-nums tracking-tight select-none">{numText}</span>
        : IconComponent
          ? <IconComponent size={72} strokeWidth={1} className="text-white/70" />
          : <span className="text-8xl select-none">{emoji}</span>
      }
    </div>
  );
}

// ─────────────────────────────────────────────
// Topic selection screen
// ─────────────────────────────────────────────
function TopicSelect({ onSelect }) {
  const navigate = useNavigate();
  const { getLearnedCount } = useProgress();

  return (
    <div className="min-h-screen bg-[#080812]">
      <div className="max-w-lg mx-auto px-4 pt-8 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate('/topics')}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 border border-white/[0.07] text-gray-400 hover:text-white transition-colors"
          >
            ←
          </button>
          <h1 className="text-xl font-bold text-white">Konu Seç</h1>
        </div>

        <div className="space-y-3">
          {topics.map((topic) => {
            const meta = TOPIC_META[topic] || DEFAULT_META;
            const topicWords = words.filter((w) => w.topic === topic);
            const learned = getLearnedCount(topicWords);
            const pct = Math.round((learned / topicWords.length) * 100);

            return (
              <button
                key={topic}
                onClick={() => onSelect(topic)}
                className="w-full text-left bg-[#0e0e1a] rounded-2xl p-5 border border-white/[0.07]
                           hover:border-cyan-500/30 active:scale-[0.98] transition-all flex items-center gap-4"
              >
                <span className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${meta.bg} text-white shadow-sm`}>
                  {meta.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-200">{topic}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {topicWords.length} kelime · {pct}% tamamlandı
                  </p>
                </div>
                <span className="text-gray-600 text-xl">›</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Completion screen
// ─────────────────────────────────────────────
function FinishScreen({ topic, topicWords, isLearned, onRetry, onBack, onHome, onQuiz }) {
  const learnedCount = topicWords.filter((w) => isLearned(w.id)).length;
  const pct = Math.round((learnedCount / topicWords.length) * 100);

  return (
    <div className="min-h-screen bg-[#080812] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-[#0e0e1a] border border-white/[0.07] rounded-3xl p-8 shadow-xl text-center animate-pop-in">
        <div className="text-6xl mb-4">{pct === 100 ? '🎉' : '👏'}</div>
        <h2 className="text-2xl font-bold text-white mb-1">
          {pct === 100 ? 'Mükemmel!' : 'Konu Tamamlandı!'}
        </h2>
        <p className="text-gray-400 mb-2">{topic}</p>
        <p className="text-4xl font-extrabold text-cyan-400 tabular-nums mb-1">
          {learnedCount}
          <span className="text-xl text-gray-500 font-normal"> / {topicWords.length}</span>
        </p>
        <p className="text-sm text-gray-500 mb-8">kelime öğrenildi</p>

        <div className="space-y-3">
          <button
            onClick={onQuiz}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-2xl
                       transition-colors shadow-[0_0_20px_#10b98130]"
          >
            🧠 Şimdi Test Et
          </button>
          <button
            onClick={onRetry}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 rounded-2xl
                       transition-colors shadow-[0_0_20px_#22d3ee20]"
          >
            🔄 Tekrar Çalış
          </button>
          <button
            onClick={onBack}
            className="w-full bg-white/10 hover:bg-white/15 text-gray-300 font-semibold py-4 rounded-2xl transition-colors"
          >
            Başka Konu Seç
          </button>
          <button onClick={onHome} className="w-full text-gray-500 hover:text-gray-300 font-medium py-3 transition-colors">
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main flashcard screen
// ─────────────────────────────────────────────
export default function LearnPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { speak, isSupported } = useSpeech();
  const { isLearned, markLearned, markUnlearned } = useProgress();

  const [selectedTopic, setSelectedTopic] = useState(location.state?.topic ?? null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardState, setCardState] = useState('idle');

  const topicWords = selectedTopic ? words.filter((w) => w.topic === selectedTopic) : [];
  const isFinished = currentIndex >= topicWords.length;
  const current = topicWords[currentIndex];
  const meta = TOPIC_META[selectedTopic] || DEFAULT_META;

  function handleAction(didLearn) {
    if (cardState !== 'idle') return;
    setCardState(didLearn ? 'leaving-learned' : 'leaving-not');

    if (didLearn) markLearned(current.id);
    else markUnlearned(current.id);

    setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setCardState('idle');
    }, 320);
  }

  if (!selectedTopic) {
    navigate('/topics');
    return null;
  }

  if (isFinished) {
    return (
      <FinishScreen
        topic={selectedTopic}
        topicWords={topicWords}
        isLearned={isLearned}
        onRetry={() => setCurrentIndex(0)}
        onBack={() => navigate('/topics')}
        onHome={() => navigate('/topics')}
        onQuiz={() => navigate('/quiz', { state: { topic: selectedTopic } })}
      />
    );
  }

  const learnedSoFar = topicWords.slice(0, currentIndex).filter((w) => isLearned(w.id)).length;

  const cardOpacity =
    cardState === 'leaving-learned'
      ? 'opacity-0 translate-x-8'
      : cardState === 'leaving-not'
      ? 'opacity-0 -translate-x-8'
      : 'opacity-100 translate-x-0';

  return (
    <div className="min-h-screen bg-[#080812] flex items-center justify-center px-4">
      <div className="w-full max-w-lg">

        {/* ── Nav bar ── */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => navigate('/topics')}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-200 transition-colors"
          >
            ← {selectedTopic}
          </button>
          <span className="text-sm font-semibold text-gray-500 tabular-nums">
            {currentIndex + 1} / {topicWords.length}
          </span>
        </div>

        {/* ── Progress strip ── */}
        <div className="flex gap-[3px] mb-6">
          {topicWords.map((w, i) => (
            <div
              key={w.id}
              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                i < currentIndex
                  ? isLearned(w.id)
                    ? 'bg-emerald-500'
                    : 'bg-pink-500'
                  : i === currentIndex
                  ? 'bg-cyan-500'
                  : 'bg-white/10'
              }`}
            />
          ))}
        </div>

        {/* ── Card ── */}
        <div
          className={`bg-[#0e0e1a] border border-white/[0.07] rounded-3xl p-6 mb-5 transition-all duration-300 ease-in-out ${cardOpacity}`}
        >
          {/* Top row: speaker + type badge */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => speak(current.en)}
              disabled={!isSupported}
              title="Kelimeyi dinle"
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 text-xl
                         hover:bg-cyan-500/20 active:scale-95 transition-all disabled:opacity-40"
            >
              🔊
            </button>
            <span className="px-3 py-1 rounded-full bg-white/10 text-gray-400 text-xs font-semibold uppercase tracking-widest">
              {TYPE_LABELS[current.type] ?? current.type}
            </span>
          </div>

          {/* Görsel: resim veya emoji */}
          <WordVisual word={current.en} topicIcon={meta.icon} />

          {/* Word */}
          <div className="text-center mb-8 px-2">
            <h2 className="text-5xl font-extrabold text-white mb-1 leading-tight break-words">
              {current.en}
            </h2>
            {WORD_PHONETIC[current.en.toLowerCase()] && (
              <p className="text-sm text-gray-500 mb-2 tracking-wide">
                /{WORD_PHONETIC[current.en.toLowerCase()]}/
              </p>
            )}
            <p className="text-xl font-semibold text-cyan-400">{current.tr}</p>
          </div>

          {/* Divider + example */}
          <div className="border-t border-white/[0.07] pt-5">
            <div className="flex items-start gap-3">
              <button
                onClick={() => speak(current.exampleEn)}
                disabled={!isSupported}
                title="Örnek cümleyi dinle"
                className="mt-0.5 w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl
                           bg-white/5 text-gray-500 hover:bg-white/10 active:scale-95 transition-all disabled:opacity-40"
              >
                🔊
              </button>
              <div>
                <p className="text-gray-300 font-medium leading-relaxed text-sm">{current.exampleEn}</p>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{current.exampleTr}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sub-counter ── */}
        <p className="text-center text-xs text-gray-600 mb-4">
          Bu turda{' '}
          <span className="font-semibold text-emerald-400">{learnedSoFar} kelime</span> öğrenildi
        </p>

        {/* ── Action buttons ── */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleAction(false)}
            disabled={cardState !== 'idle'}
            className="py-4 rounded-2xl border-2 border-white/10 text-gray-400 font-bold text-sm
                       hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-400
                       active:scale-[0.97] transition-all disabled:opacity-50"
          >
            😕 Henüz Değil
          </button>
          <button
            onClick={() => handleAction(true)}
            disabled={cardState !== 'idle'}
            className="py-4 rounded-2xl bg-emerald-500 text-white font-bold text-sm
                       hover:bg-emerald-400 active:bg-emerald-600 active:scale-[0.97]
                       transition-all shadow-[0_0_20px_#10b98130] disabled:opacity-50"
          >
            ✅ Öğrendim
          </button>
        </div>
      </div>
    </div>
  );
}
