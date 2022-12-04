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
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: 'historyDetail',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // // More products...
  ]
  
function History() {
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
    <header className="bg-yellow-300">
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center tracking-tight text-indigo-800">title</h1>
      <h2 className="text-2xl font-medium text-center tracking-tight text-indigo-800">description</h2>
    </div>
  </header>
  <label className="py-px block text-base text-center bg-blue-700 font-medium text-yellow-300">Click the vote button to submit your choice.</label>
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
  {products.map((choice) => (
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src='https://statik.tempo.co/data/2022/10/21/id_1150509/1150509_720.jpg'
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm font-semibold text-indigo-800">
              <button
              >
                <span aria-hidden="true" className="absolute inset-0" />
                {choice.name}
              </button>
            </h3>
            <p className="mt-1 text-sm text-indigo-800">{choice.description}</p>
          </div>
          <p className="text-sm font-medium text-indigo-800">1</p>
          
        </div> 
        <button
                type="button"
                href="#"
                className="flex w-full items-center justify-center my-3 rounded-md border border-transparent bg-blue-700 py-2 px-20 text-sm font-medium text-yellow-300 shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2"
              >
                View History
        </button>
      </div>
      
    ))}
  </div>
</div>
  </div>
        )
      }
    
    export default History;