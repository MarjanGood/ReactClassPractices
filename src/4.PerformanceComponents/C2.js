import React, { memo } from 'react'

const C2 = (props) => {
    const result = heavyFunction();
  return (
    <div>
        I am C2 {props.address}
    </div>
  )
}
export default memo(C2);

const heavyFunction = ()=>{

    console.log("heavyFunction executed C2");
    for(let i=0;i<20000000;i++){
     new Date();
    }

}