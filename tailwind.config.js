/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#179F57",
        black: {
          900: "#000000",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        initial: "initial",
        inherit: "inherit",
        unset: "unset",
      },
      letterSpacing: {
        wide: "0.015em",
        tight: "-0.03em",
      },
      spacing: {
        4.5: "18px",
        13: "52px",
        14: "54px",
        15: "56px",
        16: "60px",
        17: "64px",
        18: "68px",
        19: "72px",
        22: "86px",
        34: "136px",
        fill: "-webkit-fill-available",
      },
      zIndex: {
        px: "1",
        0.5: "2",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        sm: "500",
        base: "1028",
        lg: "1524",
        xl: "2028",
        primary: "9999",
      },
      screens: {
        xs: "370px",
        small: "423px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "8px",
          sm: "0px",
        },
        screens: {
          sm: "640px",
          md: "720px",
          lg: "958px",
          xl: "1149px",
          "2xl": "1248px",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate global styles
    }),
    require("@tailwindcss/typography"),

    // @variant
    ({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("supports-grid", "@supports (display: grid)");
    },
  ],
};
