import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import words from '../data/words.json';
import { TOPIC_META, DEFAULT_META } from '../data/topics';
import { useProgress } from '../hooks/useProgress';
import { useSpeech } from '../hooks/useSpeech';

const allTopics = [...new Set(words.map((w) => w.topic))];
const OPTIONS_COUNT = 8;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildOptions(correctWord, pool = words) {
  // Try to pick distractors from the given pool first
  let distractors = shuffle(pool.filter((w) => w.id !== correctWord.id));
  // If pool doesn't have enough words, pad with words from the full list
  if (distractors.length < OPTIONS_COUNT - 1) {
    const usedIds = new Set(distractors.map((w) => w.id));
    usedIds.add(correctWord.id);
    const extra = shuffle(words.filter((w) => !usedIds.has(w.id)));
    distractors = [...distractors, ...extra];
  }
  return shuffle([correctWord, ...distractors.slice(0, OPTIONS_COUNT - 1)]);
}

function buildQuiz(sel, wordIds) {
  if (wordIds && wordIds.length > 0) {
    const pool = words.filter((w) => wordIds.includes(w.id));
    const quizWords = shuffle(pool);
    const options = quizWords.length > 0 ? buildOptions(quizWords[0], pool) : [];
    return { quizWords, options, pool };
  }
  if (!sel) return { quizWords: [], options: [] };
  const pool = Array.isArray(sel)
    ? words.filter((w) => sel.includes(w.topic))
    : words.filter((w) => w.topic === sel);
  const quizWords = shuffle(pool);
  const options = quizWords.length > 0 ? buildOptions(quizWords[0]) : [];
  return { quizWords, options };
}

// ─── Topic selection screen ────────────────────────────────────────────────────
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
          <div>
            <h1 className="text-xl font-bold text-white">Çoktan Seçmeli Test</h1>
            <p className="text-xs text-gray-500">Hangi konuyu test etmek istersin?</p>
          </div>
        </div>

        <div className="space-y-3">
          {allTopics.map((topic) => {
            const meta = TOPIC_META[topic] || DEFAULT_META;
            const tw = words.filter((w) => w.topic === topic);
            const learned = getLearnedCount(tw);
            return (
              <button
                key={topic}
                onClick={() => onSelect(topic, topic)}
                className="w-full text-left bg-[#0e0e1a] rounded-2xl p-5 border border-white/[0.07]
                           hover:border-emerald-500/30 active:scale-[0.98] transition-all flex items-center gap-4"
              >
                <span className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${meta.bg} text-white shadow-sm`}>
                  {meta.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-200">{topic}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {tw.length} soru · {learned} öğrenilmiş
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

// ─── Finish screen ─────────────────────────────────────────────────────────────
function FinishScreen({ label, score, total, results, onRetry, onBack, onHome }) {
  const pct = Math.round((score / total) * 100);
  const emoji   = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
  const message = pct === 100 ? 'Mükemmel! Hepsini bildin!'
    : pct >= 80 ? 'Harika! Neredeyse tamamdı!'
    : pct >= 60 ? 'İyi gidiyor, biraz daha pratik yap!'
    : 'Flashcard\'larla tekrar çalış!';

  return (
    <div className="min-h-screen bg-[#080812] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-[#0e0e1a] border border-white/[0.07] rounded-3xl p-8 shadow-xl text-center animate-pop-in">
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className="text-2xl font-bold text-white mb-1">Test Tamamlandı!</h2>
        <p className="text-gray-400 text-sm mb-5">{label} · {message}</p>

        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 mb-5">
          <p className="text-5xl font-extrabold text-emerald-400 tabular-nums">
            {score}
            <span className="text-2xl text-gray-500 font-normal"> / {total}</span>
          </p>
          <p className="text-sm text-emerald-500 font-medium mt-1">doğru cevap · %{pct}</p>
        </div>

        <div className="flex gap-3 mb-6">
          <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
            <p className="text-2xl font-bold text-emerald-400">{score}</p>
            <p className="text-xs text-emerald-500 font-medium">Doğru ✓</p>
          </div>
          <div className="flex-1 bg-pink-500/10 border border-pink-500/20 rounded-xl p-3">
            <p className="text-2xl font-bold text-pink-400">{total - score}</p>
            <p className="text-xs text-pink-500 font-medium">Yanlış ✗</p>
          </div>
        </div>

        <div className="flex gap-[3px] mb-7">
          {results.map((r, i) => (
            <div key={i} className={`h-2 flex-1 rounded-full ${r ? 'bg-emerald-500' : 'bg-pink-500'}`} />
          ))}
        </div>

        <div className="space-y-3">
          <button onClick={onRetry} className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-2xl transition-colors shadow-[0_0_20px_#10b98130]">
            🔄 Tekrar Test Et
          </button>
          <button onClick={onBack} className="w-full bg-white/10 hover:bg-white/15 text-gray-300 font-semibold py-4 rounded-2xl transition-colors">
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

// ─── Main QuizPage ─────────────────────────────────────────────────────────────
export default function QuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { speak, isSupported } = useSpeech();
  const { markLearned, markUnlearned } = useProgress();

  const initWordIds = location.state?.wordIds ?? null;
  const initSel     = location.state?.topics ?? location.state?.topic ?? (initWordIds ? '__practice__' : null);
  const initLabel   = location.state?.pageLabel ?? location.state?.topic ?? null;

  const [sel,      setSel]      = useState(initSel);
  const [label,    setLabel]    = useState(initLabel);
  const [wordIds,  setWordIds]  = useState(initWordIds);

  const [quizWords, setQuizWords] = useState(() => buildQuiz(initSel, initWordIds).quizWords);
  const [options,   setOptions]   = useState(() => buildQuiz(initSel, initWordIds).options);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedId,   setSelectedId]   = useState(null);
  const [isAnswered,   setIsAnswered]   = useState(false);
  const [score,        setScore]        = useState(0);
  const [results,      setResults]      = useState([]);

  useEffect(() => {
    const w = quizWords[currentIndex];
    if (!w) return;
    const pool = wordIds ? words.filter((x) => wordIds.includes(x.id)) : words;
    setOptions(buildOptions(w, pool));
    setSelectedId(null);
    setIsAnswered(false);
  }, [currentIndex, quizWords, wordIds]);

  function startQuiz(newSel, newLabel, newWordIds = null) {
    const { quizWords: qw, options: opts } = buildQuiz(newSel, newWordIds);
    setSel(newSel);
    setWordIds(newWordIds);
    setLabel(newLabel ?? (Array.isArray(newSel) ? newSel.join(' · ') : newSel));
    setQuizWords(qw);
    setOptions(opts);
    setCurrentIndex(0);
    setScore(0);
    setResults([]);
    setSelectedId(null);
    setIsAnswered(false);
  }

  function handleAnswer(optionWord) {
    if (isAnswered) return;
    const current = quizWords[currentIndex];
    const correct = optionWord.id === current.id;

    setSelectedId(optionWord.id);
    setIsAnswered(true);
    setResults((r) => [...r, correct]);

    if (correct) { setScore((s) => s + 1); markLearned(current.id); }
    else          { markUnlearned(current.id); }

    setTimeout(() => setCurrentIndex((i) => i + 1), correct ? 900 : 1500);
  }

  if (!sel) return <TopicSelect onSelect={startQuiz} />;

  if (currentIndex >= quizWords.length && quizWords.length > 0) {
    return (
      <FinishScreen
        label={label}
        score={score}
        total={quizWords.length}
        results={results}
        onRetry={() => startQuiz(sel, label, wordIds)}
        onBack={() => { setSel(null); setLabel(null); setWordIds(null); setQuizWords([]); setResults([]); }}
        onHome={() => navigate('/topics')}
      />
    );
  }

  if (!quizWords[currentIndex] || options.length === 0) return null;

  const current = quizWords[currentIndex];

  return (
    <div className="min-h-screen bg-[#080812]">
      <div className="max-w-lg mx-auto px-4 pt-6 pb-10">

        {/* Nav */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => setSel(null)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-200 transition-colors"
          >
            ← {label}
          </button>
          <span className="text-sm font-semibold text-gray-500 tabular-nums">
            {currentIndex + 1} / {quizWords.length}
          </span>
        </div>

        {/* Progress strip */}
        <div className="flex gap-[3px] mb-4">
          {quizWords.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                i < results.length
                  ? results[i] ? 'bg-emerald-500' : 'bg-pink-500'
                  : i === currentIndex ? 'bg-cyan-500' : 'bg-white/10'
              }`}
            />
          ))}
        </div>

        {/* Score badge */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2 bg-[#0e0e1a] border border-white/[0.07] rounded-xl px-3 py-1.5 text-xs font-bold">
            <span className="text-emerald-400">{score} ✓</span>
            <span className="text-gray-600">|</span>
            <span className="text-pink-400">{currentIndex - score} ✗</span>
          </div>
        </div>

        {/* Question card */}
        <div className="bg-[#0e0e1a] border border-white/[0.07] rounded-3xl p-6 mb-5">
          <p className="text-[11px] text-gray-500 uppercase tracking-widest text-center mb-5 font-semibold">
            Türkçe karşılığı nedir?
          </p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <h2 className="text-4xl font-extrabold text-white break-words text-center">
              {current.en}
            </h2>
            <button
              onClick={() => speak(current.en)}
              disabled={!isSupported}
              title="Kelimeyi dinle"
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl
                         bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 active:scale-95 transition-all disabled:opacity-40"
            >
              🔊
            </button>
          </div>
          <p className="text-center text-xs text-gray-500 font-semibold uppercase tracking-widest">
            {current.type}
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-2.5">
          {options.map((option) => {
            const isCorrectOption  = option.id === current.id;
            const isSelectedOption = option.id === selectedId;

            let cls = 'w-full min-h-[60px] py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 text-left leading-tight break-words ';
            if (!isAnswered)
              cls += 'bg-[#0e0e1a] border-2 border-white/10 text-gray-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 active:scale-[0.97]';
            else if (isCorrectOption)
              cls += 'bg-emerald-500 border-2 border-emerald-400 text-white shadow-[0_0_16px_#10b98140]';
            else if (isSelectedOption)
              cls += 'bg-pink-500/80 border-2 border-pink-400 text-white animate-shake';
            else
              cls += 'bg-white/5 border-2 border-white/5 text-gray-600 cursor-default';

            return (
              <button key={option.id} onClick={() => handleAnswer(option)} disabled={isAnswered} className={cls}>
                {option.tr}
                {isAnswered && isCorrectOption   && <span className="ml-1">✓</span>}
                {isAnswered && isSelectedOption && !isCorrectOption && <span className="ml-1">✗</span>}
              </button>
            );
          })}
        </div>

        {/* Wrong-answer hint */}
        {isAnswered && selectedId !== null && selectedId !== current.id && (
          <div className="mt-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 animate-slide-up">
            <p className="text-sm text-orange-300">
              <span className="font-bold">Doğru cevap: </span>
              <span className="font-semibold">{current.tr}</span>
            </p>
            <p className="text-xs text-orange-500 mt-1 italic">{current.exampleEn}</p>
          </div>
        )}
      </div>
    </div>
  );
}
