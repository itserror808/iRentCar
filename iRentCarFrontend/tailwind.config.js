/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // Enable dark mode with a 'class' strategy

  theme: {
    extend: {
      colors: {
        lightBackground: '#F3F3F3',
        lightText: '#131313',
        darkBackground: '#131313',
        darkText: '#F3F3F3',
      },
      // Add custom button styles here
      buttonStyles: {
        '.primary-btn': {
          '@apply bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200 ease-in-out': {},
        },
        '.secondary-btn': {
          '@apply bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 ease-in-out': {},
        },
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.primary-btn': {
          '@apply bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200 ease-in-out': {},
        },
        '.secondary-btn': {
          '@apply border-gray-500 border-[1px] text-white py-2 px-4 rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition duration-200 ease-in-out': {},
        },
      });
    }
  ],
}
