import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import words from '../data/words.json';
import { TOPIC_META, DEFAULT_META } from '../data/topics';
import { useStreak } from '../hooks/useStreak';
import { useProgress } from '../hooks/useProgress';
import StreakCelebration from '../components/StreakCelebration';

const topics = [...new Set(words.map((w) => w.topic))];

const PAIRS_PER_GAME = 15;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─────────────────────────────────────────────
// Topic selection
// ─────────────────────────────────────────────
function TopicSelect({ onSelect }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080e1c]">
      <div className="max-w-lg mx-auto px-4 pt-safe-area pb-safe-area">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate('/topics')}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 border border-white/[0.07] text-gray-400 hover:text-white transition-colors"
          >
            ←
          </button>
          <div>
            <h1 className="text-xl font-bold text-white">Eşleştirme Oyunu</h1>
            <p className="text-xs text-gray-500">Oynamak için bir konu seç</p>
          </div>
        </div>

        <div className="space-y-3">
          {topics.map((topic) => {
            const meta = TOPIC_META[topic] || DEFAULT_META;
            const count = Math.min(words.filter((w) => w.topic === topic).length, PAIRS_PER_GAME);
            return (
              <button
                key={topic}
                onClick={() => onSelect(topic, topic)}
                className="w-full text-left bg-[#0d1428] rounded-2xl p-5 border border-white/[0.07]
                           hover:border-violet-500/30 active:scale-[0.98] transition-all flex items-center gap-4"
              >
                <span className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${meta.bg} text-white shadow-sm`}>
                  {meta.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-200">{topic}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{count} çift kart</p>
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
// Konu tamamlandı ekranı (flow modu)
// ─────────────────────────────────────────────
function TopicDoneScreen({ topic, learned, total, quizScore, quizTotal, matchMoves, matchPairs, onHome }) {
  const pct      = total > 0 ? Math.round((learned / total) * 100) : 0;
  const quizPct  = quizTotal > 0 ? Math.round((quizScore / quizTotal) * 100) : 0;
  const matchRating = matchMoves <= matchPairs ? '🥇' : matchMoves <= matchPairs * 1.5 ? '🥈' : '🥉';

  return (
    <div className="min-h-screen bg-[#080e1c] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm bg-[#0d1428] border border-white/[0.07] rounded-3xl p-6 shadow-xl text-center animate-pop-in">
        <div className="text-6xl mb-3">🏆</div>
        <h2 className="text-2xl font-bold text-white mb-1">Konu Tamamlandı!</h2>
        <p className="text-gray-400 text-sm mb-5">{topic}</p>

        {/* Test sonucu */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 mb-3 text-left">
          <p className="text-[11px] text-emerald-400 font-bold uppercase tracking-widest mb-2">🧠 Test Sonucu</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">{quizScore} / {quizTotal} doğru</span>
            <span className="text-xl font-extrabold text-emerald-400">%{quizPct}</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
            <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${quizPct}%` }} />
          </div>
        </div>

        {/* Eşleştirme sonucu */}
        <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-4 mb-3 text-left">
          <p className="text-[11px] text-violet-400 font-bold uppercase tracking-widest mb-2">🎮 Eşleştirme Sonucu</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">{matchMoves} hamlede {matchPairs} çift</span>
            <span className="text-2xl">{matchRating}</span>
          </div>
        </div>

        {/* Genel tamamlanma */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 mb-5 text-left">
          <p className="text-[11px] text-blue-400 font-bold uppercase tracking-widest mb-2">📊 Konu Tamamlanması</p>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">{learned} / {total} kelime</span>
            <span className="text-xl font-extrabold text-blue-400">%{pct}</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-500 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <button
          onClick={onHome}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400
                     text-white font-bold py-4 rounded-2xl transition-all shadow-[0_0_20px_#3b82f630]"
        >
          Konulara Dön
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Finish screen
// ─────────────────────────────────────────────
function FinishScreen({ topic, moves, pairs, onRetry, onBack, onHome }) {
  const rating = moves <= pairs ? '🥇' : moves <= pairs * 1.5 ? '🥈' : '🥉';

  return (
    <div className="min-h-screen bg-[#080e1c] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-[#0d1428] border border-white/[0.07] rounded-3xl p-8 shadow-xl text-center animate-pop-in">
        <div className="text-6xl mb-4">{rating}</div>
        <h2 className="text-2xl font-bold text-white mb-1">Tebrikler!</h2>
        <p className="text-gray-400 mb-6">{topic} · Tüm çiftler eşleştirildi</p>

        <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-5 mb-8">
          <p className="text-5xl font-extrabold text-violet-400 tabular-nums">{moves}</p>
          <p className="text-sm text-violet-400 font-medium mt-1">toplam hamle</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 rounded-2xl
                       transition-colors shadow-[0_0_20px_#7c3aed30]"
          >
            🔄 Tekrar Oyna
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
// Game board
// ─────────────────────────────────────────────
function GameBoard({ topic, cards, selected, matched, shaking, moves, timeLeft, timeLimit, lives, onCardClick, onExit }) {
  const totalPairs = cards.length / 2;
  const matchedPairs = matched.size / 2;

  return (
    <div className="min-h-screen bg-[#080e1c]">
      <div className="max-w-lg mx-auto px-3 pt-safe-area pb-safe-area">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 px-1">
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10
                         border border-white/[0.07] text-gray-400 hover:text-white transition-colors text-sm"
            >
              ←
            </button>
            <div>
              <h2 className="font-bold text-gray-200">{topic}</h2>
              <p className="text-xs text-gray-500">
                {matchedPairs} / {totalPairs} eşleşti
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-xl px-3 py-2">
              <span className="text-sm font-bold tabular-nums">{moves}</span>
              <span className="text-xs font-medium">hamle</span>
            </div>
            <div className={`flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-bold tabular-nums border
              ${timeLeft > timeLimit * 0.5 ? 'bg-white/5 border-white/10 text-gray-400'
              : timeLeft > timeLimit * 0.17 ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
              : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
              ⏱ {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Canlar (flow modu) */}
        {lives !== null && (
          <div className="flex justify-center gap-2 mb-3">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-xl">{i < lives ? '❤️' : '🤍'}</span>
            ))}
          </div>
        )}

        {/* Progress bar */}
        <div className="w-full bg-white/10 rounded-full h-1.5 mb-5 overflow-hidden">
          <div
            className="bg-violet-500 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(matchedPairs / totalPairs) * 100}%` }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-5 gap-2">
          {cards.map((card) => {
            const isMatched = matched.has(card.id);
            const isSelected = Boolean(selected.find((s) => s.id === card.id));
            const isShaking = shaking.has(card.id);
            const isEN = card.type === 'en';

            let cardClass =
              'min-h-[68px] rounded-xl p-2 flex items-center justify-center text-center ' +
              'text-[11px] font-semibold leading-tight break-words transition-all duration-200 ' +
              'cursor-pointer select-none ';

            if (isMatched) {
              cardClass += 'opacity-0 scale-75 pointer-events-none ';
            } else if (isSelected) {
              cardClass += isEN
                ? 'bg-blue-600 text-black shadow-[0_0_16px_#3b82f640] scale-105 '
                : 'bg-violet-500 text-white shadow-[0_0_16px_#8b5cf640] scale-105 ';
            } else {
              cardClass += isEN
                ? 'bg-blue-600/15 text-blue-400 border border-blue-600/20 hover:bg-blue-600/25 active:scale-95 '
                : 'bg-violet-500/15 text-violet-300 border border-violet-500/20 hover:bg-violet-500/25 active:scale-95 ';
            }

            if (isShaking) cardClass += 'animate-shake ';

            return (
              <button
                key={card.id}
                onClick={() => onCardClick(card)}
                disabled={isMatched}
                className={cardClass}
              >
                {card.text}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-4 justify-center mt-6">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-blue-600/30 border border-blue-600/40" />
            <span className="text-xs text-gray-500">İngilizce</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-violet-500/30 border border-violet-500/40" />
            <span className="text-xs text-gray-500">Türkçe</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main MatchPage
// ─────────────────────────────────────────────
export default function MatchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { streak, justStreaked, markDone, clearStreak } = useStreak();
  const { markLearned, markUnlearned } = useProgress();

  const initTopics  = location.state?.topics ?? null;
  const initLabel   = location.state?.pageLabel ?? null;
  const initWordIds = location.state?.wordIds ?? null;
  const flow        = location.state?.flow ?? null;
  const quizScore   = location.state?.quizScore ?? null;
  const quizTotal   = location.state?.quizTotal ?? null;
  const initCorrectWordIds = location.state?.correctWordIds ?? [];
  const totalQuizWords  = location.state?.totalQuizWords ?? 0;
  const timeLimit   = location.state?.timeLimit ?? 90;
  const pairLimit   = location.state?.pairLimit ?? PAIRS_PER_GAME;
  const sourceTopic = location.state?.from === 'topic-hub'
    ? (location.state?.topic ?? (typeof location.state?.topics === 'string' ? location.state?.topics : null))
    : null;
  const goBack = () => sourceTopic ? navigate('/topic-hub', { state: { topic: sourceTopic } }) : navigate('/topics');

  const [selectedTopic, setSelectedTopic] = useState(initTopics ?? (initWordIds ? '__practice__' : null));
  const [label,    setLabel]    = useState(initLabel ?? null);
  const [wordIds,  setWordIds]  = useState(initWordIds);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const [shaking, setShaking] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [finished, setFinished] = useState(false);
  const [timeLeft,  setTimeLeft]  = useState(timeLimit);
  const [timedOut,  setTimedOut]  = useState(false);
  const [lives,     setLives]     = useState(flow === 'quiz-to-done' ? 3 : null);
  const [gameOver,  setGameOver]  = useState(false);

  const failedMatchIdsRef     = useRef(new Set());
  const markUnlearnedDoneRef  = useRef(false);
  const progressRemovedRef    = useRef(false);

  const buildGame = useCallback((sel, ids = null) => {
    const pool = ids && ids.length > 0
      ? shuffle(words.filter((w) => ids.includes(w.id)))
      : Array.isArray(sel)
      ? shuffle(words.filter((w) => sel.includes(w.topic))).slice(0, pairLimit)
      : shuffle(words.filter((w) => w.topic === sel)).slice(0, pairLimit);
    const gameCards = shuffle([
      ...pool.map((w) => ({ id: `en-${w.id}`, wordId: w.id, type: 'en', text: w.en })),
      ...pool.map((w) => ({ id: `tr-${w.id}`, wordId: w.id, type: 'tr', text: w.tr })),
    ]);
    setCards(gameCards);
    setSelected([]);
    setMatched(new Set());
    setShaking(new Set());
    setMoves(0);
    setFinished(false);
    setIsChecking(false);
    setTimeLeft(timeLimit);
    setTimedOut(false);
    setLives(flow === 'quiz-to-done' ? 3 : null);
    setGameOver(false);
    failedMatchIdsRef.current = new Set();
    markUnlearnedDoneRef.current = false;
    progressRemovedRef.current = false;
  }, []);

  useEffect(() => {
    if (initWordIds) buildGame(null, initWordIds);
    else if (initTopics) buildGame(initTopics);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startGame(sel, lbl, ids = null) {
    setSelectedTopic(sel);
    setWordIds(ids);
    setLabel(lbl ?? (Array.isArray(sel) ? sel.join(' · ') : sel));
    buildGame(sel, ids);
  }

  const handleCardClick = useCallback(
    (card) => {
      if (isChecking || matched.has(card.id)) return;
      if (selected.find((s) => s.id === card.id)) return;
      if (selected.length >= 2) return;

      const newSelected = [...selected, card];
      setSelected(newSelected);

      if (newSelected.length === 2) {
        setIsChecking(true);
        setMoves((m) => m + 1);
        const [a, b] = newSelected;

        if (a.wordId === b.wordId && a.type !== b.type) {
          setTimeout(() => {
            setMatched((prev) => {
              const next = new Set(prev);
              next.add(a.id);
              next.add(b.id);
              return next;
            });
            setSelected([]);
            setIsChecking(false);
          }, 400);
        } else {
          setShaking(new Set([a.id, b.id]));
          failedMatchIdsRef.current.add(a.wordId);
          failedMatchIdsRef.current.add(b.wordId);
          if (lives !== null) {
            const newLives = lives - 1;
            setLives(newLives);
            if (newLives === 0) { setTimeout(() => setGameOver(true), 800); }
          }
          setTimeout(() => {
            setSelected([]);
            setShaking(new Set());
            setIsChecking(false);
          }, 650);
        }
      }
    },
    [isChecking, matched, selected]
  );

  useEffect(() => {
    if (timedOut || gameOver || finished || cards.length === 0) return;
    if (timeLeft === 0) { setTimedOut(true); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, timedOut, finished, cards.length]);

  useEffect(() => {
    if (cards.length > 0 && matched.size === cards.length) {
      markDone();
      const t = setTimeout(() => setFinished(true), 500);
      return () => clearTimeout(t);
    }
  }, [matched, cards]);

  // Eşleştirme tamamlandı: quizde doğru ama eşleşmede yanlış yapılanları sil, gerisini koru/yeniden kaydet
  useEffect(() => {
    if (!finished || flow !== 'quiz-to-done' || markUnlearnedDoneRef.current) return;
    markUnlearnedDoneRef.current = true;
    initCorrectWordIds
      .filter((id) => !failedMatchIdsRef.current.has(id))
      .forEach((id) => markLearned(id));
    initCorrectWordIds
      .filter((id) => failedMatchIdsRef.current.has(id))
      .forEach((id) => markUnlearned(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  // Süre doldu veya can bitti: quiz ilerlemesini de geri al
  useEffect(() => {
    if (flow !== 'quiz-to-done') return;
    if (!timedOut && !gameOver) return;
    if (progressRemovedRef.current) return;
    progressRemovedRef.current = true;
    initCorrectWordIds.forEach((id) => markUnlearned(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timedOut, gameOver]);

  if (!selectedTopic) {
    return <TopicSelect onSelect={startGame} />;
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-[#080e1c] flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-[#0d1428] border border-white/[0.07] rounded-3xl p-8 shadow-xl text-center animate-pop-in">
          <div className="text-6xl mb-4">💔</div>
          <h2 className="text-2xl font-bold text-white mb-2">Canların Bitti!</h2>
          <p className="text-gray-400 mb-8">Eşleştirmeyi baştan alman gerekiyor.</p>
          <div className="space-y-3">
            <button
              onClick={() => buildGame(selectedTopic, wordIds)}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 rounded-2xl transition-colors"
            >
              🔄 Tekrar Dene
            </button>
            <button
              onClick={goBack}
              className="w-full bg-white/10 hover:bg-white/15 text-gray-300 font-semibold py-4 rounded-2xl transition-colors"
            >
              Konulara Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div className="min-h-screen bg-[#080e1c] flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-[#0d1428] border border-white/[0.07] rounded-3xl p-8 shadow-xl text-center animate-pop-in">
          <div className="text-6xl mb-4">⏰</div>
          <h2 className="text-2xl font-bold text-white mb-1">Süre Doldu!</h2>
          <p className="text-gray-400 mb-6">{label ?? selectedTopic}</p>
          <div className="bg-[#080e1c] rounded-2xl p-4 mb-8 flex justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-violet-400">{matched.size / 2}</p>
              <p className="text-xs text-gray-500 mt-1">Eşleşti</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-gray-500">{cards.length / 2 - matched.size / 2}</p>
              <p className="text-xs text-gray-500 mt-1">Kalan</p>
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => buildGame(selectedTopic, wordIds)}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 rounded-2xl transition-colors"
            >
              🔄 Tekrar Dene
            </button>
            <button
              onClick={goBack}
              className="w-full bg-white/10 hover:bg-white/15 text-gray-300 font-semibold py-4 rounded-2xl transition-colors"
            >
              Menüye Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    if (flow === 'quiz-to-done') {
      const topicName = typeof selectedTopic === 'string' ? selectedTopic : label;
      const topicTotal = words.filter((w) => w.topic === topicName).length;
      const finalLearnedCount = initCorrectWordIds.filter((id) => !failedMatchIdsRef.current.has(id)).length;
      return (
        <>
          {justStreaked && <StreakCelebration streak={streak} onDone={clearStreak} />}
          <TopicDoneScreen
            topic={label ?? selectedTopic}
            learned={finalLearnedCount}
            total={topicTotal}
            quizScore={quizScore}
            quizTotal={quizTotal}
            matchMoves={moves}
            matchPairs={cards.length / 2}
            onHome={() => navigate('/topics')}
          />
        </>
      );
    }
    return (
      <>
        {justStreaked && <StreakCelebration streak={streak} onDone={clearStreak} />}
        <FinishScreen
        topic={label ?? selectedTopic}
        moves={moves}
        pairs={cards.length / 2}
        onRetry={() => buildGame(selectedTopic, wordIds)}
        onBack={() => navigate('/topics')}
        onHome={goBack}
      />
      </>
    );
  }

  return (
    <GameBoard
      topic={label ?? selectedTopic}
      cards={cards}
      selected={selected}
      matched={matched}
      shaking={shaking}
      moves={moves}
      timeLeft={timeLeft}
      timeLimit={timeLimit}
      lives={lives}
      onCardClick={handleCardClick}
      onExit={goBack}
    />
  );
}
