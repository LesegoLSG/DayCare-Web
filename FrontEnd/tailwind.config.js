/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DDE6ED',
        secondary: '#9DB2BF',
        balance: '#526D82',
        action: '#27374D',
        touch:'#36C2CE'
      }
    },
  },
  plugins: [],
}

