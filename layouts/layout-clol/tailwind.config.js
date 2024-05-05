/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-transparent": "pulse-transparent 2s infinite",
      },
      keyframes: {
        "pulse-transparent": {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 0.2 },
        },
      },
      colors: {
        necc: "#000068",
        piss: "#ffd600",
      },
    },
  },
  plugins: [],
};
