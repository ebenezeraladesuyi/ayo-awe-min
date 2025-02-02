// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily:{
//         mont : ['Montserrat', 'sans-serif'],
//         pop : ['Poppins', 'sans-serif'],
//       },
//       backgroundImage: {
//         'hero-bg' : "url('/src/assets/images/hero/hero1.jpg')",
//       }
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        mont : ['Montserrat', 'sans-serif'],
        pop : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg' : "url('/src/assets/images/hero/hero1.jpg')",
      },
    },
  },
  plugins: [],
};
