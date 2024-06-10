
import { NextResponse } from "next/server";

export async function POST(req:Request){
  const {email, password} = await req.json();
  console.log({email, password});
  try {
    NextResponse.json({success:true})
  } catch (error) {
    NextResponse.json({success:false, error})
  }

}