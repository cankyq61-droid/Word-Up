import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import words from '../data/words.json';
import { useProgress } from '../hooks/useProgress';
import ProgressBar from '../components/ProgressBar';

export default function Dashboard() {
  const navigate = useNavigate();
  const { getLearnedCount, isLearned } = useProgress();

  const [showPratik, setShowPratik] = useState(false);

  const totalWords    = words.length;
  const totalLearned  = getLearnedCount(words);
  const notLearned    = totalWords - totalLearned;
  const progressPct   = totalWords > 0 ? Math.round((totalLearned / totalWords) * 100) : 0;

  const learnedWords  = words.filter((w) => isLearned(w.id));
  const learnedIds    = learnedWords.map((w) => w.id);

  return (
    <div className="min-h-screen bg-[#080812] flex items-center justify-center px-4">
      <div className="w-full max-w-sm flex flex-col gap-5">

        {/* ── Logo / Title ── */}
        <div className="text-center">
          <div className="text-5xl mb-3">📖</div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">İngilizce Kelimeler</h1>
          <p className="text-sm text-gray-500 mt-1">Oxford 3000 · Türkçe</p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Toplam',        value: totalWords,   color: 'text-cyan-400',    bg: 'bg-cyan-500/10 border border-cyan-500/20'      },
            { label: 'Öğrenilen',     value: totalLearned, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border border-emerald-500/20' },
            { label: 'Öğrenilmeyen',  value: notLearned,   color: 'text-orange-400',  bg: 'bg-orange-500/10 border border-orange-500/20'  },
          ].map(({ label, value, color, bg }) => (
            <div key={label} className={`${bg} rounded-xl py-3 text-center`}>
              <p className={`text-2xl font-extrabold tabular-nums leading-none ${color}`}>{value}</p>
              <p className="text-[10px] text-gray-500 font-medium mt-1 leading-tight">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Progress ── */}
        <div className="bg-[#0e0e1a] rounded-xl px-4 py-3 border border-white/[0.07]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-400">Genel İlerleme</span>
            <span className="text-xs font-bold text-cyan-400 tabular-nums">{progressPct}%</span>
          </div>
          <ProgressBar value={progressPct} colorClass="bg-cyan-500" />
        </div>

        {/* ── CTA ── */}
        <button
          onClick={() => navigate('/topics')}
          className="w-full bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-white
                     font-bold py-4 rounded-2xl transition-colors shadow-[0_0_28px_#22d3ee35] text-base"
        >
          📖 Öğrenmeye Başla
        </button>

        {/* ── Pratik ── */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setShowPratik((p) => !p)}
            className="w-full bg-white/10 hover:bg-white/15 border border-white/[0.07] text-gray-300
                       font-bold py-4 rounded-2xl transition-colors text-base"
          >
            🎯 Pratik Yap
          </button>

          {showPratik && (
            learnedWords.length < 4 ? (
              <p className="text-center text-sm text-gray-500 py-1">
                Pratik için en az 4 kelime öğrenmen gerekiyor. Şu an: {learnedWords.length}
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigate('/quiz', { state: { wordIds: learnedIds, pageLabel: 'Pratik' } })}
                  className="w-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30
                             text-emerald-400 font-bold py-3.5 rounded-2xl transition-colors text-sm"
                >
                  🧠 Test
                </button>
                <button
                  onClick={() => navigate('/match', { state: { wordIds: learnedIds, pageLabel: 'Pratik' } })}
                  className="w-full bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30
                             text-violet-400 font-bold py-3.5 rounded-2xl transition-colors text-sm"
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
