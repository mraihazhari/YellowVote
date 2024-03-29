import { Disclosure, Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Helmet } from "react-helmet";
import React, { Fragment, useEffect, useState } from "react";
import Axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
var randomToken = require('random-token');

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

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    description: 'Salmon',
    number: '1',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    description: 'Blue',
    number: '2',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

const azhari = [
  {
    id: "",
    attributes: {
      candidate_name: "",
      candidate_number: "",
      description: "",
      poll_code: "",
      createdAt: "",
      updateAt: "",

    }
  }
]





function CreatePoll2() {
  const [candidates, setCandidates] = useState([]);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');
  var token = sessionStorage.getItem("token");
  console.log(token);
  var candidate_token = randomToken(8);

  useEffect(() => {
    Axios.get('https://strapi-production-5df9.up.railway.app/api/candidatenums', {
      params: {
        "filters[poll_code][$eq]": token
      }
    }).then((res) => {
      console.log(res.data);
      setCandidates(res.data);
    });
  }, []);

  console.log(candidates);

  const [poll_data, setpoll_data] = useState({
    candidate_number: "",
    candidate_name: "",
    description: "",
    poll_code: ""
    
  })
  function handle(e){
    const newpoll_data = {...poll_data}
    newpoll_data[e.target.id] = e.target.value
    setpoll_data(newpoll_data)
    console.log(newpoll_data)
  }
  function submit(e){
    console.log(token);
    let item = poll_data;
    let body = {
      data: {
        candidate_name: item.candidate_name,
        candidate_number: item.candidate_number,
        description: item.description,
        poll_code: token,
        candidate_code: candidate_token,
        vote: 0
      }
    };
    console.log(body);
    e.preventDefault()
    Axios.post('https://strapi-production-5df9.up.railway.app/api/candidatenums', body)
    .then(res => {
      console.log(res);
      sessionStorage.setItem("token", token);
      window.location.reload();
      //window.open("\CreatePoll2", "_self");
    })
    .catch(err => {
      console.log(err)
      toast.error(err, {
        position: "top-center",
        autoClose: 5000,
      });
    })
    
  }
  function DeleteCandidate(id){
    Axios.delete('https://strapi-production-5df9.up.railway.app/api/candidatenums/' + id)
    .then(res => {
      console.log(res);
      window.location.reload();
    })
    .catch(err => {
      console.log(err)
    }
    )
  }
  function save(){
    window.open("\home", "_self");
    sessionStorage.removeItem("token");
  }


    return(
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
            <h1 className="text-5xl font-bold tracking-tight text-indigo-800">Add A Choice</h1>
          </div>
        </header>
        <label className="py-px block text-base text-center bg-blue-700 font-medium text-yellow-300">Your PollCode is {token}, save this code and use it to access the poll later.</label>
        <main className="bg-yellow-300">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST" onSubmit={(e) => submit(e)}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-yellow-300 px-4 py-5 sm:p-6">

                  <div className="grid grid-cols-9 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="candidate_number" className="block text-sm font-medium text-indigo-800">
                        Number
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          onChange={(e)=>handle(e)}
                          value={poll_data.candidate_number}
                          type="number"
                          name="candidate_number"
                          id="candidate_number"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-800 focus:ring-indigo-800 sm:text-sm"
                          placeholder="Enter number here"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="candidate_name" className="block text-sm font-medium text-indigo-800">
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          onChange={(e)=>handle(e)}
                          value={poll_data.candidate_name}
                          type="text"
                          name="candidate_name"
                          id="candidate_name"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-800 focus:ring-indigo-800 sm:text-sm"
                          placeholder="Enter name here"
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
                        onChange={(e)=>handle(e)}
                        value={poll_data.description}
                        id="description"
                        name="description"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-sm"
                        placeholder="Enter description here"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                
                  </div>
                  <div className="relative bg-yellow-300 px-4 py-10 sm:px-6">
                    <button
                      type="submit"
                      className="absolute left-6 bottom-7 inline-flex rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-yellow-300 shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2"
                    >
                      Add Choice
                    </button>
                    <button
                      type="button"
                      className="absolute right-8 bottom-7 inline-flex right-0 rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-yellow-300 shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2"
                      onClick={() => setOpen(true)}
                    >
                      Saved Choices
                    </button>
                  </div>
                </div>
              </form>
            </div>

  

            <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Poll Choices</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {
                          candidates.data?.map((item) => (
                              <li className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                   src='https://i.pinimg.com/originals/d7/25/1e/d7251e692ccbbcdad3a8a9d3afeaf8e1.jpg'
                                   className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <p>{item.attributes.candidate_name}</p>
                                      </h3>
                                      <p className="ml-4">{item.attributes.candidate_number}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.attributes.description}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => DeleteCandidate(item.id)}
                                        className="font-medium text-indigo-800 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      
                      <p className="mt-0.5 text-sm text-indigo-800">If you are done adding the choices, press the done button.</p>
                      <div className="mt-6">
                        <button
                          type="button"
                          onClick={() => save()}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-800 px-6 py-3 text-base font-medium text-yellow-300 shadow-sm hover:bg-indigo-700"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>


          </main>
        </div> 
        <ToastContainer />
  </>
)
}

export default CreatePoll2;