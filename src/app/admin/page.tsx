'use client'
import {useEffect, useState} from 'react'
import { handleGetVotes } from '../utils/vote-api'
const page = () => {
    const [data, setData]=useState<any>()
    useEffect(()=>{
        handleGetVotes().then((res)=> setData(res))
        
    },[])

  return (
    <div>
    <h2>Votes List</h2>
    <ul>
      {data?.map((vote: any) => (
        <li key={vote.id}>
          <strong>ID:</strong> {vote.id}, <strong>Name:</strong> {vote.name}, <strong>Votes:</strong> {vote.votes}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default page
