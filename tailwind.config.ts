import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        typewriter: {
          '0%': {width: '0'},
          '100%': {width: '100%'}
        },
        typewriterBeam: {
          '0%, 100%': {backgroundColor: 'transparent'},
          '50%': {backgroundColor: 'white'}
        },
        typewriterBeamClose: {
          '0%': {backgroundColor: 'white'},
          '100%': {backgroundColor: 'transparent'}
        }
      },
      animation: {
        typewriter: 'typewriter .5s cubic-bezier(0,.75,.25,1) .625s normal backwards',
        typewriterbeam: 'typewriterBeam .25s step-end normal backwards 3, typewriterBeamClose .25s cubic-bezier(0,.75,.25,1) 1s normal forwards',
      }
    },
  },
  plugins: [],
};
export default config;
