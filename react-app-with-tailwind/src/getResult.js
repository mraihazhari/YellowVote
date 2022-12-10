import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import React, { useState } from "react";
import {useEffect, eseState} from "react";
import Axios from 'axios';
import ReactLoading from 'react-loading';


function GetResult() {
    const [poll, setPoll] = useState(null);
    var token = sessionStorage.getItem('token');
    console.log(token);

    useEffect(() => {
        Axios.get('https://strapi-production-5df9.up.railway.app/api/createpolls', {
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
      window.open("\Result", "_self");
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

export default GetResult;