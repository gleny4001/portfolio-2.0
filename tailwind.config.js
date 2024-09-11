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
      },


      animation: {
        'text-slide': 'text-slide 24s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 12.5%': {
            transform: 'translateY(0%)',
          },
          '14.28%, 26.78%': {
            transform: 'translateY(-12.5%)',
          },
          '28.57%, 41.07%': {
            transform: 'translateY(-25%)',
          },
          '42.85%, 55.35%': {
            transform: 'translateY(-37.5%)',
          },
          '57.14%, 69.64%': {
            transform: 'translateY(-50%)',
          },
          '71.42%, 83.92%': {
            transform: 'translateY(-62.5%)',
          },
          '85.71%, 98.21%': {
            transform: 'translateY(-75%)',
          },
          '100%': {
            transform: 'translateY(-87.5%)',
          },
      },
    },
    
    fontFamily: {
      'abrilFatface': ['Abril Fatface'],
      'montserrat':['Montserrat']
    }
    
  },
  plugins: [],
}
}
