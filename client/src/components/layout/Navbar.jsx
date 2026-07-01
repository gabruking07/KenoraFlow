import {
    Bell,
    Search,
    Moon,
    Sun,
    Plus,
    ChevronDown,
} from "lucide-react";

import { useState } from "react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-700 bg-slate-900/80 px-8 backdrop-blur-xl">
            <div>

                <h1 className="text-3xl font-bold text-white">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-slate-400">
                    Welcome back 👋 Manage your WhatsApp business from one place.
                </p>

            </div>
            <div className="flex items-center gap-4">
                <div className="relative">

                    <Search
                        className="absolute left-4 top-3 text-slate-400"
                        size={18}
                    />

                    <input
                        placeholder="Search..."
                        className="
w-72
rounded-xl
border
border-slate-700
bg-slate-800
py-2.5
pl-11
pr-4
text-white
outline-none
transition
focus:border-indigo-500
"
                    />

                </div>
                <button
                    className="
flex
items-center
gap-2
rounded-xl
bg-indigo-600
px-4
py-2.5
font-medium
text-white
transition
hover:bg-indigo-500
"
                >

                    <Plus size={18} />
                    New
                </button>
                <button
                    className="
relative
rounded-xl
bg-slate-800
p-3
transition
hover:bg-slate-700
"
                >

                    <Bell
                        size={20}
                        className="text-white"
                    />

                    <span
                        className="
absolute
right-2
top-2
h-2
w-2
rounded-full
bg-red-500
"
                    />
                </button>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="
rounded-xl
bg-slate-800
p-3
transition
hover:bg-slate-700
"
                >

                    {
                        darkMode
                            ?

                            <Moon
                                size={20}
                                className="text-white"
                            />

                            :

                            <Sun
                                size={20}
                                className="text-yellow-400"
                            />

                    }

                </button>

                <div
                    className="
flex
items-center
gap-3
rounded-xl
bg-slate-800
px-3
py-2
"
                >

                    <div
                        className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-indigo-600
font-bold
text-white
"
                    >

                        R

                    </div>

                    <div>

                        <h3 className="font-semibold text-white">

                            Raj Patel

                        </h3>

                        <p className="text-xs text-slate-400">

                            Administrator

                        </p>

                    </div>

                    <ChevronDown
                        size={18}
                        className="text-slate-400"
                    />

                </div>

            </div>

        </header>

    );
}