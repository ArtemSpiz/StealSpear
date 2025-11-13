/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi Variable", "sans-serif"],
        times: ["Times New Roman", "sans-serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
