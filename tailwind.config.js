module.exports = {
  content: [
    "storyblok/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        ...require("tailwindcss/defaultTheme").fontFamily,
        feature: "'Montserrat', sans",
        sans: ["Inter", "sans-serif"],
      },
    },
  },
}
