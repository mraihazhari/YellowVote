import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Landing from './landing';
import Login from './login';
import Home from './home';
import CreatePoll from './CreatePoll';
import searchPoll from './searchPoll';

import React from "react";
function App() {
    return (
        <Router>
          <Routes>
            <Route exact path="/landing" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/CreatePoll" element={<CreatePoll />} />
            <Route exact path="/searchPoll" element={<searchPoll />} />
            <Route
              path="*"
              element = {<Navigate to="/landing" />}
            />
          </Routes>
        </Router>
    );
}

export default App;
