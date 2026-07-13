import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the Home Hero logo:
        // navy banner, gold star / wooden scrolls, teal "HANDYMAN" plate.
        charcoal: "#16324F",
        "charcoal-soft": "#1F4166",
        cream: "#FAF7F2",
        stone: "#EAE9E0",
        ink: "#33404E",
        "ink-soft": "#5F6B77",
        amber: {
          DEFAULT: "#DCA733",
          dark: "#A87C1B",
          light: "#EFC968",
        },
        teal: {
          DEFAULT: "#2FB7C4",
          dark: "#1D7B85",
          light: "#A6E1E7",
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
