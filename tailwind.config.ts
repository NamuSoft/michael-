import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        roboto: ["Roboto Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      screens: {
        xs: { min: "350px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
