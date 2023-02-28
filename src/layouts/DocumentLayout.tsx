import Aside from 'components/Aside'
import Navigation from 'components/Navigation'
import { FC, PropsWithChildren } from 'react'

export type DocumentLink = {
  title: string
  url: string
}

interface DocumentProps extends PropsWithChildren {
  links: DocumentLink[]
}

const DocumentLayout: FC<DocumentProps> = ({ children, links }) => {
  return (
    <>
      <Navigation />
      <div className="flex lg:justify-between w-screen h-full">
        <aside className="h-screen overflow-y-auto lg:w-[290px] left-0 pt-28 px-8 flex fixed max-md:hidden">
          <span>hej</span>
        </aside>
        <main className="lg:w-full h-full pt-28 max-md:pt-28 dark:bg-slate-800 lg:pl-[310px] lg:pr-[310px] flex flex-col max-md: px-10">
          {children}
        </main>
        <Aside links={links} />
      </div>
    </>
  )
}

export default DocumentLayout
