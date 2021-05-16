import React from 'react';

class CFunctionClick extends React.Component {
    constructor(props) {
        super(props);
    //   this.changeEvent=this.changeEvent.bind(this);

       this.state ={
           cousrse:"MCA",
           roll:this.props.roll
       }

    }
    changeEvent =()=>{
        this.setState({
            cousrse:"BCA"
        })
        // console.log("Hello Viplav",this.state.cousrse);
        console.log("Hello Viplav",this.props.roll);
    }
    render(){
        const numbers = this.props.numbers; // Manage list data object using props
    //   const numbers=[3,4,5,6];
    //   const newNumbers=numbers.map((numbers)=>{return <li>{numbers}</li>});

    // console.log(numbers);
    // console.log(newNumbers);
        return (
           <div>
          {/* <button onClick={this.changeEvent} >Click ME</button> */}
          <button onClick={this.changeEvent} >Hit ME</button>
          {/* {this.state.cousrse} */}
          {this.props.roll}
          {/* <ul>{newNumbers}</ul>  */}


         <ul>  
         {
            numbers.map((numbers)=> <li key={numbers}>{numbers}</li>)
          }
           </ul> 
        <ul > {numbers}</ul> 
          {/* {numbers[0]} // access single element */}
           </div>
           
        )   
    }
}

export default CFunctionClick;

{/* <a href="google.com" onclick = function() return false ;> */}
