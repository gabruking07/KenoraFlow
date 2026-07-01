import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon,
  color,
  growth,
}) {
  const Icon = icon;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500">

      <div className="flex items-center justify-between">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          <Icon size={26} className="text-white" />
        </div>

        <div className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">

          <ArrowUpRight size={14} />

          {growth}

        </div>

      </div>

      <div className="mt-6">

        <p className="text-slate-400">

          {title}

        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">

          {value}

        </h2>

      </div>

    </div>
  );
}