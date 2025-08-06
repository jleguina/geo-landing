interface SectionSeparatorProps {
  variant?:
    | "gradient"
    | "dots"
    | "waves"
    | "geometric"
    | "glow"
    | "custom"
    | "cool";
}

export function SectionSeparator({ variant = "cool" }: SectionSeparatorProps) {
  if (variant === "gradient") {
    return (
      <div className="relative h-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="relative h-16 bg-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-purple-400 to-brand-blue-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "waves") {
    return (
      <div className="relative h-16 bg-white overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 64"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C300,64 900,0 1200,32 L1200,64 L0,64 Z"
            fill="rgba(139,92,246,0.05)"
          />
          <path
            d="M0,40 C300,8 900,56 1200,24 L1200,64 L0,64 Z"
            fill="rgba(37,99,235,0.05)"
          />
        </svg>
      </div>
    );
  }

  if (variant === "geometric") {
    return (
      <div className="relative h-16 bg-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div
              className="w-8 h-8 border border-brand-purple-300/30 rotate-45 animate-spin"
              style={{ animationDuration: "20s" }}
            />
            <div
              className="absolute inset-1 w-6 h-6 border border-brand-blue-300/30 rotate-45 animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            />
            <div
              className="absolute inset-2 w-4 h-4 border border-neutral-300/50 rotate-45 animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
        </div>
        <div className="absolute left-1/4 top-1/2 w-1 h-1 bg-brand-purple-300/50 rounded-full animate-pulse" />
        <div
          className="absolute right-1/4 top-1/3 w-1 h-1 bg-brand-blue-300/50 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute left-1/3 bottom-1/3 w-1 h-1 bg-neutral-300/70 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    );
  }

  if (variant === "glow") {
    return (
      <div className="relative h-16 bg-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-64 h-px bg-gradient-to-r from-transparent via-brand-purple-300 to-transparent" />
            <div className="absolute inset-0 w-64 h-px bg-gradient-to-r from-transparent via-brand-purple-300 to-transparent blur-sm" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-purple-300 rounded-full blur-sm opacity-50 animate-pulse" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-100/30 to-transparent" />
      </div>
    );
  }

  if (variant === "custom") {
    return (
      <div className="relative h-16 bg-wavy-purple overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-brand-purple-400 animate-pulse"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "cool") {
    return (
      <div className="relative h-16 bg-wavy-purple overflow-hidden">
        {/* Subtle gradient waves without dots */}
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 64"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="wave-gradient-1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.12)" />
                <stop offset="50%" stopColor="rgba(124, 58, 237, 0.18)" />
                <stop offset="100%" stopColor="rgba(109, 40, 217, 0.12)" />
              </linearGradient>
              <linearGradient
                id="wave-gradient-2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.08)" />
                <stop offset="50%" stopColor="rgba(168, 85, 247, 0.12)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.08)" />
              </linearGradient>
            </defs>
            <path
              d="M0,32 C300,16 600,48 900,24 C1050,12 1150,36 1200,28 L1200,64 L0,64 Z"
              fill="url(#wave-gradient-1)"
              className="animate-pulse"
              style={{ animationDuration: "5s" }}
            />
            <path
              d="M0,40 C200,56 400,24 600,40 C800,56 1000,24 1200,36 L1200,64 L0,64 Z"
              fill="url(#wave-gradient-2)"
              className="animate-pulse"
              style={{ animationDuration: "7s", animationDelay: "1.5s" }}
            />
            <path
              d="M0,28 C150,44 350,12 550,28 C750,44 950,12 1200,24 L1200,64 L0,64 Z"
              fill="rgba(124, 58, 237, 0.06)"
              className="animate-pulse"
              style={{ animationDuration: "6s", animationDelay: "0.5s" }}
            />
          </svg>
        </div>

        {/* Subtle floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-brand-purple-300/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 12}%`,
                top: `${40 + (i % 2) * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + (i % 2)}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
}
