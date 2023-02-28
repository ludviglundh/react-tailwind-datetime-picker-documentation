import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import type { FC, PropsWithChildren } from 'react'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className="h-full w-full py-80 max-md:pt-40 flex flex-col items-center bg-white dark:bg-slate-800">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
