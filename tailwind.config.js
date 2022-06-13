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
        "primary": "#fff000",
        "secundary": "#ff0000",
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
