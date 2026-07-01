import {
  MessageSquarePlus,
  Bot,
  Megaphone,
  Users,
} from "lucide-react";

const actions = [
  {
    title: "New Conversation",
    icon: MessageSquarePlus,
    color: "bg-indigo-600",
  },
  {
    title: "Create Automation",
    icon: Bot,
    color: "bg-violet-600",
  },
  {
    title: "Broadcast",
    icon: Megaphone,
    color: "bg-emerald-600",
  },
  {
    title: "Add Contact",
    icon: Users,
    color: "bg-sky-600",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => (
          <button
            key={action.title}
            className="rounded-xl border border-slate-800 bg-slate-800 p-5 transition-all hover:scale-105 hover:border-indigo-500"
          >
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${action.color}`}
            >
              <action.icon size={22} className="text-white" />
            </div>

            <p className="font-semibold text-white">
              {action.title}
            </p>
          </button>
        ))}

      </div>

    </div>
  );
}