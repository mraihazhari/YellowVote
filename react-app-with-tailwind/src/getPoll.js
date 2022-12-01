import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import React, { useState } from "react";
import {useEffect, eseState} from "react";
import Axios from 'axios';


function GetPoll() {
    const [poll, setPoll] = useState(null);
    var token = sessionStorage.getItem('token');
    console.log(token);

    useEffect(() => {
        Axios.get('http://localhost:1337/api/createpolls', {
            params: {
              "filters[poll_code][$eq]": token
              }
              }).then((res) => {
                console.log(res.data);
                setPoll(res.data);
              });
    }, []);

    
    if (poll != null) {
      sessionStorage.setItem("poll", JSON.stringify(poll));
      window.open("\Voting", "_self");
    }

    else{
        return <p>Loading profile...</p>;
    }
  
    
}

export default GetPoll;