import Link from "next/link";

export function MinimalHeader({
  mousePosition,
  screenCenter,
}: {
  mousePosition?: { x: number; y: number };
  screenCenter?: { x: number; y: number };
}) {
  const mouseX = mousePosition?.x || 0;
  const mouseY = mousePosition?.y || 0;
  const centerX = screenCenter?.x || 960;
  const centerY = screenCenter?.y || 540;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-6 py-6 sm:px-8 sm:py-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            title="GEO Advisor - AI Visibility Analytics Platform"
            aria-label="GEO Advisor Home"
          >
            <div
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {/* Logo shadow layer */}
              <div
                style={{
                  position: "absolute",
                  left: `${(centerX - mouseX) * 0.05}px`,
                  top: `${(centerY - mouseY) * 0.05}px`,
                  width: "32px",
                  height: "32px",
                  background:
                    "linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)",
                  borderRadius: "12px",
                  filter: "blur(4px)",
                  pointerEvents: "none",
                  zIndex: -1,
                }}
              />
              {/* Text shadow for "GEO Advisor" */}
              <div
                style={{
                  position: "absolute",
                  left: `${48 + (centerX - mouseX) * 0.05}px`,
                  top: `${(centerY - mouseY) * 0.05}px`,
                  display: "none",
                  alignItems: "center",
                  height: "32px",
                  pointerEvents: "none",
                  zIndex: -1,
                }}
                className="sm:flex"
              >
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    letterSpacing: "-0.025em",
                    color: "transparent",
                    textShadow: "0 0 12px rgba(0, 0, 0, 0.8)",
                    filter: "blur(2px)",
                  }}
                >
                  GEO Advisor
                </span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative">
                <span className="text-white font-bold text-sm relative z-10">
                  G
                </span>
              </div>
              <span
                className="text-white font-semibold tracking-tight hidden sm:block relative z-10"
                style={{
                  textShadow: `${(centerX - mouseX) * 0.05}px ${(centerY - mouseY) * 0.05}px 8px rgba(0, 0, 0, 0.7), ${(centerX - mouseX) * 0.05}px ${(centerY - mouseY) * 0.05}px 20px rgba(0, 0, 0, 0.5)`,
                }}
              >
                GEO Advisor
              </span>
            </div>
          </Link>

          {/* Right side actions */}
          <div className="flex items-center gap-6">
            {/* Sign in button */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <div
                style={{
                  position: "absolute",
                  left: `${(centerX - mouseX) * 0.05}px`,
                  top: `${(centerY - mouseY) * 0.05}px`,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                  borderRadius: "12px",
                  pointerEvents: "none",
                  zIndex: -1,
                  filter: "blur(6px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: `${(centerX - mouseX) * 0.05}px`,
                  top: `${(centerY - mouseY) * 0.05}px`,
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(0, 0, 0, 0.7)",
                  borderRadius: "12px",
                  pointerEvents: "none",
                  zIndex: -1,
                  filter: "blur(3px)",
                }}
              />
              {/* Text shadow layer */}
              <div
                style={{
                  position: "absolute",
                  left: `${(centerX - mouseX) * 0.05}px`,
                  top: `${(centerY - mouseY) * 0.05}px`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  zIndex: -1,
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "transparent",
                    textShadow: "0 0 15px rgba(0, 0, 0, 0.9)",
                    filter: "blur(2px)",
                  }}
                >
                  Sign in
                </span>
              </div>
              <div className="relative inline-block p-[2px] rounded-xl bg-gradient-to-r from-purple-500/60 to-pink-500/60">
                <Link
                  href="https://app.geoadvisor.io"
                  title="Sign in to GEO Advisor Dashboard"
                  aria-label="Sign in to your account"
                  className="relative inline-block px-6 py-2 text-sm font-semibold text-white backdrop-blur-lg transition-all rounded-[10px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  Sign in
                </Link>
              </div>
            </div>

            {/* Book Demo button */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <div
                style={{
                  position: "absolute",
                  left: `${(centerX - mouseX) * 0.05}px`,
                  top: `${(centerY - mouseY) * 0.05}px`,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  pointerEvents: "none",
                  zIndex: -1,
                  filter: "blur(6px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: `${(centerX - mouseX) * 0.05}px`,
                  top: `${(centerY - mouseY) * 0.05}px`,
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(0, 0, 0, 0.8)",
                  borderRadius: "12px",
                  pointerEvents: "none",
                  zIndex: -1,
                  filter: "blur(3px)",
                }}
              />
              {/* Text shadow layer */}
              <div
                style={{
                  position: "absolute",
                  left: `${(centerX - mouseX) * 0.05}px`,
                  top: `${(centerY - mouseY) * 0.05}px`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  zIndex: -1,
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "transparent",
                    textShadow: "0 0 18px rgba(0, 0, 0, 1)",
                    filter: "blur(2px)",
                  }}
                >
                  Book Demo
                </span>
              </div>
              <div className="relative inline-block p-[2px] rounded-xl bg-gradient-to-r from-purple-500/70 to-pink-500/70">
                <Link
                  href="https://calendly.com/santalucia/geo"
                  title="Schedule a Demo of GEO Advisor"
                  aria-label="Book a demo"
                  className="relative inline-block px-6 py-2 text-sm font-bold text-white backdrop-blur-lg transition-all rounded-[10px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.15)";
                  }}
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
