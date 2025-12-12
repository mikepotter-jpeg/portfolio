import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        // Framer-style typography scale
        "hero": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "hero-md": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "h2": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "small": ["0.875rem", { lineHeight: "1.5" }],
        "xs": ["0.75rem", { lineHeight: "1.4" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        "container": "1200px",
        "content": "720px",
      },
      borderRadius: {
        "card": "12px",
      },
    },
  },
  plugins: [typography],
};
export default config;
