import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Helmet } from "react-helmet";
import { PaperClipIcon } from '@heroicons/react/20/solid'


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

function HistoryDetail() {
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
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">History Detail</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Candidate Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">*GET FROM DATABASE*</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">NPM</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">*GET FROM DATABASE*</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Major</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">*GET FROM DATABASE*</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Position</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">*GET FROM DATABASE*</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Description</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            *GET FROM DATABASE**GET FROM DATABASE**GET FROM DATABASE**GET FROM DATABASE**GET FROM DATABASE*
                            *GET FROM DATABASE**GET FROM DATABASE**GET FROM DATABASE**GET FROM DATABASE**GET FROM DATABASE*
                            *GET FROM DATABASE**GET FROM DATABASE**GET FROM DATABASE**GET FROM DATABASE**GET FROM DATABASE*
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                <div className="flex w-0 flex-1 items-center">
                                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-2 w-0 flex-1 truncate">*get from database*</span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    **
                                    </a>
                                </div>
                                </li>
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                <div className="flex w-0 flex-1 items-center">
                                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-2 w-0 flex-1 truncate">*get from database*</span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    **
                                    </a>
                                </div>
                                </li>
                            </ul>
                            </dd>
                        </div>
                        </dl>
                    </div>
                    </div>
                </div>
      )
    }

export default HistoryDetail;