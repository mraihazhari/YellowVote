import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import React, { useState } from "react";
import {useEffect, eseState} from "react";
import Axios from 'axios';
import ReactLoading from 'react-loading';



function GetHistory() {
    const [poll, setPoll] = useState(null);
    const history = [];
    
    const User = JSON.parse(sessionStorage.getItem("user"));
    let email = User.emails[0].value;
    console.log(email);

    useEffect(() => {
        Axios.get('https://strapi-production-5df9.up.railway.app/api/voters', {
            params: {
              "filters[participant_email][$eq]": email
              }
              }).then((res) => {
                //console.log(res.data);
                setPoll(res.data);

              });
    }, []);

    if (poll != null) {
        poll.data?.map((choice) => (
            history.push(choice.attributes.poll_code)
        ))
        console.log(history);
        sessionStorage.setItem("history", JSON.stringify(history));
        window.open("\gethistory2", "_self");
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
export default GetHistory;