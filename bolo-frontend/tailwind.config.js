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
        background: 'rgb(var(--background) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        mediumDark: 'rgb(var(--color-medium-dark) / <alpha-value>)',
        medium: 'rgb(var(--color-medium) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
      },
      fontFamily: {
        titulos: ['Gluten', 'sans-serif'],
        texto: ['Vina Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
