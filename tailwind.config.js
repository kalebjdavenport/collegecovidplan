module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        primary: "#161923",
        eblue: "#474056",
        coffee: {
          400: "#3B2C35",
          800: "#2A1A23",
        },
        ruby: {
          400: "#A63446",
          800: "#912A38",
        },
        light: "#FCFCFC",
        blush: "#FFF7FC",
      },
      height: {
        90: "90vh",
        "8vh": "8vh",
      },
      maxHeight: {
        "48": "12rem",
        "80vh": "80vh",
        "90vh": "90vh",
        none: "none",
      },
    },
  },
  variants: {},
  plugins: [],
}
