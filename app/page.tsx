"use client";

import { MinimalHeader } from "@/components/minimal-header";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [screenCenter, setScreenCenter] = useState({ x: 960, y: 540 });

  // Performance settings
  const isLowPerformance =
    typeof window !== "undefined" &&
    (navigator.hardwareConcurrency <= 4 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ));

  useEffect(() => {
    setScreenCenter({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    let frameId: number;
    let lastX = 0,
      lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        if (
          Math.abs(e.clientX - lastX) > 5 ||
          Math.abs(e.clientY - lastY) > 5
        ) {
          setMousePosition({ x: e.clientX, y: e.clientY });
          lastX = e.clientX;
          lastY = e.clientY;
        }
        frameId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        cursor: "none",
      }}
    >
      {/* Custom circular cursor */}
      <div
        style={{
          position: "fixed",
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "5px solid rgba(255, 255, 255, 0.5)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* SVG for texture and 3D text */}
      <svg
        className="texture-filter"
        style={{
          position: "absolute",
          left: "-50px",
          top: "-50px",
          width: "calc(100% + 100px)",
          height: "calc(100% + 100px)",
          pointerEvents: "none",
          willChange: isLowPerformance ? "auto" : "transform",
          overflow: "visible",
        }}
      >
        <defs>
          <filter id="advanced-texture">
            <feTurbulence
              result="noise"
              numOctaves={isLowPerformance ? 2 : 3}
              baseFrequency={0.5}
              type="fractalNoise"
            />
            <feSpecularLighting
              result="ambientLight"
              lightingColor="#9333ea"
              specularExponent={300}
              specularConstant={0.1}
              surfaceScale={0.5}
              in="noise"
            >
              <feDistantLight azimuth={45} elevation={60} />
            </feSpecularLighting>
            <feSpecularLighting
              result="spotLight"
              lightingColor="#1a0033"
              specularExponent={3}
              specularConstant={12}
              surfaceScale={50}
              in="noise"
            >
              <feSpotLight
                // x={mousePosition.x}
                // y={mousePosition.y}
                x={10}
                y={10}
                z={100}
                pointsAtX={screenCenter.x}
                pointsAtY={screenCenter.y}
                pointsAtZ={0}
                specularExponent={15}
                limitingConeAngle={25}
              />
            </feSpecularLighting>
            <feComposite
              operator="arithmetic"
              k1="0"
              k2="0.1"
              k3="6"
              k4="0"
              in="ambientLight"
              in2="spotLight"
              result="combinedLight"
            />
            <feComposite
              result="litNoise"
              operator="in"
              in2="SourceGraphic"
              in="combinedLight"
            />
            <feBlend mode="overlay" in2="litNoise" in="SourceGraphic" />
          </filter>

          <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset
              dx={`${(screenCenter.x - mousePosition.x) * 0.05}`}
              dy={`${(screenCenter.y - mousePosition.y) * 0.05}`}
              result="offsetBlur"
            />
            <feFlood floodColor="black" floodOpacity="0.7" />
            <feComposite in2="offsetBlur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Filter with glow for better readability */}
          <filter id="textGlow" x="-200%" y="-300%" width="500%" height="600%">
            {/* Create glow */}
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="4"
              result="coloredBlur"
            />
            <feFlood floodColor="rgba(214, 188, 250, 0.4)" />
            <feComposite in2="coloredBlur" operator="in" result="glow" />
            {/* Shadow */}
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset
              dx={`${(screenCenter.x - mousePosition.x) * 0.05}`}
              dy={`${(screenCenter.y - mousePosition.y) * 0.05}`}
              result="offsetBlur"
            />
            <feFlood floodColor="black" floodOpacity="0.8" />
            <feComposite in2="offsetBlur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic gradient background */}
        <defs>
          <linearGradient
            id="mainBgGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff99ff" />
            <stop offset="15%" stopColor="#ffb3ff" />
            <stop offset="35%" stopColor="#ffd6ff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#ffd6ff" />
            <stop offset="85%" stopColor="#ffb3ff" />
            <stop offset="100%" stopColor="#ff99ff" />
          </linearGradient>

          <radialGradient id="bgRadialGradient" cx="50%" cy="50%" r="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="20%" stopColor="rgba(255, 240, 255, 0.6)" />
            <stop offset="40%" stopColor="rgba(244, 202, 251, 0.4)" />
            <stop offset="70%" stopColor="rgba(186, 85, 211, 0.5)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.6)" />
          </radialGradient>
        </defs>

        {/* Base gradient */}
        <rect width="100%" height="100%" fill="url(#mainBgGradient)" />

        {/* Radial overlay for depth */}
        <rect
          width="100%"
          height="100%"
          fill="url(#bgRadialGradient)"
          opacity="0.8"
        />

        {/* Textured layer */}
        <rect
          width="100%"
          height="100%"
          fill="rgba(80, 60, 120, 0.3)"
          filter="url(#advanced-texture)"
          opacity="1"
        />

        {/* Animated subtle particles/stars */}
        {[...Array(20)].map((_, i) => {
          const x = (i * 47 + 13) % 100;
          const y = (i * 31 + 7) % 100;
          const size = 0.5 + (i % 3) * 0.5;
          const delay = i * 0.3;
          return (
            <circle
              key={`star-${i}`}
              cx={`${x}%`}
              cy={`${y}%`}
              r={size}
              fill="rgba(183, 148, 244, 0.5)"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0.3;0"
                dur={`${3 + (i % 2)}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

        {/* Text Elements */}
        <g>
          {/* Main text - no extrusion */}
          <text
            x="50%"
            y="35%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="100"
            fontWeight="bold"
            fill="rgba(255, 255, 255, 1)"
            filter="url(#textShadow)"
            style={{
              letterSpacing: "0.2em",
              userSelect: "none",
            }}
          >
            GEO Advisor
          </text>

          {/* Subtitle - no extrusion */}
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="22"
            fontWeight="600"
            fill="rgba(255, 255, 255, 1)"
            filter="url(#textGlow)"
            style={{
              letterSpacing: "0.3em",
              userSelect: "none",
              textTransform: "uppercase",
            }}
          >
            AI Search Intelligence
          </text>

          {/* Description text - no extrusion */}
          <text
            x="50%"
            y="64%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
            fontWeight="500"
            fill="rgba(255, 255, 255, 1)"
            filter="url(#textGlow)"
            style={{
              userSelect: "none",
            }}
          >
            Monitor and optimize your visibility across AI platforms
          </text>

          {/* Platform names - no extrusion */}
          <g style={{ overflow: "visible" }}>
            {["ChatGPT", "Claude", "Perplexity", "Gemini", "Grok"].map(
              (platform, index) => {
                const xPos = 30 + index * 10;
                return (
                  <text
                    key={platform}
                    x={`${xPos}%`}
                    y="70%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="16"
                    fontWeight="700"
                    fill="rgba(255, 255, 255, 1)"
                    filter="url(#textGlow)"
                    style={{
                      userSelect: "none",
                      overflow: "visible",
                    }}
                  >
                    {platform}
                  </text>
                );
              }
            )}
          </g>
        </g>
      </svg>

      {/* Content overlay */}
      <div className="relative z-10" style={{ pointerEvents: "auto" }}>
        <MinimalHeader
          mousePosition={mousePosition}
          screenCenter={screenCenter}
        />

        <div className="flex flex-col items-center justify-center min-h-screen px-6">
          <div
            className="max-w-3xl mx-auto text-center"
            style={{ marginTop: "80px" }}
          >
            {/* Book Demo button with shadow */}
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* Very subtle inner button shadow */}
              <div
                style={{
                  position: "absolute",
                  left: `${(screenCenter.x - mousePosition.x) * 0.06}px`,
                  top: `${(screenCenter.y - mousePosition.y) * 0.06}px`,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  borderRadius: "16px",
                  pointerEvents: "none",
                  zIndex: -1,
                  filter: "blur(8px)",
                }}
              />
              {/* Border shadow layer - darker */}
              <div
                style={{
                  position: "absolute",
                  left: `${(screenCenter.x - mousePosition.x) * 0.06}px`,
                  top: `${(screenCenter.y - mousePosition.y) * 0.06}px`,
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(0, 0, 0, 0.85)",
                  borderRadius: "16px",
                  pointerEvents: "none",
                  zIndex: -1,
                  filter: "blur(4px)",
                }}
              />
              {/* Text shadow layer behind button - darker */}
              <div
                style={{
                  position: "absolute",
                  left: `${(screenCenter.x - mousePosition.x) * 0.06}px`,
                  top: `${(screenCenter.y - mousePosition.y) * 0.06}px`,
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
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "transparent",
                    textShadow: "0 0 20px rgba(0, 0, 0, 1)",
                    filter: "blur(2px)",
                  }}
                >
                  Book Demo
                </span>
              </div>
              <div className="relative inline-block p-[2px] rounded-2xl bg-gradient-to-r from-purple-500/70 to-pink-500/70">
                <a
                  href="https://calendly.com/santalucia/geo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block px-8 py-4 font-bold text-white backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98] rounded-[14px]"
                  style={{
                    cursor: "auto",
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
