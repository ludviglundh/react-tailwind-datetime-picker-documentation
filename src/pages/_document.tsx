import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="scroll-smooth scroll-pt-[85px]">
      <Head />
      <body className="dark:bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
