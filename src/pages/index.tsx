import Features from 'components/Features'
import Hero from 'components/Hero'
import Head from 'next/head'
import { ReactElement } from 'react'
import RootLayout from 'layouts/RootLayout'

const Index = () => {
  return (
    <div>
      <Head>
        <title>React Tailwind Datetime Picker</title>
      </Head>
      <div className="lg:container max-md:px-4 flex flex-1 flex-col items-start justify-between w-full">
        <Hero />
        <Features />
      </div>
    </div>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>
}

export default Index
