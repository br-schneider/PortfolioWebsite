module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-img': "url('https://res.cloudinary.com/ds4r60vrc/image/upload/v1610411425/home_vkrczn.png')",
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
