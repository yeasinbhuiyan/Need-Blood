import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
 

const MemberPrivateRoute = ({children}) => {
    const [loading , setLoading] = useState(true)

    const user = JSON.parse(localStorage.getItem('user')) 
    console.log(user)

   if(loading){
    return <p>loading...</p>
   }

   if(user){
    return children
   }


    return (<Navigate to={'/login'}></Navigate>)
};

export default MemberPrivateRoute;