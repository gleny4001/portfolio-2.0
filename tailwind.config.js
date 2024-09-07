/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {  fontSize: {
      'title': ['10rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],},
      colors:{
        background :"#fffaf0"
      }
    
    },
    
  },
  plugins: [],
}

