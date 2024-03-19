import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/renderer/index.html', './src/renderer/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#409EFF',
        success: '#67C23A',
        warning: '#E6A23C',
        danger: '#F56C6C',
        info: '#909399',
        'primary-light': '#ecf5ff',
        'success-light': '#f0f9eb',
        'warning-light': '#fdf6ec',
        'danger-light': '#fef0f0',
        'info-light': '#f4f4f5',
        'text-primary': '#303133',
        border: '#dcdfe6'
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center'
        },
        '.scroll-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      })
    })
  ]
}
