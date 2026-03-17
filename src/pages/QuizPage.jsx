import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import words from '../data/words.json';
import { TOPIC_META, DEFAULT_META } from '../data/topics';
import { useProgress } from '../hooks/useProgress';
import { useSpeech } from '../hooks/useSpeech';

const allTopics = [...new Set(words.map((w) => w.topic))];
const OPTIONS_COUNT = 8;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Build 8 options: 1 correct + 7 random distractors from the full pool */
function buildOptions(correctWord) {
  const distractors = shuffle(words.filter((w) => w.id !== correctWord.id)).slice(0, OPTIONS_COUNT - 1);
  return shuffle([correctWord, ...distractors]);
}

/**
 * sel: string (single topic) | string[] (multi-topic page quiz)
 * Returns shuffled quiz words and first options set.
 */
function buildQuiz(sel) {
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-lg mx-auto px-4 pt-8 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate('/')}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white shadow-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            ←
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Çoktan Seçmeli Test</h1>
            <p className="text-xs text-gray-400">Hangi konuyu test etmek istersin?</p>
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
                className="w-full text-left bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-md active:scale-[0.98] transition-all flex items-center gap-4"
              >
                <span className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${meta.bg} text-white shadow-sm`}>
                  {meta.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{topic}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {tw.length} soru · {learned} öğrenilmiş
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

// ─── Finish screen ─────────────────────────────────────────────────────────────
function FinishScreen({ label, score, total, results, onRetry, onBack, onHome }) {
  const pct = Math.round((score / total) * 100);
  const emoji   = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
  const message = pct === 100 ? 'Mükemmel! Hepsini bildin!'
    : pct >= 80 ? 'Harika! Neredeyse tamamdı!'
    : pct >= 60 ? 'İyi gidiyor, biraz daha pratik yap!'
    : 'Flashcard\'larla tekrar çalış!';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-xl text-center animate-pop-in">
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Test Tamamlandı!</h2>
        <p className="text-gray-400 text-sm mb-5">{label} · {message}</p>

        <div className="bg-emerald-50 rounded-2xl p-5 mb-5">
          <p className="text-5xl font-extrabold text-emerald-600 tabular-nums">
            {score}
            <span className="text-2xl text-gray-400 font-normal"> / {total}</span>
          </p>
          <p className="text-sm text-emerald-500 font-medium mt-1">doğru cevap · %{pct}</p>
        </div>

        <div className="flex gap-3 mb-6">
          <div className="flex-1 bg-green-50 rounded-xl p-3">
            <p className="text-2xl font-bold text-green-600">{score}</p>
            <p className="text-xs text-green-500 font-medium">Doğru ✓</p>
          </div>
          <div className="flex-1 bg-red-50 rounded-xl p-3">
            <p className="text-2xl font-bold text-red-500">{total - score}</p>
            <p className="text-xs text-red-400 font-medium">Yanlış ✗</p>
          </div>
        </div>

        {/* Result strip */}
        <div className="flex gap-[3px] mb-7">
          {results.map((r, i) => (
            <div key={i} className={`h-2 flex-1 rounded-full ${r ? 'bg-green-400' : 'bg-red-400'}`} />
          ))}
        </div>

        <div className="space-y-3">
          <button onClick={onRetry} className="w-full bg-emerald-600 text-white font-bold py-4 rounded-2xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
            🔄 Tekrar Test Et
          </button>
          <button onClick={onBack} className="w-full bg-gray-100 text-gray-700 font-semibold py-4 rounded-2xl hover:bg-gray-200 transition-colors">
            Başka Konu Seç
          </button>
          <button onClick={onHome} className="w-full text-emerald-500 font-medium py-3">
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

  // sel  : string | string[] | null  — what we quiz on
  // label: string                    — what we display
  const initSel   = location.state?.topics ?? location.state?.topic ?? null;
  const initLabel = location.state?.pageLabel ?? location.state?.topic ?? null;

  const [sel,   setSel]   = useState(initSel);
  const [label, setLabel] = useState(initLabel);

  const [quizWords, setQuizWords] = useState(() => buildQuiz(initSel).quizWords);
  const [options,   setOptions]   = useState(() => buildQuiz(initSel).options);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedId,   setSelectedId]   = useState(null);
  const [isAnswered,   setIsAnswered]   = useState(false);
  const [score,        setScore]        = useState(0);
  const [results,      setResults]      = useState([]);

  // Regenerate options when current word changes
  useEffect(() => {
    const w = quizWords[currentIndex];
    if (!w) return;
    setOptions(buildOptions(w));
    setSelectedId(null);
    setIsAnswered(false);
  }, [currentIndex, quizWords]);

  /** sel: string | string[], lbl: display string */
  function startQuiz(newSel, newLabel) {
    const { quizWords: qw, options: opts } = buildQuiz(newSel);
    setSel(newSel);
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

  // ── No selection yet → topic picker ──
  if (!sel) return <TopicSelect onSelect={startQuiz} />;

  // ── Finished ──
  if (currentIndex >= quizWords.length && quizWords.length > 0) {
    return (
      <FinishScreen
        label={label}
        score={score}
        total={quizWords.length}
        results={results}
        onRetry={() => startQuiz(sel, label)}
        onBack={() => { setSel(null); setLabel(null); setQuizWords([]); setResults([]); }}
        onHome={() => navigate('/')}
      />
    );
  }

  if (!quizWords[currentIndex] || options.length === 0) return null;

  const current = quizWords[currentIndex];

  // ── Quiz in progress ──
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-lg mx-auto px-4 pt-6 pb-10">

        {/* Nav */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => setSel(null)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
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
                  ? results[i] ? 'bg-green-400' : 'bg-red-400'
                  : i === currentIndex ? 'bg-emerald-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Score badge */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 shadow-sm border border-gray-100 text-xs font-bold">
            <span className="text-green-600">{score} ✓</span>
            <span className="text-gray-300">|</span>
            <span className="text-red-400">{currentIndex - score} ✗</span>
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-5">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest text-center mb-5 font-semibold">
            Türkçe karşılığı nedir?
          </p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <h2 className="text-4xl font-extrabold text-gray-900 break-words text-center">
              {current.en}
            </h2>
            <button
              onClick={() => speak(current.en)}
              disabled={!isSupported}
              title="Kelimeyi dinle"
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 hover:bg-emerald-100 active:scale-95 transition-all disabled:opacity-40"
            >
              🔊
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest">
            {current.type}
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-2.5">
          {options.map((option) => {
            const isCorrectOption  = option.id === current.id;
            const isSelectedOption = option.id === selectedId;

            let cls = 'w-full min-h-[60px] py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 text-left leading-tight break-words ';
            if (!isAnswered)          cls += 'bg-white border-2 border-gray-200 text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 active:scale-[0.97] shadow-sm';
            else if (isCorrectOption) cls += 'bg-green-500 border-2 border-green-500 text-white shadow-lg shadow-green-200';
            else if (isSelectedOption)cls += 'bg-red-500 border-2 border-red-500 text-white shadow-lg shadow-red-200 animate-shake';
            else                      cls += 'bg-gray-50 border-2 border-gray-100 text-gray-300 cursor-default';

            return (
              <button key={option.id} onClick={() => handleAnswer(option)} disabled={isAnswered} className={cls}>
                {option.tr}
                {isAnswered && isCorrectOption  && <span className="ml-1">✓</span>}
                {isAnswered && isSelectedOption && !isCorrectOption && <span className="ml-1">✗</span>}
              </button>
            );
          })}
        </div>

        {/* Wrong-answer hint */}
        {isAnswered && selectedId !== null && selectedId !== current.id && (
          <div className="mt-4 bg-orange-50 rounded-2xl p-4 border border-orange-100 animate-slide-up">
            <p className="text-sm text-orange-700">
              <span className="font-bold">Doğru cevap: </span>
              <span className="font-semibold">{current.tr}</span>
            </p>
            <p className="text-xs text-orange-400 mt-1 italic">{current.exampleEn}</p>
          </div>
        )}
      </div>
    </div>
  );
}
