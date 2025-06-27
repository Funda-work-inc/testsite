/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5A2B',
          light: '#A67C52',
          dark: '#6F4518',
        },
        secondary: {
          DEFAULT: '#D2B48C',
          light: '#E6D2B8',
          dark: '#BD9C78',
        },
        accent: {
          DEFAULT: '#BF4342',
          light: '#D46A68',
          dark: '#A02F2E',
        },
        cream: {
          DEFAULT: '#F5F0E1',
          light: '#FBF9F3',
          dark: '#E6DBC8',
        },
        charcoal: {
          DEFAULT: '#2E2E2E',
          light: '#555555',
          dark: '#1A1A1A',
        },
        success: {
          DEFAULT: '#4CAF50',
          light: '#7BC67F',
          dark: '#3B873E',
        },
        warning: {
          DEFAULT: '#FF9800',
          light: '#FFAC33',
          dark: '#CC7A00',
        },
        error: {
          DEFAULT: '#F44336',
          light: '#F77066',
          dark: '#D32F2F',
        },
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg')",
        'texture': "url('https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};