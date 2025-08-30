/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <-- sab JSX/TSX files scan karega
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
