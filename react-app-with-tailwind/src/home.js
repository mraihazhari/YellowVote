import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from "react";
import { Helmet } from "react-helmet";
import newpolling from './image/newpoll.png';
import searchpolling from './image/searchpoll.png';
import historypolling from './image/historypoll.png'

const navigation = [
  { name: 'YellowVote', href: './home', current: true },
  { name: 'Create', href: './CreatePoll', current: false },
  { name: 'Search', href: './searchPoll', current: false },
  { name: 'History', href: './history', current: false },
  { name: 'Change Account', href: './landing', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const icon = [
    {
      id: 1,
      name: 'Create a Poll',
      href: './CreatePoll',
      imageSrc: newpolling,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Search a Poll',
      href: './searchPoll',
      imageSrc: searchpolling,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'View History',
      href: './history',
      imageSrc: historypolling,
      imageAlt: 'Person using a pen to cross a task off a iconivity paper card.',
    },
    
  ]

function Home() {
  return (
    
    <div className="relative overflow-hidden bg-yellow-300">
      <Helmet>
        <style>{"body { background-color: rgb(253 224 71); }"}</style>
      </Helmet>
      <Disclosure as="nav" className="bg-blue-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-14 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-0 flex items-baseline space-x-2">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-yellow-300 text-blue-800'
                                : 'text-yellow-300 hover:bg-yellow-300 hover:text-blue-800',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-yellow-300 text-blue-800' : 'text-yellow-300 hover:bg-yellow-300 hover:text-blue-800',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block text-indigo-800 xl:inline">Hello! What Would You Like To Do?</span>{' '}
              </h1>
              <p className="mt-3 text-base font-bold text-indigo-800 sm:mx-auto sm:mt-5 sm:max-w-full sm:text-lg md:mt-7 md:text-2xl lg:mx-0">
              Create a new poll, insert a VoteCode, or view your poll history.
              </p>
            </div>
            <div className="bg-yellow-300">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    {icon.map((icon) => (
                        <a key={icon.id} href={icon.href} className="group">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                            src={icon.imageSrc}
                            alt={icon.imageAlt}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                            <div className="rounded-md shadow">
                              <a
                                href= {icon.href}
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-700 px-8 py-3 text-base font-bold text-yellow-300 hover:bg-indigo-800 md:py-4 md:px-10 md:text-2xl"
                              >
                                {icon.name}
                              </a>
                            </div>
                          </div>
                        </a>

                    ))}
                    </div>
                </div>
                </div>
          </main>
        </div>
  )
}


export default Home;