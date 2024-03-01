/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueText: "#33A0FF",
        blueLight: "#BCDDFE",
        redHot: "#FF4858",
        redText: "#FB7181",
        blackText: "#22262A",
        blackFooter: "262626",
        blackTextNav: "#262626",
        greyLigt: "#C1C8CE",
        grayText: "#9098B1",
        grayCard: "#F6F7F8",
      },
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
      },
    },
  },
  plugins: [],
};
