module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ffb10a",
        "secundary": "#b01e1e",
        "terciary": "#ffb10a",
      },
      screens: {
        'sm': '430px',
        'sm2': '590px', 
      },
      boxShadow: {
        xs: 'inset 0 35px 60px -15px rgba(0, 0, 0, 0.5)',}
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
