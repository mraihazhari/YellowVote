/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from "react";
import { Helmet } from "react-helmet";

const products = [
    {
      id: 1,
      name: 'Create a Poll',
      href: '#',
      price: '$48',
      imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png",
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
      name: 'View History',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    // More products...
  ]

function Home() {
  return (
    
    <div className="relative overflow-hidden bg-yellow-300">
        <Helmet>
        <style>{"body { background-color: rgb(253 224 71); }"}</style>
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-yellow-300 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-full lg:pb-28 xl:pb-32">

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
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
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