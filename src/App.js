import React from 'react';
import './App.css';
import Components from './Components'

const App = ()=> {
return (
    <div className="App">
   < Components />
    </div>
      
    );
  
}

export default App;
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // React in {props} using functional components :

import React from 'react';
import './App.css';
import Components from './Components'

const App = ()=> {
return (
    <div className="App">
   <Components name="viplav" />
   <Components name="Jack" />
   <Components name="Jackson" />
     
  
    </div>
      
    );
  
}

export default App; 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
