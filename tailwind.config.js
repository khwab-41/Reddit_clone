/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: "#1A1A1B",
        },
      },
    },
  },
  plugins: [],
};

