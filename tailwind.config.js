module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      lato: ['lato', 'sans-serif']
    }

  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')    
  ],
}