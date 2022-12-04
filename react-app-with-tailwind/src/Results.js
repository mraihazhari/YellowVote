import { Disclosure } from '@headlessui/react'
import { Bars3Icon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import Axios  from 'axios';


const navigation = [
    { name: 'YellowVote', href: './home', current: true },
    { name: 'Create', href: './CreatePoll', current: false },
    { name: 'Search', href: './searchPoll', current: false },
    { name: 'History', href: './history', current: false },
    { name: 'Logout', href: './logout', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ') 
}

const choices = [
  {
    id: 1,
    name: 'Cristiano Penaldo',
    voters: '48',
    number: '1',
    imageSrc: 'https://statik.tempo.co/data/2022/10/21/id_1150509/1150509_720.jpg',
    
  },
  {
    id: 2,
    name: 'Lionel Pessi',
    voters: '35',
    number: '2',
    imageSrc: 'https://akcdn.detik.net.id/visual/2022/11/22/arab-saudi-vs-argentina-di-piala-dunia-2022-6_169.jpeg?w=650',
    
  },
  {
    id: 3,
    name: 'LORD LAKAKA',
    voters: '8',
    number: '3',
    imageSrc: 'https://akcdn.detik.net.id/community/media/visual/2022/12/02/romelu-lukaku-4.jpeg?w=700&q=90',
    
  },
  {
    id: 4,
    name: 'Antony Sinisuka Ginting',
    voters: '35',
    number: '4',
    imageSrc: 'https://img.inews.co.id/media/822/files/inews_new/2022/10/28/antony_1.jpg',
    
  },
]

function Results () {

  const poll = sessionStorage.getItem('poll');
  const token = sessionStorage.getItem('token');

  const [candidates, setCandidates] = useState([]);
  
  
  

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


  console.log(candidates.data[0].attributes.candidate_name);

    return(
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
            <h1 className="text-5xl font-bold text-center text-indigo-800">Siapakah GOAT Yang Sebenarnya?</h1>
            <h2 className="text-2xl font-medium text-center text-indigo-800">Poll Description</h2>
          </div>
        </header>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
	        {candidates.data?.map((choice) => (
		        <div  className="group relative">
			        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
				        <img
                  src= 'https://statik.tempo.co/data/2022/10/21/id_1150509/1150509_720.jpg'
                  className="h-full w-full object-cover object-center"
                />
              </div>
              
              <div className="mt-4 flex justify-between">
                <div>
                <h3 className="text-sm font-semibold text-indigo-800">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {choice.attributes.candidate_name}
                    </a>
                </h3>
                  <p className="mt-1 text-sm font-medium text-indigo-800">Voters: {choice.voters}</p>
                </div>
                <p className="text-sm font-medium text-indigo-800">{choice.attributes.candidate_number}</p>
              </div> 

            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Results;