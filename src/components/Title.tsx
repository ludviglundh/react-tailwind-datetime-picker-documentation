import classNames from 'classnames'
import { FC, PropsWithChildren, useState } from 'react'
import { Sizes } from 'types'

interface TitleSizes extends Pick<Sizes, 'xl' | '2xl' | '4xl' | '5xl'> {
  [key: string]: string
}

interface TitleProps extends PropsWithChildren {
  size?: keyof TitleSizes
  url: string
}

const Title: FC<TitleProps> = ({ children, size = '4xl', url }) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <h1
      className={classNames(
        'relative text-gray-700 font-bold dark:text-white/70 mb-2',
        `text-${size}`
      )}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <a
        href={url}
        className={classNames(
          'text-primary absolute -left-8 cursor-pointer transition-all duration-150',
          show ? 'opacity-1' : 'opacity-0'
        )}
      >
        #
      </a>
    </h1>
  )
}

export default Title
