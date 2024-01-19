/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/bg.webp')"
      },

      boxShadow: {
        '3xl': '0 4px 6px rgba(0, 0, 0, 0.1)'
      },

      transitionProperty: {
        'testimonials': 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out, filter 0.5s ease-in-out, z-index 0.5s ease-in-out, transform-origin 0.5s ease-in-out'
      },

      transformOrigin: {
        'nothing': 'translate(0, 0)',
        'forbutton': 'translateY(-50%)'
      }
    },
  },
  plugins: [],
}