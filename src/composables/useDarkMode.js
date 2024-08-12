import { ref } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)

  const setDarkMode = (value) => {
    isDark.value = value
    if (value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!isDark.value)
  }

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
    }
  }

  initializeTheme()

  return {
    isDark,
    toggleDarkMode,
  }
}