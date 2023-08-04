/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#685DC5",
        "primary-dark": "#523996",
        "primary-content": "#FFFFFF",
        secondary: "#523996",
        "secondary-dark": "#4FA16C",
        "secondary-content": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
