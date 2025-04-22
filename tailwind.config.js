/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#64ffda',
        background: '#0a192f',
        foreground: '#ccd6f6',
      },
    },
  },
  plugins: [],
}
