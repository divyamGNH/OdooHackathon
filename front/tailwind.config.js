/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1e2a43",
        "accent-blue": "#3b82f6",
        "accent-green": "#10b981",
        "accent-red": "#ef4444",
        "background-light": "#f6f7f7",
        "background-dark": "#15181d",
        "card-border": "#e2e8f0",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
