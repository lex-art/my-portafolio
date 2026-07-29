/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
				heading: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
			},
			// Nocturne tokens, resolved from the CSS custom properties in
			// src/styles.css so light/dark swap without duplicate utilities.
			colors: {
				bg: 'var(--color-bg)',
				surface: 'var(--color-surface)',
				ink: 'var(--color-text)',
				divider: 'var(--color-divider)',
				accent: {
					DEFAULT: 'var(--color-accent)',
					2: 'var(--color-accent-2)',
					100: 'var(--color-accent-100)',
					200: 'var(--color-accent-200)',
					300: 'var(--color-accent-300)',
					400: 'var(--color-accent-400)',
					500: 'var(--color-accent-500)',
					600: 'var(--color-accent-600)',
					700: 'var(--color-accent-700)',
					800: 'var(--color-accent-800)',
					900: 'var(--color-accent-900)',
				},
				neutral: {
					100: 'var(--color-neutral-100)',
					200: 'var(--color-neutral-200)',
					300: 'var(--color-neutral-300)',
					400: 'var(--color-neutral-400)',
					500: 'var(--color-neutral-500)',
					600: 'var(--color-neutral-600)',
					700: 'var(--color-neutral-700)',
					800: 'var(--color-neutral-800)',
					900: 'var(--color-neutral-900)',
				},
				section: {
					DEFAULT: 'var(--color-section)',
					glow: 'var(--color-section-glow)',
				},
			},
			borderRadius: {
				sm: 'var(--radius-sm)',
				md: 'var(--radius-md)',
				lg: 'var(--radius-lg)',
			},
			boxShadow: {
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
			},
			// The 28px leading unit and its half-step, as spacing and leading.
			spacing: {
				unit: 'var(--leading)',
				half: 'var(--half)',
				edge: 'var(--edge)',
			},
			lineHeight: {
				unit: 'var(--leading)',
				half: 'var(--half)',
			},
			maxWidth: {
				measure: 'var(--measure)',
			},
		},
	},
	plugins: [],
}
