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
          primary: "#FF7D33",
          secondary: "#33DDFF",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#fefefe",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
