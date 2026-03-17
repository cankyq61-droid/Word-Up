/**
 * Centralized topic metadata.
 * icon  – emoji shown on cards
 * bg    – Tailwind bg class for filled icon badge (used in topic select screens)
 * color – Tailwind classes for soft icon badge (used in TopicCard list)
 * bar   – Tailwind bg class for progress bar fill
 */
export const TOPIC_META = {
  'Aile':              { icon: '👨‍👩‍👧‍👦', bg: 'bg-rose-500',     color: 'bg-rose-100 text-rose-600',       bar: 'bg-rose-400'     },
  'Renkler':           { icon: '🎨',   bg: 'bg-violet-500',  color: 'bg-violet-100 text-violet-600',   bar: 'bg-violet-400'   },
  'Sayılar':           { icon: '🔢',   bg: 'bg-amber-500',   color: 'bg-amber-100 text-amber-600',     bar: 'bg-amber-400'    },
  'Yiyecekler':        { icon: '🍎',   bg: 'bg-green-500',   color: 'bg-green-100 text-green-600',     bar: 'bg-green-400'    },
  'Günlük Fiiller':    { icon: '⚡',   bg: 'bg-blue-500',    color: 'bg-blue-100 text-blue-600',       bar: 'bg-blue-400'     },
  'Ev ve Mobilya':     { icon: '🏠',   bg: 'bg-orange-500',  color: 'bg-orange-100 text-orange-600',   bar: 'bg-orange-400'   },
  'Giyim':             { icon: '👕',   bg: 'bg-pink-500',    color: 'bg-pink-100 text-pink-600',       bar: 'bg-pink-400'     },
  'Vücut':             { icon: '🧍',   bg: 'bg-red-500',     color: 'bg-red-100 text-red-600',         bar: 'bg-red-400'      },
  'Hayvanlar':         { icon: '🐾',   bg: 'bg-lime-600',    color: 'bg-lime-100 text-lime-700',       bar: 'bg-lime-500'     },
  'Doğa ve Hava':      { icon: '🌿',   bg: 'bg-emerald-600', color: 'bg-emerald-100 text-emerald-700', bar: 'bg-emerald-500'  },
  'Ulaşım':            { icon: '🚗',   bg: 'bg-sky-500',     color: 'bg-sky-100 text-sky-600',         bar: 'bg-sky-400'      },
  'Sağlık':            { icon: '🏥',   bg: 'bg-teal-500',    color: 'bg-teal-100 text-teal-600',       bar: 'bg-teal-400'     },
  'Meslekler':         { icon: '💼',   bg: 'bg-slate-500',   color: 'bg-slate-100 text-slate-600',     bar: 'bg-slate-400'    },
  'Okul ve Eğitim':    { icon: '🎓',   bg: 'bg-indigo-500',  color: 'bg-indigo-100 text-indigo-600',   bar: 'bg-indigo-400'   },
  'Spor':              { icon: '⚽',   bg: 'bg-green-600',   color: 'bg-green-100 text-green-700',     bar: 'bg-green-500'    },
  'Duygular':          { icon: '😊',   bg: 'bg-yellow-500',  color: 'bg-yellow-100 text-yellow-700',   bar: 'bg-yellow-400'   },
  'Zaman':             { icon: '⏰',   bg: 'bg-cyan-500',    color: 'bg-cyan-100 text-cyan-600',       bar: 'bg-cyan-400'     },
  'Şehir ve Mekanlar': { icon: '🏙️',  bg: 'bg-gray-600',    color: 'bg-gray-100 text-gray-700',       bar: 'bg-gray-500'     },
  'Alışveriş':         { icon: '🛍️',  bg: 'bg-fuchsia-500', color: 'bg-fuchsia-100 text-fuchsia-600', bar: 'bg-fuchsia-400'  },
  'Teknoloji':         { icon: '💻',   bg: 'bg-blue-600',    color: 'bg-blue-100 text-blue-700',       bar: 'bg-blue-500'     },
};

export const DEFAULT_META = {
  icon: '📚',
  bg: 'bg-indigo-500',
  color: 'bg-indigo-100 text-indigo-600',
  bar: 'bg-indigo-400',
};
