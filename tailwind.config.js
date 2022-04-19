module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ["Poppins", "sans-serif"],
        'Constantia': ["Constantia", "sans-serif"],
        'Nunito' : ["Nunito" , "sans-serif"],
      },
      colors : {
        'MPrimary1' : '#FDCF80',
        'MPrimary2' : "#D2AD6D",
        'MSecondary1' : "#545454",
        'MSecondary2' : "#242545"
      },
      backgroundImage: {
        'heroHeaderBg': "url('/images/hero_bg.png')",
        'heroHeader1' : "url('/images/hero_bg1.png')",
        'heroHeader2' : "url('/images/hero_bg2.png')",
        'beautySection' : "url('/images/beauty_bg.png')"
      }
    },
  },
  plugins: [],
};
