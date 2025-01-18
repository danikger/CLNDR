/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // 15 column grid
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      gap: {
        '0.25': '0.0625rem',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}