"use client";

import React, {useState, useEffect} from 'react';
import axios from "axios";
import URL from "../utils/Urls"

function CandidatureCard() {

    const [candidatures, setCandidatures] = useState({});

    const fetchData = async () =>{
        try {
            const {data} = await axios.get(URL.GET_ALL_CANDIDATURE);
            setCandidatures(candidatures)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div>
            <h2>CandidatureCard</h2>
            <div>
                {candidatures.map((candidature) =>(
                    <div key={candidature._id} >
                        <h2>{candidature.entreprise}</h2>
                        <p> {candidature.poste} </p>
                        <p> {candidature.lien} </p>
                        <Link href={`./candidatureListe/${candidature._id}`} >voir plus</Link>
                    </div>
                ) )}
            </div>
        </div>
    )
}

export default CandidatureCard