
import { NextRequest, NextResponse } from 'next/server';
const temporaryCodes: any = {};

export async function POST(req: Request) {
  const {number}= await req.json()
  const code = Math.floor(Math.random() * 900000) + 100000;
  temporaryCodes[number] = code;
  const options = {
    method: 'POST',
    headers: {
    accept: 'application/json',
     'content-type': 'application/json',
      authorization: 'Bearer IkhGxsFbD6giQ5oR5G7TAEEUGh0v69NU'
    },
    body: JSON.stringify({typing_time: 0, to: number, body: JSON.stringify(code)})
  };
  try{
  const response= await fetch('https://gate.whapi.cloud/messages/text', options)
  if (response.ok) {
    const responseData = await response.json();
    return NextResponse.json(responseData)
  }
  }
  catch(e){
    console.log(e)
 }
 return NextResponse.json(temporaryCodes)
}
export async function GET(req: Request) {
  let res=null
  const { searchParams } = new URL(req.url);
  const phoneNumber = searchParams.get("number");
  
  if (phoneNumber && temporaryCodes.hasOwnProperty(phoneNumber)) {
    res= temporaryCodes[phoneNumber];
  }
    return Response.json(res)
}
