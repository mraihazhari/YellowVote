import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Landing from './landing';
import Login from './login';

import React from "react";
function App() {
    return (
        <Router>
          <Routes>
            <Route exact path="/landing" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              path="*"
              element = {<Navigate to="/landing" />}
            />
          </Routes>
        </Router>
    );
}

export default App;
