const db=require("@/lib/db")
const mongoose = require('mongoose');
import Vote from "@/lib/Vote"
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

    const {id, name}= await req.json()
    try{
    const newVote = new Vote({id, name})
    await newVote.save();
    return NextResponse.json(newVote)
    }
    catch(e){
        console.log(e)
    }
  }
  
  export async function GET(req: Request) {
    try {

      const votes = await Vote.find();
  
      const votesInfo: any = {};
  
      votes.forEach((vote: { id: string, name: string }) => {
        if (!votesInfo[vote.id]) {
          votesInfo[vote.id] = {
            name: vote.name,
            votes: 0,
          };
        }
        votesInfo[vote.id].votes++;
      });

      const result = Object.keys(votesInfo).map(id => ({
        id,
        name: votesInfo[id].name,
        votes: votesInfo[id].votes,
      }));
  
      return NextResponse.json(result);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Произошла ошибка при обработке запроса.' });
    }
  }