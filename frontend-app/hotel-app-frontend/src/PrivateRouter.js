import {useNavigate, Navigate, useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';


const PrivateRoute = ({ children }) => {
  // let {name} = useParams();
  // const navigate = useNavigate();
  //   useEffect(() => {
  //       if (localStorage.getItem("name") !== name) {
  //           navigate(-1);
  //       }
  //   }  , []);

  // if(localStorage.getItem("jwt") === null || localStorage.getItem("jwt") === "undefined")
  // {
  //   return <Navigate to="/login"/>;
  // }
  
  //   const jwt = localStorage.getItem("jwt");
  //   console.log(localStorage.getItem("jwt"));
  //   return jwt ? children : <Navigate to="/login"/>;

    if(localStorage.getItem("jwt") === null || localStorage.getItem("jwt") === "undefined")
  {
    return <Navigate to="/login"/>;
  }
    return children;
}

export default PrivateRoute;