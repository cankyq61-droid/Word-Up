import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import words from '../data/words.json';
import { useProgress } from '../hooks/useProgress';
import { TOPIC_META, DEFAULT_META } from '../data/topics';
import ProgressBar from '../components/ProgressBar';

const allTopics = [...new Set(words.map((w) => w.topic))];
const TOPICS_PER_PAGE = 8;

// Chunk topics into pages of 5
const topicPages = [];
for (let i = 0; i < allTopics.length; i += TOPICS_PER_PAGE) {
  topicPages.push(allTopics.slice(i, i + TOPICS_PER_PAGE));
}

// ─────────────────────────────────────────────
// Compact topic row — used only inside the slider
// ─────────────────────────────────────────────
function TopicRow({ topic, total, learned, onClick }) {
  const meta = TOPIC_META[topic] || DEFAULT_META;
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 bg-white rounded-xl px-3 py-2.5 border border-gray-100
                 hover:border-indigo-200 active:scale-[0.98] shadow-sm transition-all duration-150"
    >
      {/* Icon badge */}
      <span className={`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg text-lg ${meta.color}`}>
        {meta.icon}
      </span>

      {/* Name + bar */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-gray-800 truncate pr-1">{topic}</span>
          <span className="text-[11px] font-bold tabular-nums text-gray-400 flex-shrink-0">{pct}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
          <div
            className={`${meta.bar} h-1.5 rounded-full transition-all duration-700 ease-out`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <span className="text-gray-300 text-xs flex-shrink-0">›</span>
    </button>
  );
}

// ─────────────────────────────────────────────
// Dashboard
// ─────────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();
  const { getLearnedCount } = useProgress();

  const [page, setPage] = useState(0);
  const touchStartX = useRef(null);

  const totalWords   = words.length;
  const totalLearned = getLearnedCount(words);
  const progressPct  = totalWords > 0 ? Math.round((totalLearned / totalWords) * 100) : 0;

  // ── Touch swipe ──────────────────────────────
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && page < topicPages.length - 1) setPage((p) => p + 1);
      if (diff < 0 && page > 0)                     setPage((p) => p - 1);
    }
    touchStartX.current = null;
  }

  return (
    // h-[100dvh] = full viewport height, accounts for mobile browser bars
    <div className="h-[100dvh] bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
      <div className="h-full max-w-lg mx-auto px-4 pt-safe flex flex-col pt-7 pb-5">

        {/* ── Header ── */}
        <div className="flex items-center gap-2.5 mb-4 flex-shrink-0">
          <span className="text-2xl">📖</span>
          <div>
            <h1 className="text-[19px] font-extrabold text-gray-900 leading-tight tracking-tight">
              İngilizce Kelimeler
            </h1>
            <p className="text-[11px] text-gray-400">Oxford 3000 · Türkçe</p>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-3 gap-2 mb-3 flex-shrink-0">
          {[
            { label: 'Toplam',    value: totalWords,                  color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Öğrenilen', value: totalLearned,                color: 'text-green-600',  bg: 'bg-green-50'  },
            { label: 'Kalan',     value: totalWords - totalLearned,   color: 'text-orange-500', bg: 'bg-orange-50' },
          ].map(({ label, value, color, bg }) => (
            <div key={label} className={`${bg} rounded-xl py-2.5 text-center`}>
              <p className={`text-2xl font-extrabold tabular-nums leading-none ${color}`}>{value}</p>
              <p className="text-[11px] text-gray-500 font-medium mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Overall progress ── */}
        <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 mb-4 flex-shrink-0">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-600">Genel İlerleme</span>
            <span className="text-xs font-bold text-indigo-600 tabular-nums">{progressPct}%</span>
          </div>
          <ProgressBar value={progressPct} />
        </div>

        {/* ── Topics slider — flex-1 fills remaining space ── */}
        <div className="flex-1 flex flex-col min-h-0 mb-4">

          {/* Section header + controls */}
          <div className="flex items-center justify-between mb-2 flex-shrink-0">
            <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              Konular · {page + 1}/{topicPages.length}
            </h2>

            <div className="flex items-center gap-2">
              {/* Page match button */}
              <button
                onClick={() =>
                  navigate('/match', {
                    state: {
                      topics: topicPages[page],
                      pageLabel: `${page + 1}. Bölüm`,
                    },
                  })
                }
                className="flex items-center gap-1 bg-purple-500 hover:bg-purple-600 active:bg-purple-700
                           text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-colors shadow-sm"
              >
                🎮 Eşleştir
              </button>
              {/* Page quiz button */}
              <button
                onClick={() =>
                  navigate('/quiz', {
                    state: {
                      topics: topicPages[page],
                      pageLabel: `${page + 1}. Bölüm`,
                    },
                  })
                }
                className="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700
                           text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-colors shadow-sm"
              >
                🧠 Test
              </button>

              {/* Prev */}
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-500
                           disabled:opacity-25 hover:bg-gray-50 transition-all text-base leading-none"
              >
                ‹
              </button>

              {/* Dot indicators */}
              <div className="flex gap-1 items-center">
                {topicPages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === page ? 'w-4 h-2 bg-indigo-500' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={() => setPage((p) => Math.min(topicPages.length - 1, p + 1))}
                disabled={page === topicPages.length - 1}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-500
                           disabled:opacity-25 hover:bg-gray-50 transition-all text-base leading-none"
              >
                ›
              </button>
            </div>
          </div>

          {/* Slider track */}
          <div
            className="flex-1 overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex h-full transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {topicPages.map((pageTopics, pageIdx) => (
                <div
                  key={pageIdx}
                  className="w-full flex-shrink-0 flex flex-col justify-between"
                >
                  {pageTopics.map((topic) => {
                    const tw = words.filter((w) => w.topic === topic);
                    return (
                      <TopicRow
                        key={topic}
                        topic={topic}
                        total={tw.length}
                        learned={getLearnedCount(tw)}
                        onClick={() => navigate('/learn', { state: { topic } })}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA buttons ── */}
        <div className="space-y-2 flex-shrink-0">
          <button
            onClick={() => navigate('/learn')}
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white
                       font-bold py-3.5 rounded-2xl transition-colors shadow-lg shadow-indigo-200 text-sm"
          >
            📖 Öğrenmeye Başla
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => navigate('/quiz')}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5
                         rounded-2xl transition-colors shadow-lg shadow-emerald-200 text-sm"
            >
              🧠 Çoktan Seçmeli
            </button>
            <button
              onClick={() => navigate('/match')}
              className="w-full bg-white hover:bg-gray-50 text-indigo-600 font-bold py-3.5
                         rounded-2xl transition-colors shadow-sm border border-indigo-100 text-sm"
            >
              🎮 Eşleştirme
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
