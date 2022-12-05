import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Helmet } from "react-helmet";
import Axios from 'axios';
import React, { useState } from "react";

const navigation = [
  { name: 'YellowVote', href: './home', current: true },
  { name: 'Create', href: './CreatePoll', current: false },
  { name: 'Search', href: './searchPoll', current: false },
  { name: 'History', href: './gethistory', current: false },
  { name: 'Change Account', href: './landing', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SearchPoll() {


  const [token_data, settoken_data] = useState({
    poll_code: ""
  })
  function handle(e){
    const newtoken_data = {...token_data}
    newtoken_data[e.target.id] = e.target.value
    settoken_data(newtoken_data)
    console.log(newtoken_data)
  }

  function submit(e){
    e.preventDefault()
    let item = token_data;
    sessionStorage.setItem("token", item.poll_code)
    window.open("\getPoll", "_self");
  }
  return (
    <>
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

      <Helmet>
        <style>{"body { background-color: rgb(253 224 71); }"}</style>
      </Helmet>

      <div className="flex bg-yellow-300 min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-indigo-800">
              Insert Your VoteCode
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {' '}
              <a className="font-medium text-indigo-800">
                It is a unique code given by the poll creator
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={(e) => submit(e)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="vote-code" className="sr-only">
                  VoteCode
                </label>
                <input
                  onChange={(e)=>handle(e)}
                  value={token_data.poll_code}
                  id="poll_code"
                  name="poll_code"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Insert VoteCode"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  
                </span>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SearchPoll;