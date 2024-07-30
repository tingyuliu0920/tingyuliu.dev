/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{tsx,js,ts,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        debounce: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        debounce: "debounce 0.5s ease-in-out",
      },
      variants: {
        animation: ["debounce"],
      },
      colors: {
        green: "#2E8B57",
      },
    },
  },
  plugins: [],
};
