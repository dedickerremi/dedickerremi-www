import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prussianBlue: "#133c55",
        lapisLazuli: "#386fa4",
        blueGray: "#59a5d8",
        lightSkyBlue: "#84d2f6",
        columbiaBlue: "#91e5f6",
      },
    },
  },
  plugins: [],
}
export default config
