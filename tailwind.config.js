/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-bg-color' : '#0D7501',
        'secondary-bg-color' : '#9FBB00',
        'primary-text-color' : '#ffffff',
        'secondary-text-color' : '#5a5a5a',
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },
  },
  plugins: [],
}

