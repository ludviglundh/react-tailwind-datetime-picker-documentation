import classNames from 'classnames'
import type { ComponentProps, FC, PropsWithChildren } from 'react'

const DocumentSection: FC<PropsWithChildren<ComponentProps<'div'>>> = ({
  children,
  className,
}) => {
  return (
    <div
      id="document-section"
      className={classNames(
        'w-full h-fit flex flex-col gap-2 border-b border-gray-400 dark:border-zinc-700 pb-10 pt-4 dark:text-white/80 text-gray-800',
        className
      )}
    >
      <div className="lg:w-9/12 max-md:w-full">{children}</div>
    </div>
  )
}

export default DocumentSection
