/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        themeBookshore: {
          primary: "#47A992",
          secondary: "#FBBD23",
          accent: "#47B5FF",
          neutral: "#fefefe",
          "base-100": "#fff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
