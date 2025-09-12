"use client";

import { useState } from "react";

export function MinimalHero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Subtle badge - increased contrast */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-medium text-purple-200 bg-purple-900/40 border border-purple-500/30 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          AI Search Intelligence Platform
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90">
            Track Your Brand
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
            Across AI Search
          </span>
        </h1>

        {/* Subheading */}
        <p className="mb-12 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Monitor and optimize your visibility across ChatGPT, Claude,
          Perplexity, and Gemini. Join the waitlist for early access.
        </p>

        {/* Waitlist form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 text-white bg-black/40 border border-white/20 rounded-lg backdrop-blur-sm placeholder:text-gray-400 focus:outline-none focus:border-purple-400/60 focus:bg-black/60 transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-8 py-4 font-semibold text-black bg-gradient-to-r from-white to-purple-100 rounded-lg hover:from-purple-100 hover:to-white focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            {status === "loading"
              ? "Joining..."
              : status === "success"
                ? "You're in!"
                : "Join Waitlist"}
          </button>
        </form>

        {/* Trust indicators - better contrast */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Enterprise-grade security</span>
          </div>
        </div>

        {/* Platform logos - more visible */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="mb-6 text-xs uppercase tracking-wider text-gray-500">
            Monitoring All Major AI Platforms
          </p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-sm font-semibold text-gray-300">ChatGPT</div>
            <div className="text-sm font-semibold text-gray-300">Claude</div>
            <div className="text-sm font-semibold text-gray-300">
              Perplexity
            </div>
            <div className="text-sm font-semibold text-gray-300">Gemini</div>
            <div className="text-sm font-semibold text-gray-300">Grok</div>
          </div>
        </div>
      </div>
    </div>
  );
}
