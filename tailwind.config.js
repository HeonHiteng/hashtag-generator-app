module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#F2F2F2",
      primary: "#FFFFFF",
      active: "#001F3F",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
