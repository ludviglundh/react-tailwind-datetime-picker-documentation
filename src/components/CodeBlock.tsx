import classNames from 'classnames'
import { FC, PropsWithChildren, useRef, useState } from 'react'
import { ClipboardIcon } from './Icons'

const CodeBlock: FC<PropsWithChildren<{ allowCopy?: boolean }>> = ({
  children,
  allowCopy = true,
}) => {
  const [copied, setCopied] = useState<boolean>(false)
  const ref = useRef<HTMLSpanElement>(null)

  const onCopyClick = () => {
    setCopied(true)

    if (ref.current) {
      navigator.clipboard.writeText(
        ref.current.innerText.slice(2, ref.current.innerText.length)
      )
    }

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div className="bg-zinc-800 px-8 py-6 text-white dark:text-white/80 rounded-xl flex items-center justify-between overflow-x-auto">
      <div className="overflow-x-scroll z-0">
        <pre>
          <code ref={ref}>{children}</code>
        </pre>
      </div>

      {allowCopy && (
        <div className="inline-flex gap-2 self-start">
          <div
            className={classNames(
              'bg-zinc-700 px-2 rounded-md transition-all duration-200 ease-in-out',
              copied ? 'opacity-1' : 'opacity-0'
            )}
          >
            <span>Copied</span>
          </div>

          <button onClick={onCopyClick}>
            <ClipboardIcon />
          </button>
        </div>
      )}
    </div>
  )
}
export default CodeBlock
