import React, { memo } from 'react'

const ResetButton = (props) => {

  console.log("reset button rendered");
  return (
    <div>  
        <button onClick={props.reset}>reset pass</button>
    </div>
  )

}
export default memo(ResetButton);