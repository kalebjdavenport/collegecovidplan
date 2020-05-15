import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["PT Sans", "sans-serif"],
  bodyFontFamily: ["PT Sans", "sans-serif"],
})

typography.injectStyles()

export default typography
