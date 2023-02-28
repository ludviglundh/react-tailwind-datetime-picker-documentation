import type { FC, PropsWithChildren } from 'react'

const Import: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-violet-400">{children}</span>
}

const Json: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-rose-600">{children}</span>
}

const Module: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-green-500">{children}</span>
}

const Indent: FC<PropsWithChildren> = ({ children }) => {
  return <span className="pl-5 block">{children}</span>
}

const Bracket: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-yellow-300">{children}</span>
}

const Keyword: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-violet-400">{children}</span>
}

const Variable: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-orange-400">{children}</span>
}

const LightBlue: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-sky-500">{children}</span>
}

const Element: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-red-500">{children}</span>
}

export const Comment: FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="text-gray-500">
      {children} <br />
    </span>
  )
}

export {
  Import,
  Json,
  Module,
  Indent,
  Bracket,
  Variable,
  LightBlue,
  Keyword,
  Element,
}
