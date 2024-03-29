import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import Landing from './landing';
import Home from './home';
import CreatePoll from './CreatePoll';
import CreatePoll2 from './CreatePoll2';
import Voting from './Voting';
import Results from './Results';
import SearchPoll from './searchPoll';
import History from './history';
import HistoryDetail from './historyDetail';
import Login_func from './login_page' ;
import VoteCandidate from './voteCandidate';
import Logout_func from './logout';
import GetPoll from './getPoll';
import GetHistory from './getHistory';
import GetHistory2 from './getHistory2';
import CountVote from './countVote';
import CountVote2 from './countVote2';
import GetResult from './getResult';
import React, { useState } from "react";
import {useEffect, eseState} from "react";
import BasicAlerts from './basicAlerts';
import { ToastContainer } from 'react-toastify';


function App() {
  
    return (
        <Router>
          <Routes>
            <Route exact path="/landing" element={<Landing />} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/CreatePoll" element={<CreatePoll />} />
            <Route exact path="/CreatePoll2" element={<CreatePoll2 />} />
            <Route exact path="/Voting" element={<Voting />} />
            <Route exact path="/Results" element={<Results />} />
            <Route exact path="/searchPoll" element={<SearchPoll />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/historyDetail" element={<HistoryDetail />} /> 
            <Route exact path="/voteCandidate" element={<VoteCandidate />} />
            <Route exact path="/logout" element={<Logout_func />} />
            <Route exact path="/login_page" element={<Login_func />} />
            <Route exact path="/getPoll" element={<GetPoll />} />
            <Route exact path="/getHistory" element={<GetHistory />} />
            <Route exact path="/getHistory2" element={<GetHistory2 />} />
            <Route exact path="/countVote" element={<CountVote />} />
            <Route exact path="/countVote2" element={<CountVote2 />} />
            <Route exact path="/basicAlert" element={<BasicAlerts />} />
            <Route
              path="*"
              element = {<Navigate to="/landing" />}
            />
          </Routes>
        </Router>
    );
  
}

export default App;
