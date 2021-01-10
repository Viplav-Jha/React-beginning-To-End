 const [count , setCount] =useState(0);
 const divRef = useRef();
 const colors =["red", "green","blue","pink","skyblue","orange","white","whitesmoke","black","cyan","brown","chocolate"]; 
 const abc = useRef(1);

  const  handleDecrement = ()=>{
      if (count===0) return
       setCount(prevCount=> prevCount-1);
  }
  const  handleIncrement = ()=>{
    setCount(prevCount=> prevCount+1);

}
  const  handleReset = ()=>{
     setCount(0);
  }  

useEffect(() => {
     divRef.current.style.color = colors[Math.floor(Math.random()*colors.length)];
},[count])

useEffect(()=>{
    abc.current=abc.current +1;
} );

    return (
       
        <div className="counter">
        <h1>Page render {abc.current} times</h1>
        <h2 className="text">{count}</h2>
         <h1 ref={divRef}>Hello World</h1>
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
