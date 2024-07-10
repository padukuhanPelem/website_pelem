/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#254336',
        'secondary': '#6B8A7A',
        'third': '#B7B597',
        'fourth': '#DAD3BE',
        'gold': '#FF8C00'
      }
    },
  },
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        'tailwindcss',
        'autoprefixer',
      ],
    },
  },
}