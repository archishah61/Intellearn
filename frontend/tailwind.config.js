/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-teal': '#2C3531',
        'deep-teal': '#116466',
        'peach': '#D9B08C',
        'beige': '#FFCB9A',
        'pastel-green': '#D1E8E2',
      },
      fontFamily:{
        nerko:["Nerko One", "serif"],
        protest:['Protest Guerrilla','serif'],
        pt:['PT Serif','serif'],
        nunito:['Nunito sans','serif']
      }
    },
  },
  plugins: [],
}

