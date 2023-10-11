'use client'
import React, { useState } from 'react'
import { Carousel } from './Carousel'
import { useSearchParams } from 'next/navigation'
import ConfirmModal from './ConfirmModal'

const ProjectInfo = ({data}: {data: IMenuItem[]}) => {
  const searchParams= useSearchParams()
  const id: any=searchParams.get("project")
  const [showModal, setShowModal] = useState<Boolean>(false);
  console.log(data[55])
  return (
    <>
   
    <section className="w-full lg:w-4/5">
    {id !== null && data[id] !==undefined?(
      <div id="section2" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
      <h2 className="font-sans font-bold break-normal text-gray-700 pb-2 text-xl">{data[id]?.name}</h2>
        <form>
          <div className="md:flex mb-6">
            <Carousel images={data[id]?.images}/>
          </div>
          <div className="flex">
              <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type='button'
              onClick={()=> setShowModal(true)}>
                Голосовать
              </button>
          </div>
        </form>
      </div>
          ):(
            null)}
    </section>
    
    {showModal && <ConfirmModal setShowModal={setShowModal} data={data[id]}/>}

</>
  )
}

export {ProjectInfo}
