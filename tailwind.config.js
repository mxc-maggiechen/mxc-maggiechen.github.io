/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [],

  extend: {
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans'],
      'courier-prime': ['Courier Prime', 'monospace'],
    },

    height: {
      'custom': '4%', // Define your custom height class here
    }
  },
}


