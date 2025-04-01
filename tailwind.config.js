/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#70b8ff",
        "outline-blue": "#3b9eff",
        "text-color": "#cbd5e1"
      }
    },
  },
  plugins: [],
}