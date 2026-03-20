import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import words from '../data/words.json';
import { useProgress } from '../hooks/useProgress';
import { useStreak } from '../hooks/useStreak';
import { TOPIC_META, DEFAULT_META } from '../data/topics';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PAGE_QUIZ_OPTIONS = [
  { count: 20, time: 60,  label: '1:00' },
  { count: 30, time: 80,  label: '1:20' },
  { count: 40, time: 90,  label: '1:30' },
  { count: 50, time: 120, label: '2:00' },
];

const ALL_QUIZ_OPTIONS = [
  { count: 20, time: 60,  label: '1:00' },
  { count: 30, time: 80,  label: '1:20' },
  { count: 40, time: 90,  label: '1:30' },
  { count: 50, time: 120, label: '2:00' },
  { count: 70, time: 270, label: '4:30' },
];

const PAGE_MATCH_OPTIONS = [
  { count: 20, time: 90,  label: '1:30' },
  { count: 30, time: 120, label: '2:00' },
  { count: 40, time: 150, label: '2:30' },
  { count: 50, time: 180, label: '3:00' },
];

const ALL_MATCH_OPTIONS = [
  { count: 20, time: 90,  label: '1:30' },
  { count: 30, time: 120, label: '2:00' },
  { count: 40, time: 150, label: '2:30' },
  { count: 50, time: 180, label: '3:00' },
  { count: 70, time: 270, label: '4:30' },
];

function levelOrder(topic) {
  if (topic.endsWith('(B2)')) return 3;
  if (topic.endsWith('(B1)')) return 2;
  if (topic.endsWith('(A2)')) return 1;
  return 0; // A1
}

const allTopics = [...new Set(words.map((w) => w.topic))].sort((a, b) => levelOrder(a) - levelOrder(b));
const TOPICS_PER_PAGE = 7;

const topicPages = [];
for (let i = 0; i < allTopics.length; i += TOPICS_PER_PAGE) {
  topicPages.push(allTopics.slice(i, i + TOPICS_PER_PAGE));
}

function TopicRow({ topic, total, learned, onClick, animate }) {
  const meta = TOPIC_META[topic] || DEFAULT_META;
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
  const [displayPct, setDisplayPct] = useState(0);

  useEffect(() => {
    if (!animate) { setDisplayPct(0); return; }
    if (pct === 0) return;
    const duration = 5000;
    const delay = 500;
    const start = Date.now() + delay;
    const frame = () => {
      const t = Math.min(Math.max((Date.now() - start) / duration, 0), 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setDisplayPct(Math.round(ease * pct));
      if (t < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [animate, pct]);

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 bg-[#0d1428] rounded-xl px-3 py-2.5 border border-white/[0.07]
                 hover:border-blue-600/30 active:scale-[0.98] transition-all duration-150"
    >
      <span className={`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg text-lg ${meta.color}`}>
        {meta.icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-gray-200 truncate pr-1">{topic}</span>
          <span className="text-[11px] font-bold tabular-nums text-gray-500 flex-shrink-0">{displayPct}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
          <div
            className={`${meta.bar} h-1.5 rounded-full`}
            style={{
              width: animate ? `${pct}%` : '0%',
              transition: animate ? 'width 5s cubic-bezier(0.22,1,0.36,1) 0.5s' : 'none',
            }}
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
  const { streak, doneToday } = useStreak();
  const totalLearned = getLearnedCount(words);
  const pct   = Math.round((totalLearned / words.length) * 100);
  const score = totalLearned * 10;

  const [page, setPage] = useState(() => {
    const saved = sessionStorage.getItem('topicsPage');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [animate, setAnimate] = useState(false);
  const [showPageQuizCount,  setShowPageQuizCount]  = useState(false);
  const [showPageMatchCount, setShowPageMatchCount] = useState(false);
  const [showAllQuizCount,   setShowAllQuizCount]   = useState(false);
  const [showAllMatchCount,  setShowAllMatchCount]  = useState(false);

  useEffect(() => {
    setAnimate(false);
    setShowPageQuizCount(false);
    setShowPageMatchCount(false);
    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id2);
    });
    return () => cancelAnimationFrame(id1);
  }, [page]);

  function goToPage(p) {
    sessionStorage.setItem('topicsPage', p);
    setPage(p);
  }
  const touchStartX = useRef(null);

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && page < topicPages.length - 1) goToPage(page + 1);
      if (diff < 0 && page > 0)                     goToPage(page - 1);
    }
    touchStartX.current = null;
  }

  return (
    <div className="h-[100dvh] bg-[#080e1c] overflow-hidden flex items-center justify-center anim-page-in">
      <div className="w-full max-w-lg mx-auto px-4 pt-safe flex flex-col gap-3
                      h-[min(100dvh,720px)] pb-0">

        {/* ── Spacer: tüm içeriği aşağı kaydırır ── */}
        <div className="flex-shrink-0 h-10" />

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between flex-shrink-0">

          {/* Sol: geri */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/')}
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 border border-white/[0.07]
                         text-gray-400 hover:text-white transition-colors text-sm"
            >
              ←
            </button>
            {/* Toplam ilerleme */}
            <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-xl px-3 py-1.5">
              <span className="text-xs font-bold text-blue-400 tabular-nums">{pct}%</span>
              <span className="text-[10px] text-gray-500 font-medium">ilerleme</span>
            </div>
            {/* Puan */}
            <div className="flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-2.5 py-1.5">
              <span className="text-xs">⭐</span>
              <span className="text-xs font-bold text-yellow-400 tabular-nums">{score.toLocaleString()}</span>
            </div>
          </div>

          {/* Orta: seri */}
          <div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 rounded-xl px-3 py-1.5">
            <span className="text-base">{doneToday ? '🔥' : '🩶'}</span>
            <span className="text-xs font-bold text-orange-400 tabular-nums">{streak}</span>
            <span className="text-[10px] text-gray-500 font-medium">gün</span>
          </div>

          {/* Sağ: sayfa navigasyonu */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => goToPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-gray-400
                         disabled:opacity-25 hover:bg-white/20 transition-all text-base leading-none"
            >
              ‹
            </button>
            <span className="text-[11px] font-bold text-gray-500 tabular-nums min-w-[2.5rem] text-center">
              {page + 1}/{topicPages.length}
            </span>
            <button
              onClick={() => goToPage(Math.min(topicPages.length - 1, page + 1))}
              disabled={page === topicPages.length - 1}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-gray-400
                         disabled:opacity-25 hover:bg-white/20 transition-all text-base leading-none"
            >
              ›
            </button>
          </div>
        </div>

        {/* ── Sayfa başlığı + bölüm butonları ── */}
        <div className="flex flex-col gap-2 flex-shrink-0">
          <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            Konular
          </h2>
          {showPageQuizCount ? (
            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] text-gray-500 text-center">{page + 1}. Sayfa · Kaç soru?</p>
              <div className="grid grid-cols-4 gap-1.5">
                {PAGE_QUIZ_OPTIONS.map(({ count, time, label }) => {
                  const pool = shuffle(words.filter((w) => topicPages[page].includes(w.topic)));
                  const wordIds = pool.slice(0, Math.min(count, pool.length)).map((w) => w.id);
                  return (
                    <button
                      key={count}
                      onClick={() => navigate('/quiz', { state: { wordIds, pageLabel: `${page + 1}. Bölüm`, timeLimit: time } })}
                      className="py-2.5 rounded-xl font-bold text-xs text-emerald-400
                                 bg-emerald-500/10 border border-emerald-500/20
                                 hover:bg-emerald-500/20 active:scale-[0.97] transition-all flex flex-col items-center gap-0.5"
                    >
                      <span>{Math.min(count, pool.length)}</span>
                      <span className="text-[9px] text-emerald-600">{label}</span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setShowPageQuizCount(false)}
                className="w-full py-2 rounded-xl text-xs text-gray-600 hover:text-gray-400 bg-white/[0.04] transition-colors"
              >
                ← Geri
              </button>
            </div>
          ) : showPageMatchCount ? (
            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] text-gray-500 text-center">{page + 1}. Sayfa · Kaç eşleştirme?</p>
              <div className="grid grid-cols-4 gap-1.5">
                {PAGE_MATCH_OPTIONS.map(({ count, time, label }) => {
                  const pool = shuffle(words.filter((w) => topicPages[page].includes(w.topic)));
                  const wordIds = pool.slice(0, Math.min(count, pool.length)).map((w) => w.id);
                  return (
                    <button
                      key={count}
                      onClick={() => navigate('/match', { state: { wordIds, pageLabel: `${page + 1}. Bölüm`, timeLimit: time, pairLimit: wordIds.length } })}
                      className="py-2.5 rounded-xl font-bold text-xs text-violet-400
                                 bg-violet-500/10 border border-violet-500/20
                                 hover:bg-violet-500/20 active:scale-[0.97] transition-all flex flex-col items-center gap-0.5"
                    >
                      <span>{Math.min(count, pool.length)}</span>
                      <span className="text-[9px] text-violet-600">{label}</span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setShowPageMatchCount(false)}
                className="w-full py-2 rounded-xl text-xs text-gray-600 hover:text-gray-400 bg-white/[0.04] transition-colors"
              >
                ← Geri
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setShowPageMatchCount(true)}
                className="py-3 rounded-2xl font-bold text-xs text-violet-400
                           bg-violet-500/10 border border-violet-500/20
                           hover:bg-violet-500/20 active:scale-[0.97] transition-all"
              >
                🎮 {page + 1}. Sayfanın Rastgele Eşleştirme Oyunu
              </button>
              <button
                onClick={() => setShowPageQuizCount(true)}
                className="py-3 rounded-2xl font-bold text-xs text-emerald-400
                           bg-emerald-500/10 border border-emerald-500/20
                           hover:bg-emerald-500/20 active:scale-[0.97] transition-all"
              >
                🧠 {page + 1}. Sayfanın Rastgele Test Oyunu
              </button>
            </div>
          )}
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
                className="w-full flex-shrink-0 h-full overflow-y-auto flex flex-col gap-2 scrollbar-subtle"
              >
                {pageTopics.map((topic) => {
                  const tw = words.filter((w) => w.topic === topic);
                  return (
                    <TopicRow
                      key={topic}
                      topic={topic}
                      total={tw.length}
                      learned={getLearnedCount(tw)}
                      onClick={() => navigate('/topic-hub', { state: { topic } })}
                      animate={animate}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* ── Alt butonlar ── */}
        <div className="flex flex-col gap-2 flex-shrink-0 pb-safe-area">
          {showAllQuizCount ? (
            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] text-gray-500 text-center">Tüm Konular · Kaç soru?</p>
              <div className="grid grid-cols-5 gap-1.5">
                {ALL_QUIZ_OPTIONS.map(({ count, time, label }) => {
                  const pool = shuffle(words);
                  const wordIds = pool.slice(0, Math.min(count, pool.length)).map((w) => w.id);
                  return (
                    <button
                      key={count}
                      onClick={() => navigate('/quiz', { state: { wordIds, pageLabel: 'Tüm Konular', timeLimit: time } })}
                      className="py-2.5 rounded-xl font-bold text-xs text-emerald-400
                                 bg-emerald-500/10 border border-emerald-500/20
                                 hover:bg-emerald-500/20 active:scale-[0.97] transition-all flex flex-col items-center gap-0.5"
                    >
                      <span>{count}</span>
                      <span className="text-[9px] text-emerald-600">{label}</span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setShowAllQuizCount(false)}
                className="w-full py-2 rounded-xl text-xs text-gray-600 hover:text-gray-400 bg-white/[0.04] transition-colors"
              >
                ← Geri
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAllQuizCount(true)}
              className="w-full py-3.5 rounded-2xl font-bold text-sm text-emerald-400
                         bg-emerald-500/10 border border-emerald-500/20
                         hover:bg-emerald-500/20 active:scale-[0.97] transition-all"
            >
              🧠 Tüm Konuları Kapsayan Quiz
            </button>
          )}
          {showAllMatchCount ? (
            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] text-gray-500 text-center">Tüm Konular · Kaç eşleştirme?</p>
              <div className="grid grid-cols-5 gap-1.5">
                {ALL_MATCH_OPTIONS.map(({ count, time, label }) => {
                  const pool = shuffle(words);
                  const wordIds = pool.slice(0, Math.min(count, pool.length)).map((w) => w.id);
                  return (
                    <button
                      key={count}
                      onClick={() => navigate('/match', { state: { wordIds, pageLabel: 'Tüm Konular', timeLimit: time, pairLimit: count } })}
                      className="py-2.5 rounded-xl font-bold text-xs text-violet-400
                                 bg-violet-500/10 border border-violet-500/20
                                 hover:bg-violet-500/20 active:scale-[0.97] transition-all flex flex-col items-center gap-0.5"
                    >
                      <span>{count}</span>
                      <span className="text-[9px] text-violet-600">{label}</span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setShowAllMatchCount(false)}
                className="w-full py-2 rounded-xl text-xs text-gray-600 hover:text-gray-400 bg-white/[0.04] transition-colors"
              >
                ← Geri
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAllMatchCount(true)}
              className="w-full py-3.5 rounded-2xl font-bold text-sm text-violet-400
                         bg-violet-500/10 border border-violet-500/20
                         hover:bg-violet-500/20 active:scale-[0.97] transition-all"
            >
              🎮 Tüm Konuları Kapsayan Eşleştirme
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
