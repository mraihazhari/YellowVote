import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import React, { useState } from "react";
import {useEffect, eseState} from "react";


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
        return <p>Loading profile...</p>;
    }
  
    
}
  
  
  
 export default Login_func;