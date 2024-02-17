const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    extend: {
      listStyleType: {
        circle: "circle"
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.gray,
      "black": {
        "DEFAULT": "rgb(var(--modus-themes-color-black) / <alpha-value>)",
        "alt": "rgb(var(--modus-themes-color-black-alt) / <alpha-value>)",
      },
      "red": {
        "DEFAULT": "rgb(var(--modus-themes-color-red) / <alpha-value>)",
        "alt": "rgb(var(--modus-themes-color-red-alt) / <alpha-value>)",
      },
      "green": {
        "DEFAULT": "rgb(var(--modus-themes-color-green) / <alpha-value>)",
        "alt": "rgb(var(--modus-themes-color-green-alt) / <alpha-value>)",
      },
      "yellow": {
        "DEFAULT": "rgb(var(--modus-themes-color-yellow) / <alpha-value>)",
        "alt": "rgb(var(--modus-themes-color-yellow-alt) / <alpha-value>)",
      },
      "blue": {
        "DEFAULT": "rgb(var(--modus-themes-color-blue) / <alpha-value>)",
        "alt": "rgb(var(--modus-themes-color-blue-alt) / <alpha-value>)",
      },
      "magenta": {
        "DEFAULT": "rgb(var(--modus-themes-color-magenta) / <alpha-value>)",
        "alt": "rgb(var(--modus-themes-color-magenta-alt) / <alpha-value>)",
      },
      "cyan": {
        "DEFAULT": "rgb(var(--modus-themes-color-cyan) / <alpha-value>)",
        "alt": "rgb(var(--modus-themes-color-cyan-alt) / <alpha-value>)",
      },
      "white": {
        "DEFAULT": "rgb(var(--modus-themes-color-white) / <alpha-value>)",
        "alt": "rgb(var(--modus-themes-color-white-alt) / <alpha-value>)",
      },
      "calm": "rgb(var(--modus-themes-color-calm) / <alpha-value>)",
      "cold": "rgb(var(--modus-themes-color-cold) / <alpha-value>)",
      "mild": "rgb(var(--modus-themes-color-mild) / <alpha-value>)",
      "warm": "rgb(var(--modus-themes-color-warm) / <alpha-value>)",
      "bgdim": "rgb(var(--modus-themes-color-bgdim) / <alpha-value>)",
      "brandbg": "rgb(var(--modus-themes-color-brandbg) / <alpha-value>)",
      "brandfg": "rgb(var(--modus-themes-color-brandfg) / <alpha-value>)",
      "brandlink": "rgb(var(--modus-themes-color-brandlink) / <alpha-value>)",
    }
  },
  variants: {
    extend: {
      textColor: ["visited", "hover:visited", "focus:visited"],
      backgroundColor: ["visited", "hover:visited", "focus:visited"],
    }
  },
  plugins: []
}
