import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-inconsolata)', 'monospace'],
      },
    },
  },
  corePlugins: { 
    preflight: true 
  },
  plugins: [],
} satisfies Config
