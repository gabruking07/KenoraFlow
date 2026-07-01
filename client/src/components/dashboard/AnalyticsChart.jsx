import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", messages: 420 },
  { day: "Tue", messages: 680 },
  { day: "Wed", messages: 540 },
  { day: "Thu", messages: 890 },
  { day: "Fri", messages: 740 },
  { day: "Sat", messages: 1200 },
  { day: "Sun", messages: 980 },
];

export default function AnalyticsChart() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6">

        <h2 className="text-xl font-bold text-white">
          Message Analytics
        </h2>

        <p className="text-sm text-slate-400">
          Last 7 Days
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="colorMessages"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#6366F1"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#6366F1"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="day"
              stroke="#94A3B8"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="messages"
              stroke="#6366F1"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorMessages)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}