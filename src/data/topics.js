/**
 * Centralized topic metadata.
 * icon  – emoji shown on cards
 * bg    – Tailwind bg class for filled icon badge (used in topic select screens)
 * color – Tailwind classes for soft icon badge (used in TopicCard list / TopicRow)
 * bar   – Tailwind bg class for progress bar fill
 */
export const TOPIC_META = {
  'Selamlaşma ve Tanışma': { icon: '👋',   bg: 'bg-cyan-500',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Sayılar':           { icon: '🔢',   bg: 'bg-amber-500',   color: 'bg-amber-500/20 text-amber-400',     bar: 'bg-amber-400'    },
  'Renkler':           { icon: '🎨',   bg: 'bg-violet-500',  color: 'bg-violet-500/20 text-violet-400',   bar: 'bg-violet-400'   },
  'Aile':              { icon: '👨‍👩‍👧‍👦', bg: 'bg-rose-500',     color: 'bg-rose-500/20 text-rose-400',       bar: 'bg-rose-400'     },
  'Vücut':             { icon: '🧍',   bg: 'bg-red-500',     color: 'bg-red-500/20 text-red-400',         bar: 'bg-red-400'      },
  'Yiyecekler':        { icon: '🍎',   bg: 'bg-green-500',   color: 'bg-green-500/20 text-green-400',     bar: 'bg-green-400'    },
  'Giyim':             { icon: '👕',   bg: 'bg-pink-500',    color: 'bg-pink-500/20 text-pink-400',       bar: 'bg-pink-400'     },
  'Ev ve Mobilya':     { icon: '🏠',   bg: 'bg-orange-500',  color: 'bg-orange-500/20 text-orange-400',   bar: 'bg-orange-400'   },
  'Hayvanlar':         { icon: '🐾',   bg: 'bg-lime-600',    color: 'bg-lime-500/20 text-lime-400',       bar: 'bg-lime-500'     },
  'Günlük Fiiller':    { icon: '⚡',   bg: 'bg-blue-500',    color: 'bg-blue-500/20 text-blue-400',       bar: 'bg-blue-400'     },
  'Doğa ve Hava':      { icon: '🌿',   bg: 'bg-emerald-600', color: 'bg-emerald-500/20 text-emerald-400', bar: 'bg-emerald-500'  },
  'Günler, Aylar, Mevsimler': { icon: '📅', bg: 'bg-sky-600', color: 'bg-sky-500/20 text-sky-400',        bar: 'bg-sky-400'      },
  'Zaman':             { icon: '⏰',   bg: 'bg-cyan-500',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Ulaşım':            { icon: '🚗',   bg: 'bg-sky-500',     color: 'bg-sky-500/20 text-sky-400',         bar: 'bg-sky-400'      },
  'Şehir ve Mekanlar': { icon: '🏙️',  bg: 'bg-gray-600',    color: 'bg-white/10 text-gray-400',          bar: 'bg-gray-500'     },
  'Alışveriş':         { icon: '🛍️',  bg: 'bg-fuchsia-500', color: 'bg-fuchsia-500/20 text-fuchsia-400', bar: 'bg-fuchsia-400'  },
  'Meslekler':         { icon: '💼',   bg: 'bg-slate-500',   color: 'bg-slate-500/20 text-slate-400',     bar: 'bg-slate-400'    },
  'Okul ve Eğitim':    { icon: '🎓',   bg: 'bg-indigo-500',  color: 'bg-indigo-500/20 text-indigo-400',   bar: 'bg-indigo-400'   },
  'Sağlık':            { icon: '🏥',   bg: 'bg-teal-500',    color: 'bg-teal-500/20 text-teal-400',       bar: 'bg-teal-400'     },
  'Spor':              { icon: '⚽',   bg: 'bg-green-600',   color: 'bg-green-600/20 text-green-400',     bar: 'bg-green-500'    },
  'Duygular':          { icon: '😊',   bg: 'bg-yellow-500',  color: 'bg-yellow-500/20 text-yellow-400',   bar: 'bg-yellow-400'   },
  'Teknoloji':         { icon: '💻',   bg: 'bg-blue-600',    color: 'bg-blue-600/20 text-blue-400',       bar: 'bg-blue-500'     },

  // A2 topics
  'Selamlaşma ve Tanışma (A2)': { icon: '👋',   bg: 'bg-cyan-600',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Sayılar (A2)':      { icon: '🔢',   bg: 'bg-amber-600',   color: 'bg-amber-500/20 text-amber-400',     bar: 'bg-amber-400'    },
  'Renkler (A2)':      { icon: '🎨',   bg: 'bg-violet-600',  color: 'bg-violet-500/20 text-violet-400',   bar: 'bg-violet-400'   },
  'Aile (A2)':         { icon: '👨‍👩‍👧‍👦', bg: 'bg-rose-600',     color: 'bg-rose-500/20 text-rose-400',       bar: 'bg-rose-400'     },
  'Vücut (A2)':        { icon: '🧍',   bg: 'bg-red-600',     color: 'bg-red-500/20 text-red-400',         bar: 'bg-red-400'      },
  'Yiyecekler (A2)':   { icon: '🍎',   bg: 'bg-green-600',   color: 'bg-green-500/20 text-green-400',     bar: 'bg-green-400'    },
  'Giyim (A2)':        { icon: '👕',   bg: 'bg-pink-600',    color: 'bg-pink-500/20 text-pink-400',       bar: 'bg-pink-400'     },
  'Ev ve Mobilya (A2)':{ icon: '🏠',   bg: 'bg-orange-600',  color: 'bg-orange-500/20 text-orange-400',   bar: 'bg-orange-400'   },
  'Hayvanlar (A2)':    { icon: '🐾',   bg: 'bg-lime-700',    color: 'bg-lime-500/20 text-lime-400',       bar: 'bg-lime-500'     },
  'Günlük Fiiller (A2)':{ icon: '⚡',  bg: 'bg-blue-600',    color: 'bg-blue-500/20 text-blue-400',       bar: 'bg-blue-400'     },
  'Doğa ve Hava (A2)': { icon: '🌿',   bg: 'bg-emerald-700', color: 'bg-emerald-500/20 text-emerald-400', bar: 'bg-emerald-500'  },
  'Günler, Aylar, Mevsimler (A2)': { icon: '📅', bg: 'bg-sky-700', color: 'bg-sky-500/20 text-sky-400',   bar: 'bg-sky-400'      },
  'Zaman (A2)':        { icon: '⏰',   bg: 'bg-cyan-600',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Ulaşım (A2)':       { icon: '🚗',   bg: 'bg-sky-600',     color: 'bg-sky-500/20 text-sky-400',         bar: 'bg-sky-400'      },
  'Şehir ve Mekanlar (A2)': { icon: '🏙️', bg: 'bg-gray-700', color: 'bg-white/10 text-gray-400',         bar: 'bg-gray-500'     },
  'Alışveriş (A2)':    { icon: '🛍️',  bg: 'bg-fuchsia-600', color: 'bg-fuchsia-500/20 text-fuchsia-400', bar: 'bg-fuchsia-400'  },
  'Meslekler (A2)':    { icon: '💼',   bg: 'bg-slate-600',   color: 'bg-slate-500/20 text-slate-400',     bar: 'bg-slate-400'    },
  'Okul ve Eğitim (A2)':{ icon: '🎓',  bg: 'bg-indigo-600',  color: 'bg-indigo-500/20 text-indigo-400',   bar: 'bg-indigo-400'   },
  'Sağlık (A2)':       { icon: '🏥',   bg: 'bg-teal-600',    color: 'bg-teal-500/20 text-teal-400',       bar: 'bg-teal-400'     },
  'Spor (A2)':         { icon: '⚽',   bg: 'bg-green-700',   color: 'bg-green-600/20 text-green-400',     bar: 'bg-green-500'    },
  'Duygular (A2)':     { icon: '😊',   bg: 'bg-yellow-600',  color: 'bg-yellow-500/20 text-yellow-400',   bar: 'bg-yellow-400'   },
  'Teknoloji (A2)':    { icon: '💻',   bg: 'bg-blue-700',    color: 'bg-blue-600/20 text-blue-400',       bar: 'bg-blue-500'     },
};

export const DEFAULT_META = {
  icon: '📚',
  bg: 'bg-indigo-500',
  color: 'bg-indigo-500/20 text-indigo-400',
  bar: 'bg-indigo-400',
};
