import Features from 'components/Features'
import Footer from 'components/Footer'
import Hero from 'components/Hero'
import Navigation from 'components/Navigation'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React Tailwind Datetime Picker</title>
      </Head>
      <Navigation />
      <main className="h-full w-full py-80 max-md:pt-40 flex flex-col items-center bg-white dark:bg-slate-800">
        <div className="lg:container max-md:px-4 flex flex-1 flex-col items-start justify-between w-full">
          <Hero />
          <Features />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
