/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/context/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme - Navy Blue & Teal
        primary: {
          light: "#003D99",
          dark: "#7C3AED",
        },
        accent: {
          light: "#00A088",
          dark: "#06B6D4",
        },
        // Backgrounds
        background: {
          light: "#F5F5F7",
          dark: "#1A1A2E",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#2D2D4A",
        },
        // Borders & Dividers
        border: {
          light: "#D0D0D5",
          dark: "#3E3E5C",
        },
        // Text Colors
        text: {
          primary: "#000000",
          secondary: "#60646C",
          tertiary: "#999999",
          dark: "#FFFFFF",
          darkSecondary: "#B0B4BA",
          darkTertiary: "#808080",
        },
      },
      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        full: "9999px",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "19px" }],
        lg: ["18px", { lineHeight: "24px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["28px", { lineHeight: "36px" }],
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Inter", "monospace"],
      },
    },
  },
  plugins: [],
};
