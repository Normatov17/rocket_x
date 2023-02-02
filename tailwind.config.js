/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        base: '1308px',
        base1: '991px',
        '1412': '1412px',
        '603': '603px',
        '401': '401px',
        '761': '761px',
        '651': '651px',
        '465': '465px',
        '450': '450px',
        '768': '768px',
        '1024': '1024px'
      },

      fontSize: {
        '50': '50px'
      },  
      
      colors: {
        brand:{
          "black":"#121229",
          "light-black":"#39394f",
          "gray":"#e6e6ed",
          blue:{
            300:"#e1e0ff",
            400:"#0082f3",
          },
          "orange":"#ffe4b0",
          teal:{
            300:"#c3edff",
            400:"#e6f1ff",
            21: '#E6F1FF',
            22: '#F2EAFF'
          },
        }
        
      },

      keyframes: {
        spin: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
       },
       animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        spin: 'spin 30s linear infinite',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        bounce: 'bounce 2s linear infinite',
       },
    },
  },
  plugins: [],
}
