import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import React, { useState } from "react";
import {useEffect, eseState} from "react";
import ReactLoading from "react-loading";


function Login_func() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      const getUser = () => {
        fetch("https://backend.yellowvoteui.com/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
          .then((response) => {
            if (response.status === 200) return response.json();
            throw new Error("authentication has been failed!");
          })
          .then((resObject) => {
            setUser(resObject.user);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getUser();
    }, []);

    
    if (user != null) {
      sessionStorage.setItem("user", JSON.stringify(user));
      window.open("\home", "_self");
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
  
  
  
 export default Login_func;