import React, { useMemo, useState } from 'react'
import C2 from './C2';

const C1 =()=> {

    const [address , setAddress]= useState("");
    const [password , setPassword]= useState("");

    const addressHandler=(e)=>{
        setAddress(e.target.value);
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value);
    }
    
     const f = useMemo(()=>heavyFunction(),[password]);
    //const f = heavyFunction();
  return (
    <div>
        C1:
        <input type="text" value={address} onChange={addressHandler}/>
        <input type="password" value={password} onChange={passwordHandler}/>
        <C2 address={address}></C2>
        
    </div>
  )
}
export default C1;

const heavyFunction = ()=>{
    console.log("heavyFunction executed");
    for(let i=0;i<20000000;i++){
     new Date();
    }
}

