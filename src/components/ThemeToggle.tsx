import { Menu, Transition } from '@headlessui/react'
import { useThemeContext } from 'providers/ThemeProvider'
import type { FC } from 'react'
import React from 'react'
import { Any } from 'types'
import { MoonIcon, SunIcon } from './Icons'

const ThemeToggle: FC = () => {
  const { theme, changeTheme } = useThemeContext()

  return (
    <Menu as="div" className="relative inline-block mt-1">
      <Menu.Button>
        {(() => {
          switch (theme) {
            case 'dark':
              return <MoonIcon className="h-full" />

            default:
              return <SunIcon className="h-full" />
          }
        })()}
      </Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-90"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-90"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg overflow-hidden border-2 dark:border-slate-600">
          {['light', 'dark'].map((type: string, index: number) => {
            return (
              <Menu.Item key={index}>
                <button
                  className="flex items-center gap-2 px-3 py-2 text-gray-900 w-full hover:bg-slate-400 dark:hover:bg-slate-600 hover:text-white dark:text-white dark:hover:text-white/90 transition-hover duration-200"
                  onClick={() => changeTheme(type as Any)}
                >
                  {(() => {
                    switch (type) {
                      case 'light':
                        return <SunIcon />

                      default:
                        return <MoonIcon />
                    }
                  })()}
                  <span>{type}</span>
                </button>
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default ThemeToggle
