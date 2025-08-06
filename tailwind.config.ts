import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6366F1",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Professional color palette with lighter wavy purple background
        'brand-purple': {
          25: '#fdfcff',
          50: '#f9f7ff',
          75: '#f5f2ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        'brand-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        'brand-success': '#10b981',
        'brand-warning': '#f59e0b',
        'brand-error': '#ef4444',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'wavy-purple': `
          radial-gradient(ellipse at 15% 10%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 20%, rgba(124, 58, 237, 0.10) 0%, transparent 60%),
          radial-gradient(ellipse at 25% 70%, rgba(109, 40, 217, 0.08) 0%, transparent 55%),
          radial-gradient(ellipse at 75% 80%, rgba(147, 51, 234, 0.09) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 30%, rgba(168, 85, 247, 0.07) 0%, transparent 45%),
          radial-gradient(ellipse at 10% 90%, rgba(139, 92, 246, 0.06) 0%, transparent 40%),
          radial-gradient(ellipse at 90% 60%, rgba(124, 58, 237, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 40% 5%, rgba(109, 40, 217, 0.05) 0%, transparent 35%),
          linear-gradient(135deg, rgba(139, 92, 246, 0.04) 0%, rgba(124, 58, 237, 0.06) 25%, rgba(109, 40, 217, 0.04) 50%, rgba(147, 51, 234, 0.03) 75%, rgba(168, 85, 247, 0.05) 100%)
        `,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
