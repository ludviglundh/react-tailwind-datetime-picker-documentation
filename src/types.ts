// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any

export interface Sizes {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  '7xl': string
}

export interface IconProps {
  className?: string
}

export type Mode = 'light' | 'dark'

export interface ThemeContextType {
  theme: Mode
  changeTheme: (theme: Mode) => void
}
