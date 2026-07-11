import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1C1B18",
        "charcoal-soft": "#2A2823",
        cream: "#FAF7F2",
        stone: "#EDE7DD",
        ink: "#3A3833",
        "ink-soft": "#6B675F",
        amber: {
          DEFAULT: "#C8933A",
          dark: "#A97A2C",
          light: "#E3B96C",
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "10px",
      },
      maxWidth: {
        wrap: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
