/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceFont: ['"Space Grotesk"', "sans-serif"],
      },
      colors: { glassBlack: "rgba(0,0,0,0.3)",
        glassWhite:"rgba(255,255,255,0.2)"
       },
       backgroundImage: {
        graphBg: "url('assets/images/660fb31f9b8fa9537512701e.png')",
        bluegreenBg: "url('assets/images/bluegreen-bg.jpg')",
        tealBg:"url('assets/images/christian-boragine-PwEMIB3rN4k-unsplash.jpg')",
        linearGradientGlass:
          "linear-gradient(130deg,rgba(255,255,255,0.3),rgba(0,0,0,0.2));",
      },
      backgroundSize:{
        glassSize:'30px',
      },
    },
  },
  plugins: [],
};
