/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",
          secondary: "#333333",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      }
    ]
  }
}
