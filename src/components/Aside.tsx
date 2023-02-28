import classNames from 'classnames'
import { DocumentLink } from 'layouts/DocumentLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ComponentProps, FC, useCallback, useRef } from 'react'

interface AsideProps extends ComponentProps<'aside'> {
  links: DocumentLink[]
}

const Aside: FC<AsideProps> = ({ className, links = [], ...restProps }) => {
  const activeRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  const active = useCallback(
    (path: string) => {
      return path === router.pathname ? 'text-primary' : ''
    },
    [router.pathname]
  )

  return (
    <aside
      className={classNames(
        'h-screen fixed overflow-y-auto lg:w-[290px] right-0 pt-28 px-8 shadow-lg max-md:hidden',
        className
      )}
      {...restProps}
    >
      <div className="relative  border-l-2 border-zinc-500 h-fit w-full py-4">
        <div
          ref={activeRef}
          className="absolute transition-all duration-130 border w-[1px] h-[20px] left-[-2px] border-sky-200 top-[40px]"
        ></div>

        <div className="pl-4 w-full">
          <span className="font-semibold">On this page</span>
          <ul className="flex flex-col justify-between">
            {links.map((link) => (
              <li key={link.title} className="">
                <span></span>
                <Link href={link.url} className={classNames(active(link.url))}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Aside
