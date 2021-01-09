ort React, { useState } from 'react';
import "./Counter.css"

function Counter() {
 const [count , setCount] =useState(0);

  const  handleDecrement = ()=>{
      if (count==0) return
       setCount(prevCount=> prevCount-1);
  }
  const  handleIncrement = ()=>{
    setCount(prevCount=> prevCount+1);

}
  const  handleReset = ()=>{
     setCount(0);
}

useState();
    return (
    
    
        <div className="counter">

        <h2 className="text">{count}</h2>
         <div className="btn_container_top">
             <button className="button" onClick={handleDecrement}>-1</button>
             <button className="button" onClick={handleIncrement}>+1</button>
            </div>
             <div className="btn_container_bottom">
             <button className="button" onClick={handleReset}>Reset</button>
             </div>
         

      
        </div>
        
    );
}

export default Counter;
