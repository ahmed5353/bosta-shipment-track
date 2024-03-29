/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#35b600",
        "dark-red": "#f4050d",
        yellow: "#f9ba02",
      },
    },
  },
  plugins: [],
};
