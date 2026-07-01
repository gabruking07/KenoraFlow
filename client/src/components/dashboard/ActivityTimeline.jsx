const activities = [
  {
    title: "Broadcast sent successfully",
    time: "2 min ago",
  },
  {
    title: "New Lead received",
    time: "12 min ago",
  },
  {
    title: "AI Automation triggered",
    time: "25 min ago",
  },
  {
    title: "WhatsApp connected",
    time: "1 hour ago",
  },
];

export default function ActivityTimeline() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((item) => (

          <div
            key={item.title}
            className="flex gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-indigo-500" />

            <div>

              <h3 className="font-medium text-white">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400">
                {item.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}