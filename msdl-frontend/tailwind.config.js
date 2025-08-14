/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#0f172a', // Tailwind's slate-900
          light: '#1e293b',   // Tailwind's slate-800
        },
        'accent': {
          DEFAULT: '#3b82f6', // Tailwind's blue-500
          hover: '#2563eb',   // Tailwind's blue-600
        }
      }
    },
  },
  plugins: [
  require('@tailwindcss/typography'),
],
}