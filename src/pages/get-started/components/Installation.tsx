import CodeBlock from 'components/CodeBlock'
import Title from 'components/Title'
import type { DocumentLink } from 'layouts/DocumentLayout'
import type { FC } from 'react'

interface InstallationProps {
  link: DocumentLink
}

const Installation: FC<InstallationProps> = ({ link }) => {
  return (
    <div className="w-full">
      <Title url={link.url}>{link.title}</Title>
      <br />
      <Title url="#install-with-npm" size="xl">
        Install with NPM
      </Title>
      <CodeBlock>$ npm install react-tailwind-datetime-picker</CodeBlock>
      <br />
      <Title url="#install-with-yarn" size="xl">
        Install with Yarn
      </Title>
      <CodeBlock>$ yarn add react-tailwind-datetime-picker</CodeBlock>
      <br />
      <br />
      <div className="flex flex-col gap-2">
        <span>Install peer dependencies as well with the versions below.</span>
        <CodeBlock allowCopy={false}>
          &quot;dayjs&quot;: &quot;^1.11.7&quot;, <br />
          &quot;react&quot;: &quot;^17.0.2 || ^18.2.0&quot;
        </CodeBlock>
      </div>
    </div>
  )
}
export default Installation
