import { BrowserRouter as Router,Routes, Route, Navigate, json, redirect } from 'react-router-dom';
import './index.css';
import React, { useState } from "react";
import {useEffect, eseState} from "react";
import Axios from 'axios';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

 


function CountVote2() {

    const [votes, setVotes] = useState(null);

    const candidate_code = JSON.parse(sessionStorage.getItem('candidate_code'));
    const candidates = JSON.parse(sessionStorage.getItem('candidates'));
    

    console.log(candidate_code);


    useEffect(() => {
        Axios.get('https://strapi-production-5df9.up.railway.app/api/voters', {
            params: {
                "filters[candidate_code][$eq]": candidate_code
            }
        }).then((res) => {
            console.log(res.data);
            setVotes(res.data);
    
        });
    }, []);


    if (votes != null) {
     //   let hasil = votes.data?.filter((item) => item.attributes.candidate_code === 'hh21dmy2');
      //  console.log(hasil.length);
      candidates.data?.map((choice) => {
        choice.attributes.vote = votes.data?.filter((item) => item.attributes.candidate_code === choice.attributes.candidate_code).length;
      })
      console.log(candidates);
      sessionStorage.setItem("candidates", JSON.stringify(candidates));
      window.open("results", "_self");
        
    }

    else{
        return <p>Loading profile...</p>;
    }


    
    
    
}

export default CountVote2;