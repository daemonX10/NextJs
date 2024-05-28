import { connect } from "@/db/dbConfig";
import { User } from "@/db/models/User";
import { NextRequest,NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        
    }
    catch (error:any) {
        return NextResponse.json({error : error.message},{status : 500})
    }
}