/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4F9F4',
        secondary: '#A7D7C5',
        balance: '#74B49B',
        action: '#5C8D89'
      }
    },
  },
  plugins: [],
}

