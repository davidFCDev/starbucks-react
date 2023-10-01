/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sb-green": "#008248",
        "sb-green2": "#21ae6e",
        "sb-dark-green": "#1e3932",
        "sb-light-green": "#d4e9e2",
        "sb-gray": "#f3f1e7",
        "sb-palid-green": "#f1f8f6",
      },
    },
  },
  plugins: [],
};
