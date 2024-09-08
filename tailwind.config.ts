import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,entry.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
