import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '425px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    extend: {
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      colors: {
        'cyber-blue': '#00f0ff',
        'cyber-purple': '#8b5cf6',
        'cyber-pink': '#ec4899',
        'neon-green': '#39ff14',
        'dark-bg': '#0a0a0f',
        'dark-card': '#1a1a2e',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 15px #00f0ff' },
          '100%': { boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
export default config


