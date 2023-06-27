/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'SolBg': "url('/SolBG-1.jpg')",
        'SolBg2': "url('/SolBG-2.jpg')",
        'SolBg3': "url('/SolBG-3.jpg')",
        'SolBg4': "url('/SolBG-4.jpg')",
        'SolBg5': "url('/SolBG-5.jpg')",
        'SolBg6': "url('/SolBG-6.jpg')",
      },
    },
  },
  plugins: [],
}
