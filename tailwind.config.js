/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './src/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        styleSerif: "'Playfair Display', serif",
        styleMono: "'IBM Plex Mono', monospace",
      },
      colors: {
        colorNeutral: '#FAF2F0',
        colorNeutralDark: '#F1E7E3',
        colorNeutralLight: '',
        colorPrimary: '#629489',
        colorPrimaryLight: '',
        colorPrimaryDark: '',
        colorPrimaryContrast: '#f8fafc',
        // colorReactive: '#AB5232',
        colorReactive: '#B77149',
        colorReactiveLight: '#B77149',
        colorReactiveDark: '#92400e',
        colorReactiveContrast: '#f8fafc',
      },
      textColor: {
        colorPrimary: '#629489',
        colorPrimaryContrast: '#f8fafc',
        // colorReactive: '#AB5232',
        colorReactive: '#B77149',
        colorReactiveLight: '#B77149',
        colorReactiveDark: '#92400e',
        colorReactiveContrast: '#f8fafc',
        colorTitleDark: '#232323',
        colorTitleLight: '',
        colorRegularDark: '#444343',
        colorRegularLight: '',
        colorSubRegularDark: '#595959',
        colorSubRegularLight: '',
      },
      borderColor: {
        // colorReactive: '#AB5232',
        colorReactive: '#B77149',
        colorReactiveDark: '#92400e',
      },
      // colors: {
      //   colorNeutral: '#fafafa',
      //   colorPrimary: '#111827',
      //   colorPrimaryBlend: '',
      //   colorPrimaryContrast: '#e2e8f0',
      //   colorReactive: '#f87171',
      //   colorReactiveBlend: ''
      // },
      // textColor: {
      //   colorPrimary: '#111827',
      //   colorPrimaryBlend: '',
      //   colorPrimaryContrast: '#ffffff',
      //   colorReactive: '#f87171',
      //   colorReactiveBlend: '',
      //   colorReactiveContrast: '#ffffff',
      // },
      // borderColor: {
      //   colorReactive: '#f87171',
      // }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
