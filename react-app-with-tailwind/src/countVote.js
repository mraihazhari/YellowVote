import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import React, { useState } from "react";
import {useEffect, eseState} from "react";
import Axios from 'axios';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

 


function countVote() {
    const [poll, setPoll] = useState(null);
    const token = JSON.parse(sessionStorage.getItem('history'));

    console.log(token);

    useEffect(() => {
        Axios.get('https://strapi-production-5df9.up.railway.app/api/candidatenums', {
            params: {
                "filters[poll_code][$eq]": token
            }
        }).then((res) => {
            console.log(res.data);
            setPoll(res.data);
        });
    }, []);

    if (poll != null) {
        sessionStorage.setItem("history", JSON.stringify(poll));
        window.open("\history", "_self");
    }

    else{
        return <p>Loading profile...</p>;
    }


    
    
    
}

export default countVote;