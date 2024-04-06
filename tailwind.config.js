/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      background: "#050C1D",
      text: "#E4EBFF",
      primary: "#95A6D3",
      accent: "#FB6F12",
    },
    extend: {},
  },
  plugins: [],
};
