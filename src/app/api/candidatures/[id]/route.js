
import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/connectdb";
import candidatureModel from "../candidature.model";


export async function GET(req) {
    try {
        //connection
        await connect();

        

    } catch (error) {
        console.error(error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

