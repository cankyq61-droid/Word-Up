import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import words from '../data/words.json';
import { useProgress } from '../hooks/useProgress';
import { useStreak } from '../hooks/useStreak';

const TOTAL    = words.length;
const HOLD_MS  = 2400;
const LEAVE_MS = 700;
const INIT_SIZE = 112;   // w-28 = 112px

export default function Dashboard() {
  const navigate = useNavigate();
  const { getLearnedCount, isLearned, resetAll } = useProgress();
  const [phase, setPhase]           = useState('splash');   // splash | settling | done
  const [showPratik, setShowPratik] = useState(false);
  const [showQuizCount,  setShowQuizCount]  = useState(false);
  const [showMatchCount, setShowMatchCount] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [overlayPos, setOverlayPos] = useState(null);

  const QUIZ_OPTIONS = [
    { count: 20, time: 60,  label: '1:00' },
    { count: 30, time: 80,  label: '1:20' },
    { count: 40, time: 90,  label: '1:30' },
    { count: 50, time: 120, label: '2:00' },
  ];

  const MATCH_OPTIONS = [
    { count: 20, time: 90,  label: '1:30' },
    { count: 30, time: 120, label: '2:00' },
    { count: 40, time: 150, label: '2:30' },
    { count: 50, time: 180, label: '3:00' },
  ];
  const dashLogoRef = useRef(null);

  const { streak, doneToday } = useStreak();

  const totalLearned = getLearnedCount(words);
  const pct          = Math.round((totalLearned / TOTAL) * 100);
  const learnedWords = words.filter((w) => isLearned(w.id));
  const learnedIds   = learnedWords.map((w) => w.id);

  const greeting =
    pct === 0   ? 'Hadi başlayalım! 🚀'
    : pct < 25  ? 'İyi gidiyorsun, devam et! 💪'
    : pct < 50  ? 'Harika ilerleme! 🔥'
    : pct < 75  ? 'Yarıyı geçtin, süpersin! ⚡'
    : pct < 100 ? 'Neredeyse bitti, son atılım! 🏆'
    :             'Tüm kelimeleri öğrendin! 🎉';

  // Sayı animasyonu: 0'dan hedefe
  const [counts, setCounts] = useState({ pct: 0, learned: 0, remaining: 0, streak: 0, total: 0, score: 0 });

  useEffect(() => {
    if (phase !== 'done') return;
    const targets = { pct, learned: totalLearned, remaining: TOTAL - totalLearned, streak, total: TOTAL, score: totalLearned * 10 };
    const duration = 3000;
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCounts({
        pct:       Math.round(ease * targets.pct),
        learned:   Math.round(ease * targets.learned),
        remaining: Math.round(ease * targets.remaining),
        streak:    Math.round(ease * targets.streak),
        total:     Math.round(ease * targets.total),
        score:     Math.round(ease * targets.score),
      });
      if (t < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [phase]);

  useEffect(() => {
    // Place overlay logo at screen center immediately
    setOverlayPos({
      top:  window.innerHeight / 2 - INIT_SIZE / 2,
      left: window.innerWidth  / 2 - INIT_SIZE / 2,
      size: INIT_SIZE,
    });

    const t1 = setTimeout(() => {
      // Measure where the dashboard logo lives (layout visible even under `invisible`)
      const rect = dashLogoRef.current.getBoundingClientRect();
      setOverlayPos({ top: rect.top, left: rect.left, size: rect.width });
      setPhase('settling');
    }, HOLD_MS);

    const t2 = setTimeout(() => setPhase('done'), HOLD_MS + LEAVE_MS + 50);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Derived values from current overlay size
  const bigLogo    = overlayPos && overlayPos.size > 90;
  const logoRadius = bigLogo ? '2rem' : '1.4rem';
  const logoFont   = bigLogo ? '3rem' : '2.25rem';

  return (
    <div className={`min-h-screen bg-[#080e1c] relative ${phase !== 'done' ? 'overflow-hidden' : ''}`}>

      {/* ── Fixed overlay logo — transitions from center to dashboard position ── */}
      {phase !== 'done' && overlayPos && (
        <div
          className={`fixed z-50 flex items-center justify-center
                      bg-gradient-to-br from-blue-600 to-indigo-600
                      shadow-[0_0_60px_#3b82f655]
                      ${phase === 'splash' ? 'anim-splash-logo' : ''}`}
          style={{
            top:          overlayPos.top,
            left:         overlayPos.left,
            width:        overlayPos.size,
            height:       overlayPos.size,
            borderRadius: logoRadius,
            transition:   `top ${LEAVE_MS}ms cubic-bezier(.22,1,.36,1),
                           left ${LEAVE_MS}ms cubic-bezier(.22,1,.36,1),
                           width ${LEAVE_MS}ms cubic-bezier(.22,1,.36,1),
                           height ${LEAVE_MS}ms cubic-bezier(.22,1,.36,1),
                           border-radius ${LEAVE_MS}ms ease`,
          }}
        >
          <span
            style={{
              fontFamily:    'Georgia, serif',
              letterSpacing: '-2px',
              fontSize:      logoFont,
              fontWeight:    900,
              color:         'white',
              userSelect:    'none',
              transition:    `font-size ${LEAVE_MS}ms ease`,
            }}
          >
            Aa
          </span>
        </div>
      )}

      {/* ── Splash background: ring + texts (no logo here) ── */}
      {phase !== 'done' && (
        <div
          className={`absolute inset-0 z-40 flex flex-col items-center justify-center
                      ${phase === 'settling' ? 'anim-screen-out' : ''}`}
        >
          <div className="mb-7 w-28 h-28" /> {/* logo placeholder for spacing */}
        </div>
      )}

      {/* ── Dashboard (invisible during splash so getBoundingClientRect works) ── */}
      <div className={`min-h-screen flex flex-col items-center justify-center px-5 pt-safe-area pb-safe-area
                       ${phase === 'done' ? '' : 'invisible'}`}>
        <div className="w-full max-w-sm flex flex-col gap-6">

          {/* Logo placeholder + title */}
          <div className="text-center">
            {/* Logo: hidden during splash/settling, fades in when done */}
            <div
              ref={dashLogoRef}
              className={`w-20 h-20 mx-auto mb-4 rounded-[1.4rem] flex items-center justify-center
                          bg-gradient-to-br from-blue-600 to-indigo-600
                          shadow-[0_0_36px_#3b82f635]
                          ${phase === 'done' ? 'anim-logo-settle' : 'opacity-0'}`}
            >
              <span className="text-4xl font-black text-white select-none"
                    style={{ fontFamily: 'Georgia, serif', letterSpacing: '-2px' }}>
                Aa
              </span>
            </div>

            <h1 className={`text-2xl font-extrabold tracking-tight
                            ${phase === 'done' ? 'anim-in-1' : 'opacity-0'}`}>
              <span className="text-white">Word</span><span className="text-blue-500"> Up</span>
            </h1>
            <p className={`text-gray-500 mt-1 text-sm
                           ${phase === 'done' ? 'anim-in-2' : 'opacity-0'}`}>
              İngilizcede günlük kullanılan kelimeleri öğrenmeye başla!
            </p>
            <p className={`text-gray-400 mt-0.5 text-xs
                           ${phase === 'done' ? 'anim-in-2' : 'opacity-0'}`}>
              Kelime bilgini geliştir.
            </p>
          </div>

          {/* İlerleme kartı */}
          <div className={`bg-[#0d1428] border border-white/[0.07] rounded-2xl p-5
                           ${phase === 'done' ? 'anim-in-2' : 'opacity-0'}`}>
            <div className="flex items-end justify-between mb-3">
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-0.5">
                  Toplam İlerleme
                </p>
                <p className="text-sm text-gray-400">{greeting}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-3xl font-extrabold text-blue-500 tabular-nums leading-none">
                  {counts.pct}<span className="text-lg text-gray-600">%</span>
                </span>
                <span className="text-xs font-bold text-yellow-400 tabular-nums">
                  ⭐ {counts.score.toLocaleString()} puan
                </span>
              </div>
            </div>

            <div className="w-full bg-white/[0.06] rounded-full h-2 overflow-hidden mb-4">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-700"
                style={{ width: `${counts.pct}%` }}
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Toplam',    value: counts.total,     color: 'text-gray-300'   },
                { label: 'Öğrenilen', value: counts.learned,   color: 'text-emerald-400' },
                { label: 'Kalan',     value: counts.remaining, color: 'text-orange-400'  },
              ].map(({ label, value, color }) => (
                <div key={label} className="text-center">
                  <p className={`text-xl font-extrabold tabular-nums ${color}`}>{value}</p>
                  <p className="text-[10px] text-gray-600 font-medium mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Streak */}
            <div className="mt-3 pt-3 border-t border-white/[0.07] text-center">
              <span className="text-xl">{doneToday ? '🔥' : '🩶'}</span>
              <p className="text-sm font-bold text-orange-400 leading-tight mt-0.5">
                {counts.streak} günlük seri
              </p>
              <p className="text-[10px] text-gray-600 mt-0.5">
                {doneToday ? 'Bugün tamamlandı' : 'Bugün henüz pratik yapmadın'}
              </p>
            </div>
          </div>

          {/* Ana buton */}
          <button
            onClick={() => navigate('/topics')}
            className={`w-full py-4 rounded-2xl font-bold text-base text-white
                       bg-gradient-to-r from-blue-600 to-indigo-500
                       hover:from-blue-500 hover:to-indigo-400
                       active:scale-[0.97] transition-all
                       shadow-[0_0_32px_#3b82f630]
                       ${phase === 'done' ? 'anim-in-3' : 'opacity-0'}`}
          >
            Öğrenmeye Başla →
          </button>

          {/* Pratik */}
          <div className={`flex flex-col gap-2 ${phase === 'done' ? 'anim-in-4' : 'opacity-0'}`}>
            <button
              onClick={() => { setShowPratik((p) => !p); setShowQuizCount(false); setShowMatchCount(false); }}
              className="w-full py-3.5 rounded-2xl font-bold text-sm text-gray-300
                         bg-white/[0.06] border border-white/[0.08]
                         hover:bg-white/[0.10] active:scale-[0.97] transition-all"
            >
              🎯 Pratik Yap
            </button>

            {showPratik && (
              learnedWords.length < 4 ? (
                <p className="text-center text-xs text-gray-600 py-1">
                  Pratik için en az 4 kelime öğrenmen gerekiyor ({learnedWords.length}/4)
                </p>
              ) : showQuizCount ? (
                <div className="flex flex-col gap-2">
                  <p className="text-center text-[11px] text-gray-500">Kaç soru çözmek istersin?</p>
                  <div className="grid grid-cols-2 gap-2">
                    {QUIZ_OPTIONS.map(({ count, time, label }) => {
                      const actual = Math.min(count, learnedIds.length);
                      const shuffled = [...learnedIds].sort(() => Math.random() - 0.5).slice(0, actual);
                      return (
                        <button
                          key={count}
                          onClick={() => navigate('/quiz', { state: { wordIds: shuffled, pageLabel: 'Pratik', timeLimit: time } })}
                          className="py-3 rounded-2xl font-bold text-sm text-emerald-400
                                     bg-emerald-500/10 border border-emerald-500/20
                                     hover:bg-emerald-500/20 active:scale-[0.97] transition-all flex flex-col items-center gap-0.5"
                        >
                          <span>{actual} soru</span>
                          <span className="text-[10px] text-emerald-600 font-medium">⏱ {label}</span>
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => setShowQuizCount(false)}
                    className="text-xs text-gray-600 hover:text-gray-400 py-1 transition-colors"
                  >
                    ← Geri
                  </button>
                </div>
              ) : showMatchCount ? (
                <div className="flex flex-col gap-2">
                  <p className="text-center text-[11px] text-gray-500">Kaç eşleştirme yapmak istersin?</p>
                  <div className="grid grid-cols-2 gap-2">
                    {MATCH_OPTIONS.map(({ count, time, label }) => {
                      const actual = Math.min(count, learnedIds.length);
                      const shuffled = [...learnedIds].sort(() => Math.random() - 0.5).slice(0, actual);
                      return (
                        <button
                          key={count}
                          onClick={() => navigate('/match', { state: { wordIds: shuffled, pageLabel: 'Pratik', timeLimit: time, pairLimit: actual } })}
                          className="py-3 rounded-2xl font-bold text-sm text-violet-400
                                     bg-violet-500/10 border border-violet-500/20
                                     hover:bg-violet-500/20 active:scale-[0.97] transition-all flex flex-col items-center gap-0.5"
                        >
                          <span>{actual} çift</span>
                          <span className="text-[10px] text-violet-600 font-medium">⏱ {label}</span>
                        </button>
                      );
                    })}
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
                    onClick={() => setShowQuizCount(true)}
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

          {/* İlerlemeyi Sıfırla */}
          <div className={`${phase === 'done' ? 'anim-in-4' : 'opacity-0'}`}>
            {!showResetConfirm ? (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="w-full py-2 rounded-xl text-xs text-gray-600
                           hover:text-red-400 active:scale-[0.97] transition-all"
              >
                İlerlemeyi Sıfırla
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => { resetAll(); setCounts({ pct: 0, learned: 0, remaining: 0, streak: 0, total: 0, score: 0 }); setShowResetConfirm(false); }}
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold text-red-400
                             bg-red-500/10 border border-red-500/20
                             hover:bg-red-500/20 active:scale-[0.97] transition-all"
                >
                  Evet, Sıfırla
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold text-gray-400
                             bg-white/[0.06] border border-white/[0.08]
                             hover:bg-white/10 active:scale-[0.97] transition-all"
                >
                  Vazgeç
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
