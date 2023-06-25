/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FAF9F9",
          300: "#F5F2EE",
          500: "#EAE5DE",
          700: "#C7AF8D",
          800: "#C9BCAA",
          900: "#41300E",
        },
      },
      backgroundImage: {
        beer: "url('/img/Beer.png')",
        whisky: "url('/img/Whisky.png')",
      },
    },
  },
  plugins: [],
};
