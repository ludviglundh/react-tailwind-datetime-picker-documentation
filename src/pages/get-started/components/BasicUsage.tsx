import CodeBlock from 'components/CodeBlock'
import {
  Bracket,
  Import,
  Indent,
  Keyword,
  Module,
  LightBlue,
  Variable,
  Element,
  Comment,
} from 'components/MarkdownComponents'
import Title from 'components/Title'
import { DocumentLink } from 'layouts/DocumentLayout'
import { FC } from 'react'

interface BasicUsageProps {
  link: DocumentLink
}

const BasicUsage: FC<BasicUsageProps> = ({ link }) => {
  return (
    <div className="w-full overflow">
      <Title url={link.url}>{link.title}</Title>
      <br />

      <div className="mb-2">
        <span>Add the datetimepicker to your tailwind configuration:</span>
      </div>
      <CodeBlock>
        <Comment>{'// in the tailwind.config.js'}</Comment>
        <LightBlue>module.exports = {'{'}</LightBlue>
        <br />
        <Indent>
          <Comment>{'// ...'}</Comment>
          <Element>content</Element>
          <LightBlue>:</LightBlue> [
          <br />
          <Indent>
            <LightBlue>{`"`}</LightBlue>
            <Module>{'./src/**/*.{js,jsx,ts,tsx}'}</Module>
            <LightBlue>{`"`}</LightBlue>, <br />
            <LightBlue>{`"`}</LightBlue>
            <Module>
              {
                './node_modules/react-tailwind-datetime-picker/dist/index.esm.mjs'
              }
            </Module>
            <LightBlue>{`"`}</LightBlue>, <br />
          </Indent>
          ]
          <br />
          <Comment>{'// ...'}</Comment>
        </Indent>
        <LightBlue>{'}'}</LightBlue>
      </CodeBlock>
      <br />

      <div className="mb-2">
        <span>Usage in app:</span>
      </div>

      <CodeBlock>
        <Import>import</Import> <Bracket>{'{'}</Bracket>{' '}
        <Element>useState</Element> <Bracket>{'}'}</Bracket>{' '}
        <Import>from</Import> <Module>react</Module>
        <br />
        <Import>import</Import> <Element>DatetimePicker</Element>{' '}
        <Import>from</Import>
        <Module> &quot;react-tailwind-datetime-picker&quot;</Module>
        <br />
        <br />
        <Keyword>const</Keyword> App <LightBlue>= </LightBlue>
        <Bracket>{'('}</Bracket>
        <Bracket>{')'}</Bracket>
        <Keyword> {'=>'} </Keyword>
        <Bracket>{'{'}</Bracket>
        <Indent>
          <Keyword>const</Keyword>
          <Bracket> [</Bracket>
          <Variable>value, setValue</Variable>
          <Bracket>]</Bracket>
          <LightBlue> = useState</LightBlue>
          <Keyword>(</Keyword>
          <LightBlue>{'{'}</LightBlue>
          <Indent>
            start: <LightBlue>dayjs</LightBlue>
            <Bracket>()</Bracket>,
            <br />
            end: <LightBlue>dayjs</LightBlue>
            <Bracket>(</Bracket>
            <LightBlue>dayjs</LightBlue>
            <Bracket>()</Bracket>.<LightBlue>month</LightBlue>
            <Bracket>(</Bracket>
            <LightBlue>dayjs</LightBlue>
            <Bracket>()</Bracket>.<LightBlue>month</LightBlue>
            <Bracket>()</Bracket> + 1<Bracket>)</Bracket>
          </Indent>
          <LightBlue>{'}'}</LightBlue>
          <Bracket>)</Bracket>
          <br />
          <br />
          <Keyword>const</Keyword> <LightBlue>handleOnChange = </LightBlue>
          <Bracket>(</Bracket>
          <Variable>nextRange</Variable>
          <Bracket>)</Bracket>
          <Keyword> {'=>'} </Keyword>
          <LightBlue>setValue</LightBlue>
          <Bracket>(</Bracket>
          <Variable>nextValue</Variable>
          <Bracket>)</Bracket>
          <br />
          <br />
          <Keyword>return</Keyword>
          <Bracket> (</Bracket>
          <Indent>
            {'<'}
            <Bracket>{'DatetimePicker'}</Bracket>
            <Indent>
              <Variable>value</Variable>=<Bracket>{'{'}</Bracket>
              value
              <Bracket>{'}'}</Bracket>
              <br />
              <Variable>onChange</Variable>=<Bracket>{'{'}</Bracket>
              handleOnChange
              <Bracket>{'}'}</Bracket>
            </Indent>
            {'/>'}
          </Indent>
          <Bracket>)</Bracket>
        </Indent>
        <Bracket>{'}'}</Bracket>
        <br />
        <br />
        <Keyword>export default</Keyword> App
      </CodeBlock>
    </div>
  )
}

export default BasicUsage
