import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import words from '../data/words.json';
import { TOPIC_META, DEFAULT_META } from '../data/topics';

const topics = [...new Set(words.map((w) => w.topic))];

const PAIRS_PER_GAME = 8;

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-lg mx-auto px-4 pt-8 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate('/')}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white shadow-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            ←
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Eşleştirme Oyunu</h1>
            <p className="text-xs text-gray-400">Oynamak için bir konu seç</p>
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
                className="w-full text-left bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-purple-200 hover:shadow-md active:scale-[0.98] transition-all flex items-center gap-4"
              >
                <span
                  className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${meta.bg} text-white shadow-sm`}
                >
                  {meta.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{topic}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{count} çift kart</p>
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
// Finish screen
// ─────────────────────────────────────────────
function FinishScreen({ topic, moves, pairs, onRetry, onBack, onHome }) {
  const rating = moves <= pairs ? '🥇' : moves <= pairs * 1.5 ? '🥈' : '🥉';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-xl text-center animate-pop-in">
        <div className="text-6xl mb-4">{rating}</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Tebrikler!</h2>
        <p className="text-gray-500 mb-6">{topic} · Tüm çiftler eşleştirildi</p>

        <div className="bg-purple-50 rounded-2xl p-5 mb-8">
          <p className="text-5xl font-extrabold text-purple-600 tabular-nums">{moves}</p>
          <p className="text-sm text-purple-400 font-medium mt-1">toplam hamle</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-purple-600 text-white font-bold py-4 rounded-2xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200"
          >
            🔄 Tekrar Oyna
          </button>
          <button
            onClick={onBack}
            className="w-full bg-gray-100 text-gray-700 font-semibold py-4 rounded-2xl hover:bg-gray-200 transition-colors"
          >
            Başka Konu Seç
          </button>
          <button onClick={onHome} className="w-full text-purple-500 font-medium py-3">
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
function GameBoard({ topic, cards, selected, matched, shaking, moves, onCardClick }) {
  const totalPairs = cards.length / 2;
  const matchedPairs = matched.size / 2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-lg mx-auto px-3 pt-6 pb-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 px-1">
          <div>
            <h2 className="font-bold text-gray-800">{topic}</h2>
            <p className="text-xs text-gray-400">
              {matchedPairs} / {totalPairs} eşleşti
            </p>
          </div>
          <div className="flex items-center gap-2 bg-purple-100 text-purple-700 rounded-xl px-4 py-2">
            <span className="text-sm font-bold tabular-nums">{moves}</span>
            <span className="text-xs font-medium">hamle</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-5 overflow-hidden">
          <div
            className="bg-purple-500 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(matchedPairs / totalPairs) * 100}%` }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-4 gap-2">
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
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105 '
                : 'bg-rose-500 text-white shadow-lg shadow-rose-200 scale-105 ';
            } else {
              cardClass += isEN
                ? 'bg-blue-100 text-blue-800 hover:bg-blue-200 active:scale-95 '
                : 'bg-rose-100 text-rose-800 hover:bg-rose-200 active:scale-95 ';
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
            <div className="w-3 h-3 rounded bg-blue-200" />
            <span className="text-xs text-gray-400">İngilizce</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-rose-200" />
            <span className="text-xs text-gray-400">Türkçe</span>
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

  const initTopics = location.state?.topics ?? null;
  const initLabel  = location.state?.pageLabel ?? null;

  const [selectedTopic, setSelectedTopic] = useState(initTopics ?? null);
  const [label, setLabel] = useState(initLabel ?? null);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const [shaking, setShaking] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [finished, setFinished] = useState(false);

  const buildGame = useCallback((sel) => {
    const pool = Array.isArray(sel)
      ? shuffle(words.filter((w) => sel.includes(w.topic))).slice(0, PAIRS_PER_GAME)
      : shuffle(words.filter((w) => w.topic === sel)).slice(0, PAIRS_PER_GAME);
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
  }, []);

  // Auto-start if navigated with topics in state
  useEffect(() => {
    if (initTopics) buildGame(initTopics);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startGame(sel, lbl) {
    setSelectedTopic(sel);
    setLabel(lbl ?? (Array.isArray(sel) ? sel.join(' · ') : sel));
    buildGame(sel);
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
          // ✅ Correct
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
          // ❌ Wrong
          setShaking(new Set([a.id, b.id]));
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

  // Check win condition
  useEffect(() => {
    if (cards.length > 0 && matched.size === cards.length) {
      const t = setTimeout(() => setFinished(true), 500);
      return () => clearTimeout(t);
    }
  }, [matched, cards]);

  if (!selectedTopic) {
    return <TopicSelect onSelect={startGame} />;
  }

  if (finished) {
    return (
      <FinishScreen
        topic={label ?? selectedTopic}
        moves={moves}
        pairs={cards.length / 2}
        onRetry={() => buildGame(selectedTopic)}
        onBack={() => { setSelectedTopic(null); setLabel(null); }}
        onHome={() => navigate('/')}
      />
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
      onCardClick={handleCardClick}
    />
  );
}
