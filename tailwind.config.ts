import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#141A33", 700: "#232A47", 600: "#3A4160" },
        pearl: { DEFAULT: "#F3F1EC", 50: "#FAF9F6" },
        greige: { DEFAULT: "#8C7F77", 300: "#C9C1B9" },
        line: "#DCD7D0",
        amber: { DEFAULT: "#C08A55" },
        plum: "#3A3245",
      },
      fontFamily: {
        sans: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
      },
      borderRadius: { DEFAULT: "2px", sm: "2px", md: "4px" },
      maxWidth: { site: "1280px" },
      letterSpacing: { over: "0.28em", tightest: "-0.035em" },
    },
  },
  plugins: [],
};
export default config;
