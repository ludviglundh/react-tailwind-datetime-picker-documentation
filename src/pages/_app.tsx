import '../../styles/globals.css'
import type { Any } from 'types'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import ThemeProvider from 'providers/ThemeProvider'

type AppPropsWithLayout = AppProps & {
  Component: {
    // too lazy...
    getLayout?: (page: Any) => ReactNode
  }
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <ThemeProvider>
      {getLayout(<Component {...pageProps} />)}
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
