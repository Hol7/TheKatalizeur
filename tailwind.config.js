module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#007BFF', // Example primary color
          secondary: '#6C757D',
        },
      },
    },
    plugins: [],
    darkMode: 'class', // Enable dark mode
  };