import { NavLink } from "react-router-dom";

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
    LayoutDashboard,
    MessageSquare,
    Users,
    Bot,
    Megaphone,
    FileText,
    BarChart3,
    Building2,
    Settings,
    UserCircle,
    LogOut,
    Moon,
} from "lucide-react";

const menuItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
        badge: null,
    },
    {
        title: "Inbox",
        url: "/conversations",
        icon: MessageSquare,
        badge: 12,
    },
    {
        title: "Contacts",
        url: "/contacts",
        icon: Users,
        badge: null,
    },
    {
        title: "Automation",
        url: "/automation",
        icon: Bot,
        badge: "AI",
    },
    {
        title: "Broadcast",
        url: "/broadcast",
        icon: Megaphone,
        badge: null,
    },
    {
        title: "Templates",
        url: "/templates",
        icon: FileText,
        badge: null,
    },
    {
        title: "Analytics",
        url: "/analytics",
        icon: BarChart3,
        badge: null,
    },
    {
        title: "Businesses",
        url: "/businesses",
        icon: Building2,
        badge: null,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
        badge: null,
    },
];

export default function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="border-b border-border">
                <div className="flex items-center gap-3 px-2 py-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-xl font-bold text-white shadow-xl">
                        KF
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold tracking-tight">
                            KenoraFlow
                        </h2>

                        <p className="text-xs text-muted-foreground">
                            Business Automation
                        </p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent>

                <SidebarGroup>

                    <SidebarGroupContent>

                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>

                                        <NavLink
                                            to={item.url}
                                            className={({ isActive }) =>
                                                `
relative
flex
items-center
justify-between
rounded-xl
px-3
py-3
transition-all
duration-300

${isActive
                                                    ? "bg-indigo-600 text-white shadow-lg"
                                                    : "hover:bg-slate-800 hover:text-white"
                                                }
`
                                            }
                                        >
                                            <div className="flex items-center gap-3">

                                                <item.icon size={20} />

                                                <span>{item.title}</span>

                                            </div>

                                            {item.badge && (
                                                <div
                                                    className=" rounded-full bg-indigo-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                                                    {item.badge}
                                                </div>
                                            )}

                                        </NavLink>

                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>

                    </SidebarGroupContent>

                </SidebarGroup>

            </SidebarContent>
            <div className="mx-3 mt-auto rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-5 text-white">

                <h3 className="text-lg font-bold">

                    Upgrade to Pro

                </h3>

                <p className="mt-2 text-sm opacity-80">

                    Unlock AI Automation,
                    Broadcast,
                    Team Members
                    and Premium Analytics.

                </p>

                <button
                    className="
        mt-4
        w-full
        rounded-xl
        bg-white
        py-2
        font-semibold
        text-indigo-700
        transition
        hover:scale-105
        "
                >
                    Upgrade
                </button>

            </div>
            <SidebarFooter className="border-t border-border p-3">

                <div className="space-y-2">

                    <button
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2 hover:bg-muted transition"
                    >
                        <UserCircle size={20} />

                        <div className="flex flex-col text-left">
                            <span className="text-sm font-semibold">
                                Raj Patel
                            </span>

                            <span className="text-xs text-muted-foreground">
                                KenoraTech
                            </span>
                        </div>

                    </button>

                    <button
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2 hover:bg-muted transition"
                    >
                        <Moon size={20} />

                        <span>Dark Mode</span>

                    </button>

                    <button
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-red-500 hover:bg-red-500/10 transition"
                    >
                        <LogOut size={20} />

                        <span>Logout</span>

                    </button>

                </div>

            </SidebarFooter>
        </Sidebar>
    );
}