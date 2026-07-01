const chats = [
  {
    name: "Rahul Sharma",
    message: "Can you share pricing?",
    time: "2m ago",
  },
  {
    name: "ABC Hospital",
    message: "Need appointment automation",
    time: "10m ago",
  },
  {
    name: "Pizza King",
    message: "Broadcast completed",
    time: "22m ago",
  },
  {
    name: "PowerFit Gym",
    message: "Membership enquiry",
    time: "1h ago",
  },
];

export default function RecentChats() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Recent Conversations
      </h2>

      <div className="space-y-4">

        {chats.map((chat) => (

          <div
            key={chat.name}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4 transition hover:bg-slate-700"
          >

            <div>

              <h3 className="font-semibold text-white">
                {chat.name}
              </h3>

              <p className="text-sm text-slate-400">
                {chat.message}
              </p>

            </div>

            <span className="text-xs text-slate-500">
              {chat.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}