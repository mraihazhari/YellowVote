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

function CreatePoll() {
  
 // const createButton = () => {
   // const [pollName, setPollName] = useState([]);

    //useEffect(() => {
      //createPollApi.create().then(res => {
        //console.log(res);
      //})
    //}, []);
  
  //}
 

    return (
      <>
      <Helmet>
        <style>{"body { background-color: rgb(20 30 199); }"}</style>
      </Helmet>
      <div className="min-h-full">
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
          <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold tracking-tight text-indigo-800">Create A Poll</h1>
          </div>
        </header>
        <main className="bg-yellow-300">
        <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-yellow-300 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="title" className="block text-sm font-medium text-indigo-800">
                        Title
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-800 focus:ring-indigo-800 sm:text-sm"
                          placeholder="Enter poll title here"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-indigo-800">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-sm"
                        placeholder="Enter poll description here"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="py-5 block text-sm font-medium text-indigo-800">Cover photo</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-blue-700 py-12 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-indigo-800"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-yellow-300 font-medium text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <label className="py-px block text-base text-center rounded-md bg-blue-700 font-medium text-yellow-300">Insert a Choice</label>
                 <form action="#" method="POST">
                  <div className="grid grid-cols-5 gap-6">
                    <div className="col-span-3 sm:col-span-1">
                      <label htmlFor="number" className="block text-sm font-medium text-indigo-800">
                        Number
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-800 focus:ring-indigo-800 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-4">
                      <label htmlFor="name" className="block text-sm font-medium text-indigo-800">
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-800 focus:ring-indigo-800 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-indigo-800">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={2}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-sm"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="my-0 flex rounded-md py-12 px-1 pt-1 pb-6">
                      <div className="space-y-1">
                        
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload-choice"
                            className="relative cursor-pointer rounded-md bg-yellow-300 font-medium text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a photo</span>
                            <input id="file-upload-choice" name="file-upload-choice" type="file" className="sr-only" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="my-0 flex items-center">
                      <a
                        type="submit"
                        href="#"
                        className="ml-0 rounded-md border bg-blue-700 py-2 px-3 text-sm font-medium leading-4 text-yellow-300 shadow-sm hover:bg-blue-800  focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2"
                      >
                        Add choice
                      </a>
                    </div>
                  </div>
                </form>
                
                  <label className="py-px block text-base text-center rounded-md bg-blue-700 font-medium text-yellow-300">Registered Choices</label>

              </div>
                <div className="bg-yellow-300 px-4 py-8 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-yellow-300 shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
    )
  }

export default CreatePoll;

          
      
  