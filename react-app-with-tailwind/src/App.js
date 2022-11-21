import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import Landing from './landing';
import Home from './home';
import CreatePoll from './CreatePoll';
import SearchPoll from './searchPoll';
import History from './history';
import HistoryDetail from './historyDetail';
import Login_func from './login_page' ;
import VoteCandidate from './voteCandidate';
import Logout_func from './logout';
import React, { useState } from "react";
import {useEffect, eseState} from "react";


function App() {
  
    return (
        <Router>
          <Routes>
            <Route exact path="/landing" element={<Landing />} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/CreatePoll" element={<CreatePoll />} />
            <Route exact path="/searchPoll" element={<SearchPoll />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/historyDetail" element={<HistoryDetail />} /> 
            <Route exact path="/voteCandidate" element={<VoteCandidate />} />
            <Route exact path="/logout" element={<Logout_func />} />
            <Route exact path="/login_page" element={<Login_func />} />
            <Route
              path="*"
              element = {<Navigate to="/landing" />}
            />
          </Routes>
        </Router>
    );
  
}

export default App;
