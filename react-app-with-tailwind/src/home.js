/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from "react";
import { Helmet } from "react-helmet";

const icon = [
    {
      id: 1,
      name: 'Create a Poll',
      href: './CreatePoll',
      imageSrc: 'https://i.ibb.co/199svFQ/newpoll.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Insert a VoteCode',
      href: './VoteCode',
      imageSrc: 'https://i.ibb.co/QCMJ1d1/searchpoll.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'View History',
      href: './ViewHistory',
      imageSrc: 'https://i.ibb.co/f1RC6RX/historypoll.png',
      imageAlt: 'Person using a pen to cross a task off a iconivity paper card.',
    },
  ]

function Home() {
  return (
    
    <div className="relative overflow-hidden bg-yellow-300">
        <Helmet>
        <style>{"body { background-color: rgb(253 224 71); }"}</style>
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-yellow-300 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-full lg:pb-28 xl:pb-32">
        
        <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt="Your Company"
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4 md:text-xl">
                  <a href="#" className="font-bold text-indigo-800 hover:text-indigo-800">
                    Change Account
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                  </div>
                  <a
                    href="#"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                  >
                    Log in hidden
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> 


          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block text-indigo-800 xl:inline">Hello! what would you like to do?</span>{' '}
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
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-bold text-yellow-300 hover:bg-indigo-700 md:py-4 md:px-10 md:text-2xl"
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
      </div>
    </div>
  )
}


export default Home;