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
      name: "162630",
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
      name: "3846",
      text: "",
      images: ["261205/9-1.jpg", "261205/9-2.jpg", "261205/9-3.jpg"],
      author: ""
      },
  {
      id: 9,
      name: "24221",
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
      {
        id: 11,
        name: "Вдохновение и инновации",
        text: "",
        images: ["261205/18-1.jpg", "261205/18-2.jpg", "261205/18-3.jpg"],
        author: ""
        },
    {
        id: 12,
        name: "Стеклянная волна",
        text: "",
        images: ["261205/17-1.jpg", "261205/17-2.jpg", "261205/17-3.jpg"],
        author: ""
        },
    {
        id: 13,
        name: "Райский цветок",
        text: "",
        images: ["261205/16-1.jpg", "261205/16-2.jpg", "261205/16-3.jpg"],
        author: ""
        },
    {
        id: 14,
        name: "Свет в кубе",
        text: "",
        images: ["261205/14-1.jpg", "261205/14-2.jpg", "261205/14-3.jpg"],
        author: ""
        },
    {
        id: 15,
        name: "Эстесфера",
        text: "",
        images: ["261205/15-1.jpg", "261205/15-2.jpg", "261205/15-3.jpg"],
        author: ""
        },
    {
        id: 16,
        name: "SYLVER",
        text: "",
        images: ["261205/12-1.jpg", "261205/12-2.jpg", "261205/12-3.jpg"],
        author: ""
        },
    {
        id: 17,
        name: "Илимдер шаар",
        text: "",
        images: ["261205/13-1.jpg", "261205/13-2.jpg", "261205/13-3.jpg"],
        author: ""
        },
    {
        id: 18,
        name: "104925",
        text: "",
        images: ["261205/20-1.jpg", "261205/20-2.jpg", "261205/20-3.jpg"],
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
