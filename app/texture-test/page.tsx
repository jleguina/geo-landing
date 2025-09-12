"use client";

import { useEffect, useState } from "react";

export default function TextureTest() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [screenCenter, setScreenCenter] = useState({ x: 960, y: 540 }); // Default to 1920x1080 center

  // Performance settings
  const isLowPerformance =
    typeof window !== "undefined" &&
    (navigator.hardwareConcurrency <= 4 || // Few CPU cores
      /Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )); // Mobile

  // Adjustable extrusion depth - change this value to control 3D depth
  const extrusionDepth = 10; // Try values from 5 to 20 for different effects
  const extrusionLayers = isLowPerformance ? 10 : 20; // Fewer layers on slower devices

  useEffect(() => {
    // Set the actual center on mount
    setScreenCenter({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    let frameId: number;
    let lastX = 0,
      lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle updates with requestAnimationFrame
      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        // Only update if mouse moved significantly (5px threshold)
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
      className="futuristic-pattern"
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        cursor: "none", // Hide default cursor
        overflow: "hidden",
      }}
    >
      {/* Custom circular cursor */}
      <div
        style={{
          position: "fixed",
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid rgba(255, 255, 255, 0.5)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.1s ease-out",
          transform: "translate(0, 0)",
        }}
      >
        {/* Inner circle for more detail */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        />
      </div>

      <span className="ripple-overlay"></span>

      {/* SVG for both texture and text with shadows */}
      <svg
        className="texture-filter"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          willChange: isLowPerformance ? "auto" : "transform",
        }}
      >
        <defs>
          <filter id="advanced-texture">
            <feTurbulence
              result="noise"
              numOctaves={isLowPerformance ? 2 : 3}
              baseFrequency={0.7}
              type="fractalNoise"
            />
            {/* Ambient light layer */}
            <feSpecularLighting
              result="ambientLight"
              lightingColor="#fff"
              specularExponent={30}
              specularConstant={0.2}
              surfaceScale={0.2}
              in="noise"
            >
              <feDistantLight azimuth={45} elevation={30} />
            </feSpecularLighting>
            {/* Spotlight layer */}
            <feSpecularLighting
              result="spotLight"
              lightingColor="#fff"
              specularExponent={20}
              specularConstant={0.8}
              surfaceScale={2}
              in="noise"
            >
              <feSpotLight
                x={mousePosition.x} // Light originates from mouse
                y={mousePosition.y} // Light originates from mouse
                z={100}
                pointsAtX={screenCenter.x} // Points toward center
                pointsAtY={screenCenter.y} // Points toward center
                pointsAtZ={0}
                specularExponent={20}
                limitingConeAngle={30}
              />
            </feSpecularLighting>
            {/* Merge the two light sources with reduced ambient in shadows */}
            <feComposite
              operator="arithmetic"
              k1="0"
              k2="0.3"
              k3="1"
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

          {/* Filter for text shadow that darkens the texture */}
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
        </defs>

        {/* Background rect with texture */}
        <rect
          width="100%"
          height="100%"
          fill="rgba(30, 20, 50, 1)"
          filter="url(#advanced-texture)"
        />

        {/* 3D Text with extrusion layers */}
        <g>
          {/* Extrusion layers - dark sides of the 3D letters */}
          {[...Array(extrusionLayers)].map((_, i) => {
            const progress = (i + 1) / extrusionLayers;
            const offset = progress * extrusionDepth;
            const offsetX =
              (-(mousePosition.x - screenCenter.x) / (screenCenter.x * 2)) *
              offset;
            const offsetY =
              (-(mousePosition.y - screenCenter.y) / (screenCenter.y * 2)) *
              offset;
            return (
              <text
                key={i}
                x={`${50 + offsetX}%`}
                y={`${50 + offsetY}%`}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="120"
                fontWeight="bold"
                fill="rgba(0, 0, 0, 0.7)"
                style={{
                  letterSpacing: "0.1em",
                  userSelect: "none",
                }}
              >
                GEO
              </text>
            );
          })}

          {/* Main text with shadow */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="120"
            fontWeight="bold"
            fill="rgba(255, 255, 255, 0.9)"
            filter="url(#textShadow)"
            style={{
              letterSpacing: "0.1em",
              userSelect: "none",
            }}
          >
            GEO
          </text>
        </g>
      </svg>
    </div>
  );
}
