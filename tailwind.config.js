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
          primary: "#6ECCAF",
          secondary: "#ADE792",
          accent: "#344D67",
          neutral: "#fefefe",
          "base-100": "#fff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
