/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "750px",
      },
      colors: {
        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
        LightRed: "hsl(0, 100%, 63%)",
        IntroBack: "hsl(217, 28%, 15%)",
        MainBack: "hsl(218, 28%, 13%)",
        Footer: "hsl(216, 53%, 9%)",
        TestimonialsBack: "hsl(219, 30%, 18%)",
      },
      backgroundImage: {
        Intro: "url('/images/illustration-intro.png')",
        CurvyDesktop: "url('/images/bg-curvy-desktop.svg')",
        CurvyMobile: "url('/images/bg-curvy-mobile.svg')",
        ProductiveIllustration:
          "url('/images/illustration-stay-productive.png')",
        Arrow: "url('/images/icon-arrow.svg')",
        Quotes: "url('/images/bg-quotes.png')",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        OpenSans: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
