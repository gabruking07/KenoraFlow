import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "@/services/api";
import { useAuth } from "@/context/AuthContext";

export default function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data.data, res.data.token);

      navigate("/dashboard");

    } catch {

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-slate-950">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-slate-900 p-8"
      >

        <h1 className="mb-6 text-3xl font-bold text-white">

          Login

        </h1>

        <input
          className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mb-6 w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="w-full rounded-xl bg-indigo-600 p-3 font-semibold text-white"
        >
          Login
        </button>

      </form>

    </div>

  );

}