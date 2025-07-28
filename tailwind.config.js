/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // React components
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb", // Light background color
        border: "#e5e7eb",     // Light gray border
        foreground: "#111827", // Dark gray text (you can change this)
      },
    },
  },
  plugins: [],
};