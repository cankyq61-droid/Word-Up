import { TOPIC_META, DEFAULT_META } from '../data/topics';
import ProgressBar from './ProgressBar';

export default function TopicCard({ topic, total, learned, onClick }) {
  const meta = TOPIC_META[topic] || DEFAULT_META;
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-2xl shadow-sm p-4 border border-gray-100 hover:border-indigo-200 hover:shadow-md active:scale-[0.98] transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`w-11 h-11 flex items-center justify-center rounded-xl text-xl ${meta.color}`}>
          {meta.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 truncate">{topic}</h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {learned} / {total} kelime öğrenildi
          </p>
        </div>
        <span className="text-sm font-bold text-gray-500 tabular-nums">{pct}%</span>
      </div>
      <ProgressBar value={pct} colorClass={meta.bar} />
    </button>
  );
}
