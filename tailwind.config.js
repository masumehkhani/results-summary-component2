/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        //Primary
        'light-red':'hsl(0, 100%, 95%)',
        'orangey-yellow':'hsl(39, 100%, 95%)',
        'green-teal':'hsl(166, 100%, 95%)',
        'coblat-blue':'hsl(234, 85%, 95%)',
        'light-reda':'hsl(0, 100%, 67%)',
        'orangey-yellowa':'hsl(39, 100%, 56%)',
        'green-teala':'hsl(166, 100%, 37%)',
        'coblat-bluea':'hsl(234, 85%, 45%)',
        //Gradients
        'light-slate-blue':'hsl(252, 100%, 67%)',
        'light-royal-blue':'hsl(241, 81%, 54%)',
        'violet-blue':'hsla(256, 72%, 46%, 1)',
        'persian-blue':'hsla(241, 72%, 46%, 0)',
        //Neutral
        'Pale-blue':'hsl(221, 100%, 96%)',
        'Light-lavender':'hsl(241, 100%, 89%)'
      },
      fontFamily: {
        fontFamily: ['HankenGrotesk-Medium','HankenGrotesk-Bold','HankenGrotesk-ExtraBold', 'sans'],
      }, 
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'HankenGrotesk-Bold',
          src: 'url(../src/assets/fonts/HankenGrotesk-Bold.woff2)',
        },
      });
      
      addBase({
        '@font-face': {
          fontFamily: 'HankenGrotesk-ExtraBold',
          src: 'url(../src/assets/fonts/HankenGrotesk-ExtraBold.woff2)',
        },
      });
  
      addBase({
        '@font-face': {
          fontFamily: 'HankenGrotesk-Medium',
          src: 'url(../src/assets/fonts/HankenGrotesk-Medium.woff)',
        },
      });
    },
  ],
  
}
