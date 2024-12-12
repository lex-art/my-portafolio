/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'custom-radial-light': 'radial-gradient(125% 125% at 50% 0%, transparent 30%, rgba(0, 255, 238, 0.5) 100%)',
        'custom-radial-dark': 'radial-gradient(125% 125% at 50% 0%, transparent 40%, rgba(0, 255, 238, 0.18) 100%)',
			},
			fontFamily: {
				'slackey': ['Slackey', 'sans-serif'],
				'just-another-hand': ['Just Another Hand', 'cursive'],
			},
			colors: {
        background: {
          light: 'radial-gradient(125% 125% at 50% 10%, #00ffee80 40%, #6fdcbf 75%)',
          dark: 'radial-gradient(125% 125% at 50% 10%, #000c1e 40%, #00ffee2e 80%)',
        },
      },
		},
	},
	plugins: [],
}
