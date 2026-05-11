import dbConnect from "@/lib/dbConnect"
import notis from "@/models/notis";

import { NextResponse } from "next/server";


const GET = async (request) => {
  try {
    await dbConnect();
    const not = await notis.find();
  
 const  res = NextResponse.json(not, { status: 200 });
    console.log(res);
    

    return res;


  } catch (error) {
    console.error("Error fetching notis:", error);
    return NextResponse.json({ error: "Failed to fetch notis" }, { status: 500 });
  }

}

export { GET }