import React, { Fragment } from 'react';
 

const FunctionClick =()=> {

function changeEvent(e){   // It should be function not function call
    e.preventDefault();
    console.log("Hello Event handling...",this)
}
    return (
        <div>
        {/* <React.Fragment> <h1> Return More than one element in reactjs without creating extra div</h1></React.Fragment> */}
         {/* <button onClick={changeEvent}>Click Me</button> // Event handling */}
          <a href="https://www.youtube.com/" onClick={changeEvent} >Click Me</a>
          <h1>Hello Priya</h1>

          </div> 
    )
}

export default FunctionClick;
