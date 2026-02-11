
import { NextResponse } from "next/server";
import connect from "@/lib/connectdb";
import candidatureModel from "./candidature.model";

export async function POST(req){
    try {
        //Etablie la connexion a mongoDB
        await connect();

        //Recupère le corps de la requete et le convertit en JSON
        const candidature = await candidatureModel.create(body);

        //Retourne une reponse avec l'article crée et un code 201
        return NextResponse.json(candidature, {status: 201});

    } catch (error) {
        console.error(error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

export async function GET(req) {
    try {
        //

        await connect();

        const candidatures = await candidatureModel.find();

        if(!candidatures) return NextResponse.json("There is no candidature found", {status: 404})

        return NextResponse.json(candidatures, {status: 201});

    } catch (error) {
        console.error(error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
