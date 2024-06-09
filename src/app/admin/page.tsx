'use client'
import {useEffect, useState} from 'react'
import { handleGetVotes } from '../utils/vote-api'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//test
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const names=[
  {
    id: 0,
    name: "Level-URBAN",
    },
{
    id: 1,
    name: "162630",
    },
{
    id: 2,
    name: "Кампус КРСУ. 9369",
    },
{
    id: 3,
    name: "Кампус КРСУ проект 2023",
    },
{
    id: 4,
    name: "КАМПУС КРСУ 772323",
    },
{
    id: 5,
    name: "КАМПУС 211101",
    },
{
    id: 6,
    name: "Кампус 202023",
    },
{
    id: 7,
    name: "Альбом 0128",
    },
{
    id: 8,
    name: "3846",
    },
{
    id: 9,
    name: "24221",
    },
{
    id: 10,
    name: "261205",
    },
    {
      id: 11,
      name: "Вдохновение и инновации",
      },
  {
      id: 12,
      name: "Стеклянная волна",
      },
  {
      id: 13,
      name: "Райский цветок",
      },
  {
      id: 14,
      name: "Свет в кубе",
      },
  {
      id: 15,
      name: "Эстесфера",
      },
  {
      id: 16,
      name: "SYLVER",
      },
  {
      id: 17,
      name: "Илимдер шаар",
      },
  {
      id: 18,
      name: "104925",
      },
  
]

const page = () => {
    const [data, setData]=useState<any>()
    useEffect(()=>{
        handleGetVotes().then((res)=> setData(res))
        
    },[])
    let labels: string[]=[]
    data?.map((vote: any)=>{
      labels.push(vote.id)
    })
  const chartData = {
      labels,
      datasets: [
        {
          label: '',
          data: data?.map((count: any) => count.votes),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
    const options = {
      responsive: true,
    };
  return (
    <div className='px-5 lg:px-64'>
    <h2>Votes List</h2>
    <Bar options={options} data={chartData}/>
    <ul>
      {data?.map((vote: any) => (
        <li key={vote.id}>
          <strong>ID:</strong> {vote.id},<strong>Votes:</strong> {vote.votes}
          <strong>  {names?.find((n: any)=> n.id.toString() === vote.id)?.name} </strong>
        </li>
      ))}
    </ul>
  </div>

  )
}

export default page
