import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Landing from './landing';
import Home from './home';
import CreatePoll from './CreatePoll';
import SearchPoll from './searchPoll';

import React from "react";
function App() {
    return (
        <Router>
          <Routes>
            <Route exact path="/landing" element={<Landing />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/CreatePoll" element={<CreatePoll />} />
            <Route exact path="/searchPoll" element={<SearchPoll />} />
            <Route
              path="*"
              element = {<Navigate to="/landing" />}
            />
          </Routes>
        </Router>
    );
}

export default App;
