/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, // Untuk mengatur container agar selalu di tengah
      padding: '2rem', // Padding default untuk semua layar
      screens: {
        sm: '600px', // Ukuran container pada breakpoint sm
        md: '720px', // Ukuran container pada breakpoint md
        lg: '960px', // Ukuran container pada breakpoint lg
        xl: '1140px', // Ukuran container pada breakpoint xl
        '2xl': '1320px', // Ukuran container pada breakpoint 2xl
      },
    },
   
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#F86E6E",
      },
    },
  },
  plugins: [],
}

