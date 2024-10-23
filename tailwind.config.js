/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 29%, 50%)",
        "light-cyan-bg": "hsl(180, 52%, 96%)",
        "light-cyan-filter": "hsl(180, 31%, 95%)",
        "dark-cyan": "hsl(180, 8%, 52%)",
        "very-dark-cyan": "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        body: ["15px", "1.5"],
      },
      fontWeight: {
        body: 500,
        bold: 700,
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      boxShadow: {
        "drop-shadow": "0 15px 20px -5px rgba(13, 113, 130, 0.15)",
      },
    },
  },
  plugins: [],
};
