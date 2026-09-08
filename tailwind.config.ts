import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /* Neutral graphite. Cool, restrained, one functional accent. */
        paper: {
          DEFAULT: "#FCFCFD",
          raised: "#F5F5F7",
          sunken: "#EDEDF0",
        },
        ink: {
          DEFAULT: "#111113",
          muted: "#5B5B63",
          faint: "#8B8B94",
        },
        rule: "#E3E3E8",
        accent: {
          DEFAULT: "#1F5EFF",
          soft: "#4C7FFF",
        },
      },
      fontFamily: {
        /* Swapped in app/[lang]/layout.tsx via TYPE_VARIANT. */
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.1em" }],
        meta: ["0.8125rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.7" }],
        lede: ["1.1875rem", { lineHeight: "1.6" }],
        /* Section headings sit above role headings; they must not tie. */
        section: [
          "clamp(2.125rem,4.5vw,3.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        title: [
          "clamp(1.5rem,3vw,2.125rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        display: [
          "clamp(2.25rem,6vw,4.25rem)",
          { lineHeight: "1.02", letterSpacing: "-0.035em" },
        ],
      },
      maxWidth: {
        measure: "64ch",
        shell: "80rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "rise-in": {
          from: { opacity: "0", transform: "translateY(0.5rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
}
export default config
