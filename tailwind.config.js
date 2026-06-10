/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#FAFAF9',
        'bg-secondary': '#F5F5F4',
        'bg-surface': '#FFFFFF',
        // Text
        'text-primary': '#1C1917',
        'text-secondary': '#57534E',
        // Accents
        'gold': '#C5A059',
        'gold-hover': '#A88746',
        'warm-sand': '#E6DFD4',
        // Dark
        'charcoal': '#1C1917',
        'charcoal-light': '#292524',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'Georgia', 'serif'],
        'body': ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'arch': '50% 50% 0 0',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(28, 25, 23, 0.06)',
        'card': '0 4px 32px rgba(28, 25, 23, 0.08)',
        'lifted': '0 8px 48px rgba(28, 25, 23, 0.12)',
        'gold': '0 4px 24px rgba(197, 160, 89, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
