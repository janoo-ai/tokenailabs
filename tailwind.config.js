/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        "trans-black": "rgba(0,0,0, 0.3)",
        "trans-blacked": "rgba(0,0,0, 0.6)",
        "trans-blackeded": "rgba(0,0,0, 0.8)",
        "trans-blackededed": "rgba(0,0,0, 0.9)",
      },
    },
  },
  plugins: [],
};
