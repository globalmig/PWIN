import { title } from "process";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        body: "#17171B",
        title: "#17171B",
      },
      fontSize: {
        title: "1.875rem",
        body: "1.25rem",
      },

      fontFamily: {
        pretendard: ["Pretendard Variable", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
} satisfies Config;
