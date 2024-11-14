// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#ffffff',
        'color-dark-blue': '#111B3D',
        'azul-oscuro': '#050614',
        'color-navy-blue': '#304264',
        'azul-suave': '#607597',
        'azul-suave-text': '#C9CEE0',
      },
      fontFamily: {
        titulos: ['Gluten', 'sans-serif'],
        texto: ['Vina Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
