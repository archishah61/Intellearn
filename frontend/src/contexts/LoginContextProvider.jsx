/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LoginContext from "./LoginContext";

// eslint-disable-next-line react/prop-types
const LoginContextProvider = ({children})=>{
    const [loggedin, setLoggedin] = useState(false);
    const [email, setEmail] = useState('');  // Manage email state, if needed


    return(
        <LoginContext.Provider value={{loggedin,setLoggedin, email, setEmail}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;