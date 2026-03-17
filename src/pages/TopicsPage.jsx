import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import words from '../data/words.json';
import { useProgress } from '../hooks/useProgress';
import { TOPIC_META, DEFAULT_META } from '../data/topics';

const allTopics = [...new Set(words.map((w) => w.topic))];
const TOPICS_PER_PAGE = 7;

const topicPages = [];
for (let i = 0; i < allTopics.length; i += TOPICS_PER_PAGE) {
  topicPages.push(allTopics.slice(i, i + TOPICS_PER_PAGE));
}

function TopicRow({ topic, total, learned, onClick }) {
  const meta = TOPIC_META[topic] || DEFAULT_META;
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 bg-[#0e0e1a] rounded-xl px-3 py-2.5 border border-white/[0.07]
                 hover:border-cyan-500/30 active:scale-[0.98] transition-all duration-150"
    >
      <span className={`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg text-lg ${meta.color}`}>
        {meta.icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-gray-200 truncate pr-1">{topic}</span>
          <span className="text-[11px] font-bold tabular-nums text-gray-500 flex-shrink-0">{pct}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
          <div
            className={`${meta.bar} h-1.5 rounded-full transition-all duration-700 ease-out`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <span className="text-gray-600 text-xs flex-shrink-0">›</span>
    </button>
  );
}

export default function TopicsPage() {
  const navigate = useNavigate();
  const { getLearnedCount } = useProgress();

  const [page, setPage] = useState(0);
  const touchStartX = useRef(null);

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
    <div className="h-[100dvh] bg-[#080812] overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto px-4 pt-safe flex flex-col gap-3
                      h-[min(100dvh,720px)] py-5">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between flex-shrink-0">

          {/* Sol: geri + genel butonlar */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/')}
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 border border-white/[0.07]
                         text-gray-400 hover:text-white transition-colors text-sm"
            >
              ←
            </button>
            <button
              onClick={() => navigate('/quiz', { state: { topics: allTopics, pageLabel: 'Tüm Konular' } })}
              className="flex items-center gap-1 bg-emerald-500/15 hover:bg-emerald-500/25
                         text-emerald-400 text-[11px] font-bold px-2.5 py-1.5 rounded-lg
                         transition-colors border border-emerald-500/25"
            >
              🧠 Genel Quiz
            </button>
            <button
              onClick={() => navigate('/match', { state: { topics: allTopics, pageLabel: 'Tüm Konular' } })}
              className="flex items-center gap-1 bg-violet-500/15 hover:bg-violet-500/25
                         text-violet-400 text-[11px] font-bold px-2.5 py-1.5 rounded-lg
                         transition-colors border border-violet-500/25"
            >
              🎮 Genel
            </button>
          </div>

          {/* Sağ: sayfa navigasyonu */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
              {page + 1}/{topicPages.length}
            </span>
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-gray-400
                         disabled:opacity-25 hover:bg-white/20 transition-all text-base leading-none"
            >
              ‹
            </button>
            <div className="flex gap-1 items-center">
              {topicPages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === page ? 'w-4 h-2 bg-cyan-500' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(topicPages.length - 1, p + 1))}
              disabled={page === topicPages.length - 1}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-gray-400
                         disabled:opacity-25 hover:bg-white/20 transition-all text-base leading-none"
            >
              ›
            </button>
          </div>
        </div>

        {/* ── Sayfa başlığı + bölüm butonları ── */}
        <div className="flex items-center justify-between flex-shrink-0">
          <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            Konular
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/match', { state: { topics: topicPages[page], pageLabel: `${page + 1}. Bölüm` } })}
              className="flex items-center gap-1 bg-violet-500/20 hover:bg-violet-500/30
                         text-violet-400 text-[11px] font-bold px-2.5 py-1.5 rounded-lg
                         transition-colors border border-violet-500/30"
            >
              🎮 Eşleştir
            </button>
            <button
              onClick={() => navigate('/quiz', { state: { topics: topicPages[page], pageLabel: `${page + 1}. Bölüm` } })}
              className="flex items-center gap-1 bg-emerald-500/20 hover:bg-emerald-500/30
                         text-emerald-400 text-[11px] font-bold px-2.5 py-1.5 rounded-lg
                         transition-colors border border-emerald-500/30"
            >
              🧠 Test
            </button>
          </div>
        </div>

        {/* ── Slider ── */}
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
                className="w-full flex-shrink-0 flex flex-col gap-2"
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
    </div>
  );
}
