
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#3B82F6",  // Consistent blue
          light: "#E6F2FF",    // Light blue background
          dark: "#1D4ED8",     // Darker blue for contrast
        },
        secondary: {
          DEFAULT: "#6366F1",  // Indigo
          light: "#EEF2FF",
          dark: "#4F46E5", 
        },
        gray: {
          50: "#F9FAFB",       // Very light gray (almost white)
          100: "#F3F4F6",      // Light gray
          200: "#E5E7EB",      // Medium light gray
          300: "#D1D5DB",      // Medium gray
          800: "#1F2937",      // Dark gray for text
        },
        background: "#FFFFFF", // Pure white background
        success: "#10B981",    // Green
        warning: "#F59E0B",    // Amber
        error: "#EF4444",      // Red
        info: "#3B82F6",       // Blue
      },
      backgroundImage: {
        'light-blue-gradient': 'linear-gradient(to right, #E6F2FF, #B6E0FF)', // Soft, light blue gradient
        'blue-gradient': 'linear-gradient(to right, #3B82F6, #1D4ED8)',
        'indigo-gradient': 'linear-gradient(to right, #6366F1, #4F46E5)',
        'grid-pattern': 'linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)'
      },
      boxShadow: {
        'light': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -15px rgba(0, 0, 0, 0.08)',
        'premium': '0 15px 35px -10px rgba(59, 130, 246, 0.15)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
