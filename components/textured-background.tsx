export function TexturedBackground() {
  return (
    <>
      {/* Main gradient background - darker for better contrast */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/90 to-black" />

      {/* Futuristic texture with specular lighting - MAIN VISIBLE LAYER */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter
            id="advanced-texture"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feTurbulence
              result="noise"
              numOctaves={3}
              baseFrequency={0.7}
              type="fractalNoise"
              seed={5}
            />
            <feSpecularLighting
              result="specular"
              lightingColor="white"
              specularExponent={20}
              specularConstant={0.8}
              surfaceScale={2}
              in="noise"
            >
              <fePointLight z={100} y={50} x={50} />
            </feSpecularLighting>
            <feComposite
              result="litNoise"
              operator="in"
              in="specular"
              in2="SourceGraphic"
            />
            <feBlend mode="overlay" in="SourceGraphic" in2="litNoise" />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="white"
          filter="url(#advanced-texture)"
          opacity={0.15}
        />
      </svg>

      {/* Secondary texture layer for more complexity */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter
            id="texture-secondary"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feTurbulence
              result="noise2"
              numOctaves={4}
              baseFrequency={1.2}
              type="fractalNoise"
              seed={10}
            />
            <feSpecularLighting
              result="specular2"
              lightingColor="rgb(139, 92, 246)"
              specularExponent={25}
              specularConstant={1}
              surfaceScale={3}
              in="noise2"
            >
              <fePointLight z={80} y={30} x={70} />
            </feSpecularLighting>
            <feComposite
              result="litNoise2"
              operator="in"
              in="specular2"
              in2="SourceGraphic"
            />
            <feBlend mode="screen" in="SourceGraphic" in2="litNoise2" />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="white"
          filter="url(#texture-secondary)"
          opacity={0.08}
        />
      </svg>

      {/* Third texture layer with different parameters for depth */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none mix-blend-overlay">
        <defs>
          <filter
            id="texture-tertiary"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feTurbulence
              result="noise3"
              numOctaves={2}
              baseFrequency={0.3}
              type="turbulence"
              seed={15}
            />
            <feSpecularLighting
              result="specular3"
              lightingColor="rgb(168, 85, 247)"
              specularExponent={15}
              specularConstant={0.5}
              surfaceScale={4}
              in="noise3"
            >
              <fePointLight z={120} y={80} x={20} />
            </feSpecularLighting>
            <feComposite
              result="litNoise3"
              operator="in"
              in="specular3"
              in2="SourceGraphic"
            />
            <feBlend mode="multiply" in="SourceGraphic" in2="litNoise3" />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="white"
          filter="url(#texture-tertiary)"
          opacity={0.12}
        />
      </svg>

      {/* Subtle grid overlay */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated gradient orbs - very subtle */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-[0.02] animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-[0.02] animate-blob animation-delay-2000" />
      </div>

      {/* Vignette effect - stronger for depth */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
    </>
  );
}
