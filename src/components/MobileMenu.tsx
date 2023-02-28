import type { FC } from 'react'
import type { LinkType } from './Navigation'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CloseIcon, GithubIcon, MenuIcon } from './Icons'
import Link from 'next/link'
import { githubURL } from '../constants'

const MobileMenu: FC<{ links: LinkType[] }> = ({ links }) => {
  return (
    <Menu as="div" className="md:hidden relative">
      <Menu.Button>
        {({ open }) => <>{open ? <CloseIcon /> : <MenuIcon />}</>}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-90"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-90"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg overflow-hidden border-2 dark:border-slate-600">
          {links.map((link) => (
            <Menu.Item key={link.title}>
              <Link href={link.url} className="w-full block px-4 py-2">
                {link.title}
              </Link>
            </Menu.Item>
          ))}
          <Menu.Item>
            <Link
              href={githubURL}
              target="_blank"
              className="w-full px-4 py-2 flex items-center gap-2"
            >
              <span>Github</span>
              <GithubIcon />
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MobileMenu
