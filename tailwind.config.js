/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    layers: ["base", "components", "utilities"],
  },
  theme: {
    extend: {
      screens: {
        desktop: "1130px",
      },

      colors: {
        "primary-color": "#B57EDC",
        "light-lilac": "rgba(200, 160, 255, 0.5)",
        "dark-lilac": "#C8A0FF",
        "light-gray": "#E6CCFF",
      },
    },
  },
  plugins: [],
};
