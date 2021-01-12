module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-img': "url('./assets/home.png')",
        'topo-img': "url('./assets/topography.svg')",
      }),

      colors: ({
        buffGold: '#CFB87C'
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
