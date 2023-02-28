import type { ReactElement } from 'react'
import DocumentLayout, { DocumentLink } from 'layouts/DocumentLayout'
import Head from 'next/head'
import DocumentSection from 'components/DocumentSection'
import { Installation, Introduction, Overview } from './components'
import BasicUsage from './components/BasicUsage'

const links: DocumentLink[] = [
  {
    title: 'Introduction',
    url: '#introduction',
  },
  {
    title: 'Overview',
    url: '#overview',
  },
  {
    title: 'Installation',
    url: '#installation',
  },
  {
    title: 'Basic Usage',
    url: '#basic-usage',
  },
  {
    title: 'Compatibility',
    url: '#compatibility',
  },
]

const Index = () => {
  return (
    <>
      <Head>
        <title>Get Started</title>
      </Head>
      <DocumentSection className="pt-0">
        <Introduction links={links} />
      </DocumentSection>
      <DocumentSection>
        <Overview link={links[1]} />
      </DocumentSection>
      <DocumentSection>
        <Installation link={links[2]} />
      </DocumentSection>
      <DocumentSection>
        <BasicUsage link={links[3]} />
      </DocumentSection>
    </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <DocumentLayout links={links}>{page}</DocumentLayout>
}

export default Index
