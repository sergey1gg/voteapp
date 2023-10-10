'use client'
import { HeaderNav } from '@/components/HeaderNav'
import { Menu } from '@/components/Menu'
import { ProjectInfo } from '@/components/ProjectInfo'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
  const data=[
    {
      id: 0,
      name: "Level-URBAN",
      text: "",
      images: ["261205/1-1.jpg", "261205/1-2.jpg", "261205/1-3.jpg"],
      author: ""
      },
  {
      id: 1,
      name: "Кампус-Элен-Назике",
      text: "",
      images: ["261205/2-1.jpg", "261205/2-2.jpg", "261205/2-3.jpg"],
      author: ""
      },
  {
      id: 2,
      name: "Кампус КРСУ. 9369",
      text: "",
      images: ["261205/3-1.jpg", "261205/3-2.jpg", "261205/3-3.jpg"],
      author: ""
      },
  {
      id: 3,
      name: "Кампус КРСУ проект 2023",
      text: "",
      images: ["261205/4-1.jpg", "261205/4-2.jpg", "261205/4-3.jpg"],
      author: ""
      },
  {
      id: 4,
      name: "КАМПУС КРСУ 772323",
      text: "",
      images: ["261205/5-1.jpg", "261205/5-2.jpg", "261205/5-3.jpg"],
      author: ""
      },
  {
      id: 5,
      name: "КАМПУС 211101",
      text: "",
      images: ["261205/6-1.jpg", "261205/6-2.jpg", "261205/6-3.jpg"],
      author: ""
      },
  {
      id: 6,
      name: "Кампус 202023",
      text: "",
      images: ["261205/7-1.jpg", "261205/7-2.jpg", "261205/7-3.jpg"],
      author: ""
      },
  {
      id: 7,
      name: "Альбом 0128",
      text: "",
      images: ["261205/8-1.jpg", "261205/8-2.jpg", "261205/8-3.jpg"],
      author: ""
      },
  {
      id: 8,
      name: "Аепролдю",
      text: "",
      images: ["261205/9-1.jpg", "261205/9-2.jpg", "261205/9-3.jpg"],
      author: ""
      },
  {
      id: 9,
      name: "URBAN",
      text: "",
      images: ["261205/10-1.jpg", "261205/10-2.jpg", "261205/10-3.jpg"],
      author: ""
      },
  {
      id: 10,
      name: "261205",
      text: "",
      images: ["261205/11-1.jpg", "261205/11-2.jpg", "261205/11-3.jpg"],
      author: ""
      },
]
export default function Home() {

  return (
    <>
 <div>
  <HeaderNav/>
  <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
   <Menu data={data} />
    {/*Section container*/}
    <ProjectInfo data={data} />
  </div>
  </div> 
</>
  )
}
