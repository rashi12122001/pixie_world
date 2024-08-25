/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      background: 'rgb(var(--background))',
      foreground: 'rgb(var(--foreground))',
      muted: 'rgb(var(--muted))',
      accent: 'rgb(var(--accent))',
    },
    boxShadow:{
      'glass-inset':'inset 0px 17px 5px -9px rgba(254,254,91,0.2)',
    'glass-sm':'5px 5px 20px 0px #cbdaf3c7',
    },
    keyframes:{
    'spin-reverse':{
      '0%':{transform: 'rotate(0deg)'},
      '100%':{transform:'rotate(-360deg)'}
    }
    },
    animation:{
      'spin-slow':'spin 40s linear infinite',
      'spin-slow-reverse':'spin-reverse 40s linear infinite',
    },
  },
  plugins: [],
};
