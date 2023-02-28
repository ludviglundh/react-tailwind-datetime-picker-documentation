import { githubURL } from '../constants'
import Link from 'next/link'
import React, { FC } from 'react'
import { CalendarIcon, ClockIcon, GithubIcon } from './Icons'

const Hero: FC = () => {
  return (
    <div className="flex items-start justify-between max-md:flex-col-reverse max-md:items-center w-full lg:pr-28">
      <div className="flex flex-col gap-1 items-start justify-center max-md:items-center max-md:px-4">
        <div className="text-primary text-2xl">
          <span>React Tailwind Datetime Picker</span>
        </div>
        <div className="text-6xl max-md:text-4xl text-gray-600 max-md:hidden">
          <span>
            The only datetimepicker <br /> youll ever need.
          </span>
        </div>
        <div className="text-xl text-gray-500">
          <span>Built using TailwindCSS and dayjs</span>
        </div>
        <div className="flex items-center w-full pt-4 gap-4">
          <Link
            href="/get-started"
            className="bg-primary text-white rounded-full border border-slate-300 dark:border-slate-400 px-4 py-2"
          >
            <span>Get Started</span>
          </Link>
          <Link
            href={githubURL}
            target="_blank"
            className="bg-slate-500 text-white rounded-full border-slate-300 dark:border-slate-400 px-4 py-2 border flex items-center gap-2"
          >
            <span>View on GitHub</span>
            <GithubIcon />
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <CalendarIcon className="w-40 h-40 stroke-primary" />
        <ClockIcon className="w-40 h-40 stroke-primary" />
      </div>
    </div>
  )
}

export default Hero
