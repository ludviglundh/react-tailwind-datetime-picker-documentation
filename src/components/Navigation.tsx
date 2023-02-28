import { githubURL } from '../constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CalendarIcon, GithubIcon } from './Icons'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'

export interface LinkType {
  title: string
  url: string
}
const Navigation = () => {
  const router = useRouter()

  const navLinks: LinkType[] = [
    {
      title: 'Dashboard',
      url: '/',
    },
    {
      title: 'Get Started',
      url: '/install',
    },
    {
      title: 'Demo',
      url: '/demo',
    },
  ]

  return (
    <nav className="w-full fixed z-50 flex justify-center bg-white dark:bg-slate-800 dark:text-white/80 shadow-md">
      <div className="flex flex-1 items-center justify-between container py-4 px-4">
        <Link href="/" className="flex items-center gap-2 max-md:text-sm">
          <CalendarIcon className="stroke-primary" />
          <span>React Tailwind Datetime Picker</span>
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.title} className="hidden md:block">
              {link.title}
            </Link>
          ))}
          <div className="h-[15px] w-[1px] bg-slate-400 dark:bg-white/80 " />
          <Link href={githubURL} target="_blank" className="hidden md:block">
            <GithubIcon />
          </Link>
          <ThemeToggle />
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
