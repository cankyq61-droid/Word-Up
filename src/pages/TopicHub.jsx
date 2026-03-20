import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import words from '../data/words.json';
import { TOPIC_META, DEFAULT_META } from '../data/topics';
import { useProgress } from '../hooks/useProgress';

const MATCH_OPTIONS = [
  { count: 20, time: 90,  label: '1:30' },
  { count: 30, time: 120, label: '2:00' },
  { count: 40, time: 150, label: '2:30' },
  { count: 50, time: 180, label: '3:00' },
];

export default function TopicHub() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const { isLearned, getLearnedCount } = useProgress();

  const topic = location.state?.topic;
  const [showPratik,    setShowPratik]    = useState(false);
  const [showMatchCount, setShowMatchCount] = useState(false);

  if (!topic) { navigate('/topics'); return null; }

  const meta        = TOPIC_META[topic] || DEFAULT_META;
  const topicWords  = words.filter((w) => w.topic === topic);
  const learnedIds  = topicWords.filter((w) => isLearned(w.id)).map((w) => w.id);
  const learnedCount = learnedIds.length;
  const pct         = Math.round((learnedCount / topicWords.length) * 100);

  return (
    <div className="min-h-screen bg-[#080812] flex items-center justify-center px-4 anim-page-in">
      <div className="w-full max-w-sm flex flex-col gap-4">

        {/* Geri */}
        <button
          onClick={() => navigate('/topics')}
          className="self-start flex items-center gap-2 text-sm text-gray-500 hover:text-gray-200 transition-colors"
        >
          ← Konular
        </button>

        {/* Konu kartı */}
        <div className="bg-[#0e0e1a] border border-white/[0.07] rounded-3xl p-6 text-center">
          <span className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl text-3xl ${meta.bg} mb-4`}>
            {meta.icon}
          </span>
          <h1 className="text-xl font-bold text-white mb-1">{topic}</h1>
          <p className="text-sm text-gray-500 mb-4">{topicWords.length} kelime</p>

          {/* Progress */}
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mb-1">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-500 h-1.5 rounded-full transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-xs text-gray-500">{learnedCount} / {topicWords.length} öğrenildi · %{pct}</p>
        </div>

        {/* Konuyu Öğren */}
        <button
          onClick={() => navigate('/learn', { state: { topic } })}
          className="w-full py-4 rounded-2xl font-bold text-base text-white
                     bg-gradient-to-r from-blue-600 to-indigo-500
                     hover:from-blue-500 hover:to-indigo-400
                     active:scale-[0.97] transition-all shadow-[0_0_32px_#3b82f630]"
        >
          📖 Konuyu Öğren
        </button>

        {/* Pratik Yap */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setShowPratik((p) => !p)}
            className="w-full py-4 rounded-2xl font-bold text-sm text-gray-300
                       bg-white/[0.06] border border-white/[0.08]
                       hover:bg-white/[0.10] active:scale-[0.97] transition-all"
          >
            🎯 Pratik Yap {showPratik ? '▲' : '▼'}
          </button>

          {showPratik && (
            learnedCount < 4 ? (
              <p className="text-center text-xs text-gray-600 py-1">
                Pratik için en az 4 kelime öğrenmen gerekiyor ({learnedCount}/4)
              </p>
            ) : showMatchCount ? (
              <div className="flex flex-col gap-2">
                <p className="text-center text-[11px] text-gray-500">Kaç eşleştirme yapmak istersin?</p>
                <div className="grid grid-cols-2 gap-2">
                  {MATCH_OPTIONS.filter((o) => o.count <= learnedCount).map(({ count, time, label }) => (
                    <button
                      key={count}
                      onClick={() => navigate('/match', { state: { wordIds: [...learnedIds].sort(() => Math.random() - 0.5).slice(0, count), topics: topic, pageLabel: topic, timeLimit: time, pairLimit: count, from: 'topic-hub' } })}
                      className="py-3 rounded-2xl font-bold text-sm text-violet-400
                                 bg-violet-500/10 border border-violet-500/20
                                 hover:bg-violet-500/20 active:scale-[0.97] transition-all flex flex-col items-center gap-0.5"
                    >
                      <span>{count} çift</span>
                      <span className="text-[10px] text-violet-600">⏱ {label}</span>
                    </button>
                  ))}
                  {MATCH_OPTIONS.filter((o) => o.count <= learnedCount).length === 0 && (
                    <button
                      onClick={() => navigate('/match', { state: { wordIds: learnedIds, topics: topic, pageLabel: topic, timeLimit: 90, pairLimit: learnedCount, from: 'topic-hub' } })}
                      className="col-span-2 py-3 rounded-2xl font-bold text-sm text-violet-400
                                 bg-violet-500/10 border border-violet-500/20
                                 hover:bg-violet-500/20 active:scale-[0.97] transition-all"
                    >
                      {learnedCount} çift · ⏱ 1:30
                    </button>
                  )}
                </div>
                <button
                  onClick={() => setShowMatchCount(false)}
                  className="text-xs text-gray-600 hover:text-gray-400 py-1 transition-colors"
                >
                  ← Geri
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigate('/quiz', { state: { wordIds: learnedIds, pageLabel: topic, topic, from: 'topic-hub' } })}
                  className="py-3.5 rounded-2xl font-bold text-sm text-emerald-400
                             bg-emerald-500/10 border border-emerald-500/20
                             hover:bg-emerald-500/20 active:scale-[0.97] transition-all"
                >
                  🧠 Test
                </button>
                <button
                  onClick={() => setShowMatchCount(true)}
                  className="py-3.5 rounded-2xl font-bold text-sm text-violet-400
                             bg-violet-500/10 border border-violet-500/20
                             hover:bg-violet-500/20 active:scale-[0.97] transition-all"
                >
                  🎮 Eşleştirme
                </button>
              </div>
            )
          )}
        </div>

      </div>
    </div>
  );
}
