import { BrowserRouter as  Navigate, useHref } from 'react-router-dom';
import './index.css';
import { Redirect } from "react-router-dom";

import React from "react";



function Logout_func() {

    sessionStorage.clear();
    window.open("./landing");
    
    
    
}
  
  
  
 export default Logout_func;