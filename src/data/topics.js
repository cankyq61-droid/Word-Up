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

  // B2 topics
  'Selamlaşma ve Tanışma (B2)': { icon: '👋',   bg: 'bg-cyan-800',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Sayılar (B2)':      { icon: '🔢',   bg: 'bg-amber-800',   color: 'bg-amber-500/20 text-amber-400',     bar: 'bg-amber-400'    },
  'Renkler (B2)':      { icon: '🎨',   bg: 'bg-violet-800',  color: 'bg-violet-500/20 text-violet-400',   bar: 'bg-violet-400'   },
  'Aile (B2)':         { icon: '👨‍👩‍👧‍👦', bg: 'bg-rose-800',     color: 'bg-rose-500/20 text-rose-400',       bar: 'bg-rose-400'     },
  'Vücut (B2)':        { icon: '🧍',   bg: 'bg-red-800',     color: 'bg-red-500/20 text-red-400',         bar: 'bg-red-400'      },
  'Yiyecekler (B2)':   { icon: '🍎',   bg: 'bg-green-800',   color: 'bg-green-500/20 text-green-400',     bar: 'bg-green-400'    },
  'Giyim (B2)':        { icon: '👕',   bg: 'bg-pink-800',    color: 'bg-pink-500/20 text-pink-400',       bar: 'bg-pink-400'     },
  'Ev ve Mobilya (B2)':{ icon: '🏠',   bg: 'bg-orange-800',  color: 'bg-orange-500/20 text-orange-400',   bar: 'bg-orange-400'   },
  'Hayvanlar (B2)':    { icon: '🐾',   bg: 'bg-lime-900',    color: 'bg-lime-500/20 text-lime-400',       bar: 'bg-lime-500'     },
  'Günlük Fiiller (B2)':{ icon: '⚡',  bg: 'bg-blue-800',    color: 'bg-blue-500/20 text-blue-400',       bar: 'bg-blue-400'     },
  'Doğa ve Hava (B2)': { icon: '🌿',   bg: 'bg-emerald-900', color: 'bg-emerald-500/20 text-emerald-400', bar: 'bg-emerald-500'  },
  'Günler, Aylar, Mevsimler (B2)': { icon: '📅', bg: 'bg-sky-900', color: 'bg-sky-500/20 text-sky-400',   bar: 'bg-sky-400'      },
  'Zaman (B2)':        { icon: '⏰',   bg: 'bg-cyan-800',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Ulaşım (B2)':       { icon: '🚗',   bg: 'bg-sky-800',     color: 'bg-sky-500/20 text-sky-400',         bar: 'bg-sky-400'      },
  'Şehir ve Mekanlar (B2)': { icon: '🏙️', bg: 'bg-gray-900', color: 'bg-white/10 text-gray-400',         bar: 'bg-gray-500'     },
  'Alışveriş (B2)':    { icon: '🛍️',  bg: 'bg-fuchsia-800', color: 'bg-fuchsia-500/20 text-fuchsia-400', bar: 'bg-fuchsia-400'  },
  'Meslekler (B2)':    { icon: '💼',   bg: 'bg-slate-800',   color: 'bg-slate-500/20 text-slate-400',     bar: 'bg-slate-400'    },
  'Okul ve Eğitim (B2)':{ icon: '🎓',  bg: 'bg-indigo-800',  color: 'bg-indigo-500/20 text-indigo-400',   bar: 'bg-indigo-400'   },
  'Sağlık (B2)':       { icon: '🏥',   bg: 'bg-teal-800',    color: 'bg-teal-500/20 text-teal-400',       bar: 'bg-teal-400'     },
  'Spor (B2)':         { icon: '⚽',   bg: 'bg-green-900',   color: 'bg-green-600/20 text-green-400',     bar: 'bg-green-500'    },
  'Duygular (B2)':     { icon: '😊',   bg: 'bg-yellow-800',  color: 'bg-yellow-500/20 text-yellow-400',   bar: 'bg-yellow-400'   },
  'Teknoloji (B2)':    { icon: '💻',   bg: 'bg-blue-900',    color: 'bg-blue-600/20 text-blue-400',       bar: 'bg-blue-500'     },

  // B1 topics
  'Selamlaşma ve Tanışma (B1)': { icon: '👋',   bg: 'bg-cyan-700',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Sayılar (B1)':      { icon: '🔢',   bg: 'bg-amber-700',   color: 'bg-amber-500/20 text-amber-400',     bar: 'bg-amber-400'    },
  'Renkler (B1)':      { icon: '🎨',   bg: 'bg-violet-700',  color: 'bg-violet-500/20 text-violet-400',   bar: 'bg-violet-400'   },
  'Aile (B1)':         { icon: '👨‍👩‍👧‍👦', bg: 'bg-rose-700',     color: 'bg-rose-500/20 text-rose-400',       bar: 'bg-rose-400'     },
  'Vücut (B1)':        { icon: '🧍',   bg: 'bg-red-700',     color: 'bg-red-500/20 text-red-400',         bar: 'bg-red-400'      },
  'Yiyecekler (B1)':   { icon: '🍎',   bg: 'bg-green-700',   color: 'bg-green-500/20 text-green-400',     bar: 'bg-green-400'    },
  'Giyim (B1)':        { icon: '👕',   bg: 'bg-pink-700',    color: 'bg-pink-500/20 text-pink-400',       bar: 'bg-pink-400'     },
  'Ev ve Mobilya (B1)':{ icon: '🏠',   bg: 'bg-orange-700',  color: 'bg-orange-500/20 text-orange-400',   bar: 'bg-orange-400'   },
  'Hayvanlar (B1)':    { icon: '🐾',   bg: 'bg-lime-800',    color: 'bg-lime-500/20 text-lime-400',       bar: 'bg-lime-500'     },
  'Günlük Fiiller (B1)':{ icon: '⚡',  bg: 'bg-blue-700',    color: 'bg-blue-500/20 text-blue-400',       bar: 'bg-blue-400'     },
  'Doğa ve Hava (B1)': { icon: '🌿',   bg: 'bg-emerald-800', color: 'bg-emerald-500/20 text-emerald-400', bar: 'bg-emerald-500'  },
  'Günler, Aylar, Mevsimler (B1)': { icon: '📅', bg: 'bg-sky-800', color: 'bg-sky-500/20 text-sky-400',   bar: 'bg-sky-400'      },
  'Zaman (B1)':        { icon: '⏰',   bg: 'bg-cyan-700',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Ulaşım (B1)':       { icon: '🚗',   bg: 'bg-sky-700',     color: 'bg-sky-500/20 text-sky-400',         bar: 'bg-sky-400'      },
  'Şehir ve Mekanlar (B1)': { icon: '🏙️', bg: 'bg-gray-800', color: 'bg-white/10 text-gray-400',         bar: 'bg-gray-500'     },
  'Alışveriş (B1)':    { icon: '🛍️',  bg: 'bg-fuchsia-700', color: 'bg-fuchsia-500/20 text-fuchsia-400', bar: 'bg-fuchsia-400'  },
  'Meslekler (B1)':    { icon: '💼',   bg: 'bg-slate-700',   color: 'bg-slate-500/20 text-slate-400',     bar: 'bg-slate-400'    },
  'Okul ve Eğitim (B1)':{ icon: '🎓',  bg: 'bg-indigo-700',  color: 'bg-indigo-500/20 text-indigo-400',   bar: 'bg-indigo-400'   },
  'Sağlık (B1)':       { icon: '🏥',   bg: 'bg-teal-700',    color: 'bg-teal-500/20 text-teal-400',       bar: 'bg-teal-400'     },
  'Spor (B1)':         { icon: '⚽',   bg: 'bg-green-800',   color: 'bg-green-600/20 text-green-400',     bar: 'bg-green-500'    },
  'Duygular (B1)':     { icon: '😊',   bg: 'bg-yellow-700',  color: 'bg-yellow-500/20 text-yellow-400',   bar: 'bg-yellow-400'   },
  'Teknoloji (B1)':    { icon: '💻',   bg: 'bg-blue-800',    color: 'bg-blue-600/20 text-blue-400',       bar: 'bg-blue-500'     },

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

  // ── İş & Kariyer Dünyası — A1 ─────────────────────────────────────────────
  'İş ve Kariyer':          { icon: '💼', bg: 'bg-amber-500',   color: 'bg-amber-500/20 text-amber-400',     bar: 'bg-amber-400'    },
  'Finans ve Ekonomi':      { icon: '📈', bg: 'bg-emerald-500', color: 'bg-emerald-500/20 text-emerald-400', bar: 'bg-emerald-400'  },
  'Hukuk ve Yargı':         { icon: '⚖️', bg: 'bg-red-500',     color: 'bg-red-500/20 text-red-400',         bar: 'bg-red-400'      },
  'Pazarlama ve Reklam':    { icon: '📣', bg: 'bg-fuchsia-600', color: 'bg-fuchsia-500/20 text-fuchsia-400', bar: 'bg-fuchsia-400'  },
  'İnsan Kaynakları':       { icon: '🤝', bg: 'bg-teal-600',    color: 'bg-teal-500/20 text-teal-400',       bar: 'bg-teal-400'     },

  // ── İş & Kariyer Dünyası — A2 ─────────────────────────────────────────────
  'İş ve Kariyer (A2)':     { icon: '💼', bg: 'bg-amber-600',   color: 'bg-amber-500/20 text-amber-400',     bar: 'bg-amber-400'    },
  'Finans ve Ekonomi (A2)': { icon: '📈', bg: 'bg-emerald-600', color: 'bg-emerald-500/20 text-emerald-400', bar: 'bg-emerald-400'  },
  'Hukuk ve Yargı (A2)':    { icon: '⚖️', bg: 'bg-red-600',     color: 'bg-red-500/20 text-red-400',         bar: 'bg-red-400'      },
  'Pazarlama ve Reklam (A2)':{ icon: '📣', bg: 'bg-fuchsia-700', color: 'bg-fuchsia-500/20 text-fuchsia-400', bar: 'bg-fuchsia-400' },
  'İnsan Kaynakları (A2)':  { icon: '🤝', bg: 'bg-teal-700',    color: 'bg-teal-500/20 text-teal-400',       bar: 'bg-teal-400'     },

  // ── İş & Kariyer Dünyası — B1 ─────────────────────────────────────────────
  'İş ve Kariyer (B1)':     { icon: '💼', bg: 'bg-amber-700',   color: 'bg-amber-500/20 text-amber-400',     bar: 'bg-amber-400'    },
  'Finans ve Ekonomi (B1)': { icon: '📈', bg: 'bg-emerald-700', color: 'bg-emerald-500/20 text-emerald-400', bar: 'bg-emerald-400'  },
  'Hukuk ve Yargı (B1)':    { icon: '⚖️', bg: 'bg-red-700',     color: 'bg-red-500/20 text-red-400',         bar: 'bg-red-400'      },
  'Pazarlama ve Reklam (B1)':{ icon: '📣', bg: 'bg-fuchsia-800', color: 'bg-fuchsia-500/20 text-fuchsia-400', bar: 'bg-fuchsia-400' },
  'İnsan Kaynakları (B1)':  { icon: '🤝', bg: 'bg-teal-800',    color: 'bg-teal-500/20 text-teal-400',       bar: 'bg-teal-400'     },

  // ── İş & Kariyer Dünyası — B2 ─────────────────────────────────────────────
  'İş ve Kariyer (B2)':     { icon: '💼', bg: 'bg-amber-800',   color: 'bg-amber-500/20 text-amber-400',     bar: 'bg-amber-400'    },
  'Finans ve Ekonomi (B2)': { icon: '📈', bg: 'bg-emerald-800', color: 'bg-emerald-500/20 text-emerald-400', bar: 'bg-emerald-400'  },
  'Hukuk ve Yargı (B2)':    { icon: '⚖️', bg: 'bg-red-800',     color: 'bg-red-500/20 text-red-400',         bar: 'bg-red-400'      },
  'Pazarlama ve Reklam (B2)':{ icon: '📣', bg: 'bg-fuchsia-900', color: 'bg-fuchsia-500/20 text-fuchsia-400', bar: 'bg-fuchsia-400' },
  'İnsan Kaynakları (B2)':  { icon: '🤝', bg: 'bg-teal-900',    color: 'bg-teal-500/20 text-teal-400',       bar: 'bg-teal-400'     },

  // ── Modern Yaşam — Medya ve Habercilik ───────────────────────────────────
  'Medya ve Habercilik':         { icon: '📰', bg: 'bg-sky-500',     color: 'bg-sky-500/20 text-sky-400',         bar: 'bg-sky-400'      },
  'Medya ve Habercilik (A2)':    { icon: '📰', bg: 'bg-sky-600',     color: 'bg-sky-500/20 text-sky-400',         bar: 'bg-sky-400'      },
  'Medya ve Habercilik (B1)':    { icon: '📰', bg: 'bg-sky-700',     color: 'bg-sky-500/20 text-sky-400',         bar: 'bg-sky-400'      },
  'Medya ve Habercilik (B2)':    { icon: '📰', bg: 'bg-sky-800',     color: 'bg-sky-500/20 text-sky-400',         bar: 'bg-sky-400'      },

  // ── Modern Yaşam — Çevre ve Sürdürülebilirlik ─────────────────────────────
  'Çevre ve Sürdürülebilirlik':        { icon: '♻️', bg: 'bg-green-500',  color: 'bg-green-500/20 text-green-400',     bar: 'bg-green-400'    },
  'Çevre ve Sürdürülebilirlik (A2)':   { icon: '♻️', bg: 'bg-green-600',  color: 'bg-green-500/20 text-green-400',     bar: 'bg-green-400'    },
  'Çevre ve Sürdürülebilirlik (B1)':   { icon: '♻️', bg: 'bg-green-700',  color: 'bg-green-500/20 text-green-400',     bar: 'bg-green-400'    },
  'Çevre ve Sürdürülebilirlik (B2)':   { icon: '♻️', bg: 'bg-green-800',  color: 'bg-green-500/20 text-green-400',     bar: 'bg-green-400'    },

  // ── Modern Yaşam — Yemek Kültürü ve Mutfak Sanatı ────────────────────────
  'Yemek Kültürü ve Mutfak Sanatı':        { icon: '👨‍🍳', bg: 'bg-orange-500', color: 'bg-orange-500/20 text-orange-400',   bar: 'bg-orange-400'   },
  'Yemek Kültürü ve Mutfak Sanatı (A2)':   { icon: '👨‍🍳', bg: 'bg-orange-600', color: 'bg-orange-500/20 text-orange-400',   bar: 'bg-orange-400'   },
  'Yemek Kültürü ve Mutfak Sanatı (B1)':   { icon: '👨‍🍳', bg: 'bg-orange-700', color: 'bg-orange-500/20 text-orange-400',   bar: 'bg-orange-400'   },
  'Yemek Kültürü ve Mutfak Sanatı (B2)':   { icon: '👨‍🍳', bg: 'bg-orange-800', color: 'bg-orange-500/20 text-orange-400',   bar: 'bg-orange-400'   },

  // ── Modern Yaşam — Seyahat ve Turizm ─────────────────────────────────────
  'Seyahat ve Turizm':        { icon: '✈️', bg: 'bg-cyan-500',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Seyahat ve Turizm (A2)':   { icon: '✈️', bg: 'bg-cyan-600',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Seyahat ve Turizm (B1)':   { icon: '✈️', bg: 'bg-cyan-700',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },
  'Seyahat ve Turizm (B2)':   { icon: '✈️', bg: 'bg-cyan-800',    color: 'bg-cyan-500/20 text-cyan-400',       bar: 'bg-cyan-400'     },

  // ── Modern Yaşam — Hobiler ve Boş Zaman ──────────────────────────────────
  'Hobiler ve Boş Zaman':        { icon: '🎮', bg: 'bg-violet-500', color: 'bg-violet-500/20 text-violet-400',   bar: 'bg-violet-400'   },
  'Hobiler ve Boş Zaman (A2)':   { icon: '🎮', bg: 'bg-violet-600', color: 'bg-violet-500/20 text-violet-400',   bar: 'bg-violet-400'   },
  'Hobiler ve Boş Zaman (B1)':   { icon: '🎮', bg: 'bg-violet-700', color: 'bg-violet-500/20 text-violet-400',   bar: 'bg-violet-400'   },
  'Hobiler ve Boş Zaman (B2)':   { icon: '🎮', bg: 'bg-violet-800', color: 'bg-violet-500/20 text-violet-400',   bar: 'bg-violet-400'   },
};

export const DEFAULT_META = {
  icon: '📚',
  bg: 'bg-indigo-500',
  color: 'bg-indigo-500/20 text-indigo-400',
  bar: 'bg-indigo-400',
};
