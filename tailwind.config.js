/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}",
"./index.html"],
  theme: {
    extend: {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    fontSize: '62.5%',
    width: {
      'calc-60-32': 'calc(60% - 32px)',
    },
    flexGrow: {
      4: '4'
    }
  },
  },
  plugins: [],
}

