
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
      colors: {
        primary: {
          DEFAULT: "#3B82F6",  // Consistent blue
          light: "#E6F2FF",    // Light blue background
          dark: "#1D4ED8",     // Darker blue for contrast
        },
        gray: {
          50: "#F9FAFB",       // Very light gray (almost white)
          100: "#F3F4F6",      // Light gray
          200: "#E5E7EB",      // Medium light gray
          300: "#D1D5DB",      // Medium gray
          800: "#1F2937",      // Dark gray for text
        },
        background: "#FFFFFF", // Pure white background
      },
      backgroundImage: {
        'light-blue-gradient': 'linear-gradient(to right, #E6F2FF, #B6E0FF)', // Soft, light blue gradient
      },
      boxShadow: {
        'light': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
