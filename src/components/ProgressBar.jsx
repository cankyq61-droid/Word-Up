export default function ProgressBar({ value, colorClass = 'bg-indigo-500', className = '' }) {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className={`${colorClass} h-2 rounded-full transition-all duration-700 ease-out`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
