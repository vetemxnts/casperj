import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				banner:
					'linear-gradient(0deg,rgb(0,0,0) 0%,rgba(0,0,0,0) 100%), radial-gradient(circle,rgba(248,113,113,0.2) 0%,rgba(0,0,0,0.5) 100%)',
			},
			keyframes: {
				banner: {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				},
				bannerCaret: {
					'0%, 100%': { borderRight: 'solid 2px transparent' },
					'80%': { borderRight: 'solid 2px white' },
				},
			},
			animation: {
				banner: 'banner .5s cubic-bezier(0,.75,.25,1) .25s normal backwards',
				bannerDelayed:
					'banner .5s cubic-bezier(0,.75,.25,1) .75s normal backwards, bannerCaret 1.25s cubic-bezier(0,.75,.25,1) .25s normal backwards',
			},
			transitionProperty: {
				'transform-opacity': 'transform, opacity',
				width: 'width',
			},
			transitionTimingFunction: {
				smooth: 'cubic-bezier(0,.75,.25,1)',
			},
		},
	},
	plugins: [],
};
export default config;
