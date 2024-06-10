import dbConnect from '../../lib/mongoose';
import Query from '../../models/query';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const querys = await Query.find();
    // const query = await Query.create({name:"pintu", email:"testinf2sj.com", message:"bsdvs"});
    // console.log("querys", querys)
    return NextResponse.json({ success: true, data: querys });
  } catch (error) {
    console.error('Error fetching queries:', error);
    return NextResponse.json({ success: false });
  }
  
}
export async function POST(request:NextRequest) {
  try {
    const { clientName, email, message } = await request.json();
    if (!clientName || !email || !message) {
        return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    await dbConnect();
    await Query.create({clientName, email, message});
    return NextResponse.json({ success: true, data:{clientName, email, message} });
  } catch (error) {
    console.error('Error fetching queries:', error);
    return NextResponse.json({ success: false });
  }
  
}