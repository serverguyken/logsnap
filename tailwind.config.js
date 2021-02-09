module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: {
          normal: '#17d8e2',
          dark: '#0ab2bb',
          light: "#c6f3f5"
        },
        gray: {
          dark: 'rgb(60, 65, 73)',
          dim: "#6a6a6a"
        },
        status: {
          inProgressLight: '#bfebff',
          inProgressDark: '#526f8d'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
