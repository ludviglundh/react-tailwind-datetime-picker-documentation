import Title from 'components/Title'
import { DocumentLink } from 'layouts/DocumentLayout'
import { FC } from 'react'

interface IntroductionProps {
  links: DocumentLink[]
}

const Introduction: FC<IntroductionProps> = ({ links }) => {
  return (
    <>
      <Title url={links[0].url}>{links[0].title}</Title>

      <div className="pl-[18px]">
        <ul className="list-disc dark:marker:text-white/80 marker:text-gray-800 flex flex-col gap-2">
          {links.map((link) => (
            <li className="text-primary hover:underline" key={link.title}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Introduction
