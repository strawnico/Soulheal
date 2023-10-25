/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        works: ["Work sans", "sans-serif"],
        molengo: ["Molengo", "sans-serif"]
      },
      colors: {
        verdePrincipal: "#7B9A74",
      },
      screens: {
        custombp: { raw: "(min-height: 1234px)" },
      },
    },
  },
  plugins: [],
};
