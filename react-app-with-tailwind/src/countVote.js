import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import React, { useState } from "react";
import {useEffect, eseState} from "react";
import Axios from 'axios';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import ReactLoading from 'react-loading';
 


function CountVote() {
    const [candidates, setCandidates] = useState(null);
    const token = sessionStorage.getItem('token');
    const candidate_code = [];

    console.log(token);

    useEffect(() => {
        Axios.get('https://strapi-production-5df9.up.railway.app/api/candidatenums', {
            params: {
                "filters[poll_code][$eq]": token
            }
        }).then((res) => {
            console.log(res.data);
            setCandidates(res.data);
        });
    }, []);

    if (candidates != null) {
        candidates.data?.map((choice) => (
            candidate_code.push(choice.attributes.candidate_code)
        ))
        console.log(candidate_code);
        sessionStorage.setItem("candidates", JSON.stringify(candidates));
        sessionStorage.setItem("candidate_code", JSON.stringify(candidate_code));
        window.open("\countVote2", "_self");
    }

    else{
        return(
            <ReactLoading
            type={"spin"}
            color={"#4834d4"}
            height={100}
            width={100}
            className="mx-auto mt-20 text-center text-white text-2xl font-bold"
            />
        )
    }


    
    
    
}

export default CountVote;