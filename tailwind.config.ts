
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom colors
				'mcq-blue': {
					light: '#E6F7FF',
					DEFAULT: '#3498db',
					dark: '#2980b9'
				},
				'mcq-gray': {
					lightest: '#F8F9FA',
					light: '#E9ECEF',
					DEFAULT: '#CED4DA',
					dark: '#6C757D'
				},
				// New vibrant colors for dashboard
				'dashboard': {
					purple: '#8B5CF6',
					blue: '#3B82F6',
					green: '#10B981',
					yellow: '#FBBF24',
					red: '#EF4444',
					pink: '#EC4899',
					indigo: '#6366F1',
					orange: '#F97316',
					teal: '#14B8A6',
				},
				'gradient': {
					'blue-start': '#60A5FA',
					'blue-end': '#3B82F6',
					'green-start': '#34D399',
					'green-end': '#10B981',
					'purple-start': '#A78BFA',
					'purple-end': '#8B5CF6',
					'orange-start': '#FDBA74',
					'orange-end': '#F97316',
					'pink-start': '#F9A8D4',
					'pink-end': '#EC4899',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-in-out',
				'fade-out': 'fade-out 0.3s ease-in-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'pulse-slow': 'pulse 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite'
			},
			boxShadow: {
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
				'neu': '5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff',
				'colored': '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
				'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-card-blue': 'linear-gradient(120deg, #60A5FA, #3B82F6)',
				'gradient-card-green': 'linear-gradient(120deg, #34D399, #10B981)',
				'gradient-card-purple': 'linear-gradient(120deg, #A78BFA, #8B5CF6)',
				'gradient-card-orange': 'linear-gradient(120deg, #FDBA74, #F97316)',
				'gradient-card-pink': 'linear-gradient(120deg, #F9A8D4, #EC4899)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
