module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      dynapuff: ["DynaPuff"],
      playfair: ["Playfair Display"],
      marykate: ["Marykate"],
    },
  },
  plugins: [require("daisyui")],
};
