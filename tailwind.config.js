module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbarBg': "linear-gradient(44.39deg, rgba(255, 255, 255, 0.2) -14.6%, rgba(255, 255, 255, 0.144) 65.55%), linear-gradient(178.39deg, #1f1f1f -43.76%, rgba(182, 182, 182, 0) 300.47%)",
        'siteHomeBg': "url(./assets/nuworks-website-home-bg.png)",
        'siteBg': "url(./assets/nuworks-website-bg.png)",
      },
      flex: {
        'zz50': '0 0 50%',
      }
    },
  },
  plugins: [],
}
