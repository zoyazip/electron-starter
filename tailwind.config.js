/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/ui/react/**/*.{js,ts,jsx,tsx}",
    "./src/ui/electron/**/*.{js,ts,jsx,tsx}",
    "dist-react/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

