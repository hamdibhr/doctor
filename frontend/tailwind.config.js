/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif", "General Sans"],
        serif: ["Crimson Text", "serif"],
        mono: ["IBM Plex Mono", "monospace", "monospace"],
      },
    },
  },
  plugins: [],
};