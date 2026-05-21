/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",

      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Outfit", "ui-sans-serif", "system-ui"],
        mono: ["Space Mono", "ui-monospace"],
      },

      colors: {
        bg: {
          primary: "#FAF9F6",
          secondary: "#EAE7E0",
          tertiary: "#DFDBCF",
        },

        ink: {
          primary: "#2C302B",
          secondary: "#5C605A",
          accent: "#8A7361",
        },

        brand: {
          DEFAULT: "#A67B5B",
          hover: "#8B664B",
          dark: "#3E4A3D",
          accent: "#D4A373",
        },

        line: "#E5E3D8",
      },

      borderRadius: {
        none: "0",
      },
    },
  },

  plugins: [],
}