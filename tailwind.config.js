module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ["Akaya Telivigala"],
      },
      minWidth: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
      },
      height: {
        detailFeed: "600px",
        "1/12": "8.33%",
        "2/12": "16.66%",
        "9/12": "74.97%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
