import React from "react";
import { BsGithub } from 'react-icons/bs'
export default function Project (prop){

    return(
        <div className={`flex flex-col flex-shrink-0 w-[320px] lg:w-[500px] md:w-[400px] rounded-lg border shadow-md bg-gray-800 border-gray-500 lg:p-4 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden snap-center snap-always`}> 
            <img className="rounded-t-lg" src={prop.image} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prop.title}</h5>
                {prop.icons}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{prop.descrip}</p>
                <a href={prop.linkGit} 
                className="inline-flex self-end items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target='_blank'
                >
                  GitHub
                  <BsGithub className="ml-2 -mr-1 w-4 h-4"/>
                  {/* <svg aria-hidden="true" className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
                </a>
                <a href={prop.link} 
                className="inline-flex ml-2 self-end items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target='_blank'
                rel="noopener"
                >
                  Ir
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    )
}
