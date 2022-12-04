import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Helmet } from "react-helmet";

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

//nanti pake GET dari database
const polls = [
  {
    id: 1,
    name: 'Siapakah GOAT Yang Sebenarnya?',
    href: './home',
    description: 'Penentuan siapakah yang sebenarnya merupakan GOAT',
    imageSrc: 'https://statik.tempo.co/data/2022/10/21/id_1150509/1150509_720.jpg',
    
  },
  {
    id: 2,
    name: 'Tim manakah yang akan menjuarai piala dunia?',
    href: './home',
    description: 'Penentuan tim manakah yang akan menjadi juara piala dunia',
    imageSrc: 'https://akcdn.detik.net.id/visual/2022/11/22/arab-saudi-vs-argentina-di-piala-dunia-2022-6_169.jpeg?w=650',
    
  },
  
]
  
function History() {
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
              <div className="w-full max-w-md space-y-28">
                <div>
                  <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-indigo-800">
                    Poll History
                  </h2>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
	          {polls.map((poll) => (
		        <div key={poll.id} className="group relative">
			        <div className="min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
				        <img
                  src={poll.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              
              <div className="mt-4 flex justify-between">
                <div>
                <h3 className="text-sm font-bold text-indigo-800">
                    <a  href={poll.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {poll.name}
                    </a>
                </h3>
                  <p className="mt-1 text-sm text-indigo-800">{poll.description}</p>
                </div>
              </div> 

            </div>
          ))}
        </div>

            </div>
            
          </>
        )
      }
    
    export default History;