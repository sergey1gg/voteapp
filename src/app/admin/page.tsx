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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
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
        </li>
      ))}
    </ul>
  </div>

  )
}

export default page
