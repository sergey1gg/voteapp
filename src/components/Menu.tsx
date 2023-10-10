'use client'
import React, { useState } from 'react'
import Link from "next/link";


const Menu = ({ data }: { data: IMenuItem[] }) => {
    const [selectedItem, setSelectedItem]=useState<number>()
    const [menuOpen, setMenuOpen]=useState<boolean>(false)
    return (
        <div className="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
            <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
            <div className="block lg:hidden sticky inset-0">
                <button id="menu-toggle" className="flex w-full items-center justify-between px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-yellow-600 appearance-none focus:outline-none"
                onClick={()=> setMenuOpen(!menuOpen)}>
                    <span>Список</span>
                    <svg className="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>

                </button>
            </div>
            <div className={`w-full sticky inset-0 ${menuOpen? '': 'hidden'} max-h-64 lg:h-auto overflow-x-hidden lg:overflow-x-visible overflow-y-auto lg:overflow-y-visible lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" style={{ top: '6em' }} id="menu-content`}>
                <ul className="list-reset py-2 md:py-0">
                    {data?.map((item, index) => (
                         <Link href={{ query:{ project: item.id } }}
                         key={index}>
                       <li
                       className={`py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent font-bold ${
                         index === selectedItem ? "border-l-4 border-transparent border-yellow-600" : ""
                       }`}
                       onClick={()=> {setSelectedItem(index); setMenuOpen(false)}}
                     >

                           <p className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                           <span className="pb-1 md:pb-0 text-sm">{item.name}</span>
                            </p> 
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export { Menu }
