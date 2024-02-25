/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "#__next",
  theme: {
    extend: {
      colors: {
        "primaryColor":"#434371",
        "secondaryColor":"#F0F4EF",
        "tertiaryColor":"#022636",
        "assentColor":"#145369",
        "assentColorDarker":"#104254",
        "backgroundColor":"#FFFFFF",
        "whiteColor":"#FFFFFF",
        "grayColor":"#929EAD",
        "textColor":"#000000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
