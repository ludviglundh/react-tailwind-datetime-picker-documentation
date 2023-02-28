// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any

export interface IconProps {
  className?: string
}

export type Mode = 'light' | 'dark'

export interface ThemeContextType {
  theme: Mode
  changeTheme: (theme: Mode) => void
}
