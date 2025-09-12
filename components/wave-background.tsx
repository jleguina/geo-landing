export function WaveBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bg-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.03)" />
            <stop offset="50%" stopColor="rgba(124, 58, 237, 0.05)" />
            <stop offset="100%" stopColor="rgba(109, 40, 217, 0.03)" />
          </linearGradient>
          <linearGradient id="bg-wave-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.02)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.04)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.02)" />
          </linearGradient>
          <linearGradient id="bg-wave-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(37, 99, 235, 0.02)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.03)" />
            <stop offset="100%" stopColor="rgba(37, 99, 235, 0.02)" />
          </linearGradient>
        </defs>

        {/* Large background waves */}
        <path
          d="M0,200 C200,100 400,300 600,200 C800,100 1000,300 1200,200 L1200,800 L0,800 Z"
          fill="url(#bg-wave-1)"
          className="animate-pulse"
          style={{ animationDuration: "20s" }}
        />
        <path
          d="M0,400 C300,300 600,500 900,400 C1050,350 1150,450 1200,400 L1200,800 L0,800 Z"
          fill="url(#bg-wave-2)"
          className="animate-pulse"
          style={{ animationDuration: "25s", animationDelay: "5s" }}
        />
        <path
          d="M0,600 C400,700 800,500 1200,600 L1200,800 L0,800 Z"
          fill="url(#bg-wave-3)"
          className="animate-pulse"
          style={{ animationDuration: "30s", animationDelay: "10s" }}
        />

        {/* Additional flowing waves across the page */}
        <path
          d="M0,100 C300,50 600,150 900,100 C1050,75 1150,125 1200,100"
          fill="none"
          stroke="rgba(139, 92, 246, 0.05)"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDuration: "15s" }}
        />
        <path
          d="M0,300 C400,250 800,350 1200,300"
          fill="none"
          stroke="rgba(168, 85, 247, 0.04)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDuration: "18s", animationDelay: "3s" }}
        />
        <path
          d="M0,500 C200,450 400,550 600,500 C800,450 1000,550 1200,500"
          fill="none"
          stroke="rgba(59, 130, 246, 0.03)"
          strokeWidth="1.5"
          className="animate-pulse"
          style={{ animationDuration: "22s", animationDelay: "7s" }}
        />
      </svg>

      {/* Floating particles throughout */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-purple-300/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
