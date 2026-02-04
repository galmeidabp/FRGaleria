export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        italianno: ['Italianno', 'cursive'],
        inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        "gold-gradient": "var(--gradient-gold)",
      },
    },
  },
  plugins: [],
}
