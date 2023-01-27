/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: 
      {
        cs: '1300px',
        cs_1: '880px',
        cs2: '1250px',
        cs3: '1037px',
        cs4: '950px',
        cs5: '850px',
        cs6: '705px',
      },
      width:
      {
        cusw: '30rem'
      },
      colors: 
      {
        overlay: '#0000004d',
        overlay2: '#00000080',
        footer: '#090a16'
      },
      fontSize:
      {
        cusf: ['2.70rem'],
        cusf2: ['1.3rem'],
        cusf3: ['0.9rem']
      },
      textColor: 
      {
        skin: {
           base: 'var(--color-text-base)',
           muted: 'var(--color-text-muted)',
           primary: 'var(--color-text-primary)',
           default: 'var(--color-text-default)'
        }
      },
      backgroundColor: 
      {
        skin: {
          base: 'var(--color-bg-fill-base)',
          muted: 'var(--color-bg-fill-muted)',
          primary: 'var(--color-bg-fill-primary)',
          alt: 'var(--color-bg-fill-alt)',
          default: 'var(--color-bg-fill-default)',
          nav: 'var(--color-bg-fill-nav)'
        }
      }
    },
  },
  plugins: [],
}
