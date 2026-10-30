/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        primary: '#4f60fa',
        heading: '#0f172a',
        body: '#475569',
        border: '#e2e8f0',
        card: "hsl(var(--card, 0 0% 100%))",
        "card-foreground": "hsl(var(--card-foreground, 0 0% 0%))",
        muted: "hsl(var(--muted, 210 40% 96.1%))",
        "muted-foreground": "hsl(var(--muted-foreground, 215.4 16.3% 46.9%))"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
