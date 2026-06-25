import connectDB from "@/lib/mongodb";
import Token from '@/models/magictokens'
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const data = await Token.find({})
        console.log("successfully conneted to DB", data)
        return NextResponse.json(data)
    } catch (error) {

    }

}