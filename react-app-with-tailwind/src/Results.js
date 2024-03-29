import { Disclosure } from '@headlessui/react'
import { Bars3Icon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import Axios  from 'axios';
import { Component } from 'react';
//import CanvasJSReact from './canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import {CanvasJSChart} from 'canvasjs-react-charts';
import ReactLoading from 'react-loading';


const navigation = [
    { name: 'YellowVote', href: './home', current: true },
    { name: 'Create', href: './CreatePoll', current: false },
    { name: 'Search', href: './searchPoll', current: false },
    { name: 'History', href: './gethistory', current: false },
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


  const [poll, setPoll] = useState(null);
  const token = sessionStorage.getItem('token');

  const candidates = JSON.parse(sessionStorage.getItem('candidates'));

  console.log(candidates);

  useEffect(() => {
    Axios.get('https://strapi-production-5df9.up.railway.app/api/createpolls', {
        params: {
          "filters[poll_code][$eq]": token
          }
          }).then((res) => {
            console.log(res.data.attributes);
            setPoll(res.data);
          });
}, []);
console.log(candidates);

const candidate_data = [];
let count_data = 0;

candidates.data?.map((candidate) => {
  count_data = count_data + candidate.attributes.vote;
})

let participant;

if(count_data != 0){
   participant = count_data;
  console.log(participant);
}



candidates.data?.map((candidate) => {
  candidate_data.push({
    name: candidate.attributes.candidate_name, 
    y: (candidate.attributes.vote * 100) / participant
  })
})
console.log(candidate_data);
console.log(JSON.parse(JSON.stringify(candidate_data)));


const options = {
  animationEnabled: true,
  backgroundColor: "white",
  title: {
  },
  subtitles: [{
    verticalAlign: "center",
    fontSize: 24,
    dockInsidePlotArea: true
  }],
  data: [{
    type: "doughnut",
    showInLegend: true,
    indexLabel: "{name}: {y}",
    indexLabelFontSize: 20,
    indexLabelFontColor: "#2e86de",
    yValueFormatString: "#,###'%'",
    dataPoints: candidate_data
  }]
}


console.log(options.data[0].dataPoints);
   // console.log(poll.data[0].attributes.title);
if(poll != null){
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
            <h1 className="text-5xl font-bold text-center text-indigo-800">{poll.data[0].attributes.title}</h1>
            <h2 className="text-2xl font-medium text-center text-indigo-800">{poll.data[0].attributes.description}</h2>
          </div>
        </header>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        
        <div className="mt-2 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
	        {candidates.data?.map((choice) => (
		        <div  className="group relative">
			        <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-white border-solid border-2 border-indigo-600">
            <img
                className="object-cover w-full h-48"
                src="https://i.pinimg.com/originals/d7/25/1e/d7251e692ccbbcdad3a8a9d3afeaf8e1.jpg"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {choice.attributes.candidate_number}. {choice.attributes.candidate_name}
                </h4>
                <p className="mb-2 leading-normal">
                    {choice.attributes.description}
                    
                </p>
                <br></br>
                <a className="px-4 py-2 text-lg text-white bg-blue-500 rounded shadow">
                    Total Vote : {choice.attributes.vote}
                </a>
            </div>
            <div className="mb-3 mt-2 w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 h-6 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: JSON.stringify((choice.attributes.vote * 100) / participant)+"%"}}>{Math.round((choice.attributes.vote * 100) / participant)}%</div>
            </div>
        </div>
        
            
            </div>
          ))}
        </div>
      </div>
      <div className="w-full p-4 bg-white rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-2 mb-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <div className='lg:ml-20 text-center lg:text-left sm:text-left'>
    <h1 class="mb-2 text-4xl font-bold text-blue-700 dark:text-white">Poll Results</h1>
    <p class="mb-2 text-xl text-gray-500 sm:text-xl dark:text-gray-400">{poll.data[0].attributes.title}</p>
    </div>
    <div className='lg:mr-20 text-center lg:text-right sm:text-right'>
    <h1 class="mb-2 text-4xl font-bold text-blue-700 dark:text-white">{participant}</h1>
    <p class="mb-2 text-xl text-gray-500 sm:text-xl dark:text-gray-400">Poll Participants</p>
    </div>
    
</div>
      <div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
    </div>
    )
          }
    else{
      return(
        <ReactLoading
        type={"spin"}
        color={"#4834d4"}
        height={100}
        width={100}
        className="mx-auto mt-20 text-center text-white text-2xl font-bold"
        />
    )
    }
}

export default Results;