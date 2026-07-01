import DashboardLayout from "@/layouts/DashboardLayout";
import StatsGrid from "@/components/dashboard/StatsGrid";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import RecentChats from "@/components/dashboard/RecentChats";
import QuickActions from "@/components/dashboard/QuickActions";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";

export default function Dashboard() {
    return (
        <DashboardLayout>

            <div className="space-y-8">

                <div>

                    <h1 className="text-4xl font-bold text-white">

                        Welcome back 👋

                    </h1>

                    <p className="mt-2 text-slate-400">

                        Here's what's happening in your business today.

                    </p>

                </div>

                <StatsGrid />
                <AnalyticsChart />
                <div className="grid gap-6 xl:grid-cols-3">

                    <div className="xl:col-span-2">
                        <RecentChats />
                    </div>

                    <div className="space-y-6">
                        <QuickActions />
                        <ActivityTimeline />
                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
}