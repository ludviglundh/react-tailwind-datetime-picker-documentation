import Link from 'next/link'
import { FC } from 'react'

interface Feature {
  icon: string
  title: string
  description: string
  link?: string
  linkText?: string
}

const Features: FC = () => {
  const features: Feature[] = [
    {
      icon: '🕰',
      title: 'Time picker Included',
      description:
        'React Tailwind Datetime Picker has a timepicker component included, which means youll never nead to search for separate repos again',
      link: '',
      linkText: '',
    },
    {
      icon: '🤙',
      title: 'Customisable',
      description:
        'React Tailwind Datetime Picker is highly customisable, as it supports lots of props such as range, single dates, min- and maxDate and more',
      link: '',
      linkText: '',
    },
    {
      icon: '💍',
      title: 'Custom Theme',
      description:
        'With React Tailwind Datetime Picker you can pass your own theme, customising the component however you want to, if you want to',
      link: '',
      linkText: '',
    },
  ]

  return (
    <div className="w-full h-full py-10">
      <ul className="flex items-center gap-2 wrap max-md:flex-col">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="p-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex flex-col flex-1"
          >
            <span className="text-4xl p-4 bg-zinc-900/80 w-fit h-fit rounded-lg mb-4">
              {feature.icon}
            </span>
            <span className="text-black/70 dark:text-white/70 font-semibold text-lg ">
              {feature.title}
            </span>
            <span className="text-zinc-600">{feature.description}</span>
            {feature.link && (
              <Link href={feature.link}>{feature.linkText}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Features
