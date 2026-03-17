import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import words from '../data/words.json';
import { useProgress } from '../hooks/useProgress';
import { useSpeech } from '../hooks/useSpeech';

const topics = [...new Set(words.map((w) => w.topic))];

import { TOPIC_META, DEFAULT_META } from '../data/topics';

const TYPE_LABELS = { isim: 'isim', fiil: 'fiil', sıfat: 'sıfat', zarf: 'zarf' };

// ─────────────────────────────────────────────
// Topic selection screen
// ─────────────────────────────────────────────
function TopicSelect({ onSelect }) {
  const navigate = useNavigate();
  const { getLearnedCount } = useProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-lg mx-auto px-4 pt-8 pb-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate('/')}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white shadow-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            ←
          </button>
          <h1 className="text-xl font-bold text-gray-900">Konu Seç</h1>
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
                className="w-full text-left bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-indigo-200 hover:shadow-md active:scale-[0.98] transition-all flex items-center gap-4"
              >
                <span
                  className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${meta.bg} text-white shadow-sm`}
                >
                  {meta.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{topic}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {topicWords.length} kelime · {pct}% tamamlandı
                  </p>
                </div>
                <span className="text-gray-300 text-xl">›</span>
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-xl text-center animate-pop-in">
        <div className="text-6xl mb-4">{pct === 100 ? '🎉' : '👏'}</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          {pct === 100 ? 'Mükemmel!' : 'Konu Tamamlandı!'}
        </h2>
        <p className="text-gray-500 mb-2">{topic}</p>
        <p className="text-4xl font-extrabold text-indigo-600 tabular-nums mb-1">
          {learnedCount}
          <span className="text-xl text-gray-400 font-normal"> / {topicWords.length}</span>
        </p>
        <p className="text-sm text-gray-400 mb-8">kelime öğrenildi</p>

        <div className="space-y-3">
          <button
            onClick={onQuiz}
            className="w-full bg-emerald-500 text-white font-bold py-4 rounded-2xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200"
          >
            🧠 Şimdi Test Et
          </button>
          <button
            onClick={onRetry}
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            🔄 Tekrar Çalış
          </button>
          <button
            onClick={onBack}
            className="w-full bg-gray-100 text-gray-700 font-semibold py-4 rounded-2xl hover:bg-gray-200 transition-colors"
          >
            Başka Konu Seç
          </button>
          <button onClick={onHome} className="w-full text-indigo-500 font-medium py-3">
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
  // 'idle' | 'leaving-learned' | 'leaving-not'
  const [cardState, setCardState] = useState('idle');

  const topicWords = selectedTopic ? words.filter((w) => w.topic === selectedTopic) : [];
  const isFinished = currentIndex >= topicWords.length;
  const current = topicWords[currentIndex];

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

  // ── Topic selection ──
  if (!selectedTopic) {
    return (
      <TopicSelect
        onSelect={(topic) => {
          setSelectedTopic(topic);
          setCurrentIndex(0);
        }}
      />
    );
  }

  // ── Finished ──
  if (isFinished) {
    return (
      <FinishScreen
        topic={selectedTopic}
        topicWords={topicWords}
        isLearned={isLearned}
        onRetry={() => setCurrentIndex(0)}
        onBack={() => { setSelectedTopic(null); setCurrentIndex(0); }}
        onHome={() => navigate('/')}
        onQuiz={() => navigate('/quiz', { state: { topic: selectedTopic } })}
      />
    );
  }

  // ── Flashcard ──
  const learnedSoFar = topicWords.slice(0, currentIndex).filter((w) => isLearned(w.id)).length;

  const cardOpacity =
    cardState === 'leaving-learned'
      ? 'opacity-0 translate-x-8'
      : cardState === 'leaving-not'
      ? 'opacity-0 -translate-x-8'
      : 'opacity-100 translate-x-0';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-lg mx-auto px-4 pt-6 pb-10">

        {/* ── Nav bar ── */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => setSelectedTopic(null)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
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
                    ? 'bg-green-400'
                    : 'bg-red-300'
                  : i === currentIndex
                  ? 'bg-indigo-500'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* ── Card ── */}
        <div
          className={`bg-white rounded-3xl shadow-lg p-6 mb-5 transition-all duration-300 ease-in-out ${cardOpacity}`}
        >
          {/* Top row: speaker + type badge */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => speak(current.en)}
              disabled={!isSupported}
              title="Kelimeyi dinle"
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500 text-xl hover:bg-indigo-100 active:scale-95 transition-all disabled:opacity-40"
            >
              🔊
            </button>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-400 text-xs font-semibold uppercase tracking-widest">
              {TYPE_LABELS[current.type] ?? current.type}
            </span>
          </div>

          {/* Word */}
          <div className="text-center mb-8 px-2">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-3 leading-tight break-words">
              {current.en}
            </h2>
            <p className="text-xl font-semibold text-indigo-600">{current.tr}</p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 pt-5">
            <div className="flex items-start gap-3">
              <button
                onClick={() => speak(current.exampleEn)}
                disabled={!isSupported}
                title="Örnek cümleyi dinle"
                className="mt-0.5 w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-gray-100 active:scale-95 transition-all disabled:opacity-40"
              >
                🔊
              </button>
              <div>
                <p className="text-gray-700 font-medium leading-relaxed text-sm">
                  {current.exampleEn}
                </p>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">{current.exampleTr}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sub-counter ── */}
        <p className="text-center text-xs text-gray-400 mb-4">
          Bu turda{' '}
          <span className="font-semibold text-green-500">{learnedSoFar} kelime</span> öğrenildi
        </p>

        {/* ── Action buttons ── */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleAction(false)}
            disabled={cardState !== 'idle'}
            className="py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:border-red-200 hover:bg-red-50 hover:text-red-500 active:scale-[0.97] transition-all disabled:opacity-50"
          >
            😕 Henüz Değil
          </button>
          <button
            onClick={() => handleAction(true)}
            disabled={cardState !== 'idle'}
            className="py-4 rounded-2xl bg-green-500 text-white font-bold text-sm hover:bg-green-600 active:bg-green-700 active:scale-[0.97] transition-all shadow-lg shadow-green-200 disabled:opacity-50"
          >
            ✅ Öğrendim
          </button>
        </div>
      </div>
    </div>
  );
}
