import type { Mode, ThemeContextType } from 'types'
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  changeTheme: (theme: Mode) => {},
})

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Mode>('light')

  const changeTheme = useCallback((nextTheme: Mode) => {
    localStorage.theme = nextTheme
    setTheme(nextTheme)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    [changeTheme, theme]
  )

  useEffect(() => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)')

    function changeTheme(event: MediaQueryListEvent) {
      if (!localStorage.theme) {
        if (event.matches && theme !== 'dark') {
          setTheme('dark')
        }

        if (!event.matches && theme !== 'light') {
          setTheme('light')
        }
      }
    }

    dark.addEventListener('change', changeTheme)

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }

    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    }

    return () => {
      dark.removeEventListener('change', changeTheme)
    }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  return context
}

export default ThemeProvider

ThemeContext.displayName = 'ThemeContext'
