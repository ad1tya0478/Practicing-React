// UseContext => React Hook that allows u to share values between levels of components without passing props through each level

// Provider Component
// 1. import {createContext} from 'react';
// 2. export const Mycontext = createContext();
// 3. <MyContext.provider value={value}>
//       <Child/>
//      </MyContext.provider>

// Consumer Component 
// 1. import react, {userContext} from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext{MyContext};
 
import React, {useState, useEffect, useContext} from "react";
import ComponentA from "./useContext_components/componentA.jsx";


function Usecontext(){
    return(<>
        <ComponentA/>
    </>)
}

export default Usecontext
