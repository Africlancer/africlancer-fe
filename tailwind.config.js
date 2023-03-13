/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'project-hero-pattern': "url('../../public/abs.jpg')",
        'browse-hero-pattern': "url('../../public/b-h.jpg')",
      },
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
        cusw: '35rem',
        cusw2: '40rem',
        cusw3: '50rem'
      },
      colors: 
      {
        overlay: '#0000004d',
        overlay2: '#00000080',
        footer: '#202020'
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
           base: 'var(--color-base)',
           alt: 'var(--color-alt)',
           muted: 'var(--color-muted)',
           accent: 'var(--color-accent)',
           inverted: 'var(--color-inverted)',
           input: 'var(--color-input)'
        }
      },
      backgroundColor: 
      {
        skin: {
          base: 'var(--color-base)',
          alt: 'var(--color-alt)',
          muted: 'var(--color-muted)',
          accent: 'var(--color-accent)',
          inverted: 'var(--color-inverted)',
          input: 'var(--color-input)',
          nav: 'var(--color-nav)',
          submenu: 'var(--color-submenu)'
       }
      },
      borderColor:
      {
        skin: {
          border: 'var(--color-border)'
        }
      }
    },
  },
  plugins: [],
}
