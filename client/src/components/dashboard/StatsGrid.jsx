import {
  MessageSquare,
  Users,
  Bot,
  Megaphone,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid() {

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Messages"
        value="18,524"
        icon={MessageSquare}
        color="bg-indigo-600"
        growth="+18%"
      />

      <StatCard
        title="Contacts"
        value="4,250"
        icon={Users}
        color="bg-sky-600"
        growth="+11%"
      />

      <StatCard
        title="AI Replies"
        value="98%"
        icon={Bot}
        color="bg-violet-600"
        growth="+24%"
      />

      <StatCard
        title="Broadcasts"
        value="58"
        icon={Megaphone}
        color="bg-emerald-600"
        growth="+6%"
      />

    </div>

  );

}