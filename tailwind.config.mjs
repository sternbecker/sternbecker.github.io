import daisyui from 'daisyui';

export default {
  darkMode: false, // disable Tailwind dark mode
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'],
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],  // your custom theme
  },
};
