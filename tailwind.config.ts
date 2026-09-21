import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF7F2",
          100: "#F5EFEB",
          200: "#EFE6DC",
          300: "#E3D3C3",
        },
        brown: {
          950: "#1C110C",
          900: "#2B1B15",
          800: "#3D2820",
          700: "#553A30",
          600: "#735144",
          500: "#946E5E",
          100: "#EBDDD6",
        },
        terracotta: {
          50: "#FDF4F2",
          100: "#FBE6E2",
          500: "#B8432C",
          600: "#9C331F",
          700: "#802616",
          800: "#651D10",
        },
        caramel: {
          50: "#FDF9F2",
          100: "#F9F0DF",
          400: "#DCA34E",
          500: "#C48A34",
          600: "#A87023",
          700: "#8B5718",
        },
        borderWarm: "#E6DBD1",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
