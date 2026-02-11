import React, {useState, useEffect} from 'react';
import axios from "axios";
import URL from "../utils/Urls"
import { useParams } from 'next/navigation';

function detailCandidature() {

    const [candidature, setCandidature] = useState({});
    const id = useParams();

    const fetchData = async () => {
        const {data} = await axios.get(URL.GET_ONE_CANDIDATURE + id)
    }

    return (
        <div>detailCandidature</div>
    )
}

export default detailCandidature;