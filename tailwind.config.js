/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'orange': '#f9eac8'
      },
      fontFamily: {
        
        'display': ['ui-serif','Playfair Display'],
        'body': ['ui-monospace','Inconsolata'],
      }
    },
  },
  plugins: [],
}
