import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Landing from './landing';
import Home from './home';
import CreatePoll from './CreatePoll';
import SearchPoll from './searchPoll';
import History from './history';
import React, { useState } from "react";
import {useEffect, eseState} from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
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

  console.log(user);

    return (
        <Router>
          <Routes>
            <Route exact path="/landing" element={<Landing />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/CreatePoll" element={<CreatePoll />} />
            <Route exact path="/searchPoll" element={<SearchPoll />} />
            <Route exact path="/history" element={<History />} />
            <Route
              path="*"
              element = {<Navigate to="/landing" />}
            />
          </Routes>
        </Router>
    );
}

export default App;
