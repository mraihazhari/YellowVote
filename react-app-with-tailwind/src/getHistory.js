import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import React, { useState } from "react";
import {useEffect, eseState} from "react";
import Axios from 'axios';



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



    

    //candidates.data?.map((choice) => (
        
        //const result2 = arr.map(element => element);

    
    if (poll != null) {
        poll.data?.map((choice) => (
            history.push(choice.attributes.poll_code)
        ))
        console.log(history);
        sessionStorage.setItem("history", JSON.stringify(history));
        window.open("\gethistory2", "_self");
    }

    else{
        return <p>Loading profile...</p>;
    }
  
    
}

export default GetHistory;