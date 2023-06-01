/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "clip-from-top-animation": "clip 1s ease-in-out 5.5s forwards",
      },
      keyframes: {
        clip: {
          "0%": { "clip-path": "ellipse(100% 100% at 50% 50%)" },
          "100%": { "clip-path": "ellipse(160% 160% at 50% 160%)" },
        },
      },
    },
  },
  plugins: [],
};
