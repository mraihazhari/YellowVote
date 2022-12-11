import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Helmet } from "react-helmet";

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

  var history = JSON.parse(sessionStorage.getItem('history'));
  console.log(history);

  function handle(poll_code){

    console.log(poll_code);
    sessionStorage.setItem('token', poll_code);
    window.location.href = './countVote';

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
              <div className="w-full max-w-md space-y-28">
                <div>
                  <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-indigo-800">
                    Poll History
                  </h2>
                  
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            {history.data?.map((poll) => (
              <p href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Logo_vote.svg/2048px-Logo_vote.svg.png" alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{poll.attributes.title}</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{poll.attributes.description}</p>
                  <button  onClick={() => handle(poll.attributes.poll_code)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View History & Results
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
              </div>
          </p>
            ))}
          </div>
            </div>
            
          </>
        )
      }
    
    export default History;