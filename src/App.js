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


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#useState() with functional component 

import React from 'react';
import './App.css';
import Counter from  "./Counter"

const App = ()=> {
return (
    <div className="app">
   <div className="app__body">
     <UseState />
</div>
    </div>
      
    );
  
}

export default App; 



export default App; 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#useEffect() and useRef()

import React from 'react';
import './App.css';
import Counter from  "./Counter"

const App = ()=> {
return (
    <div className="app">
   <div className="app__body">
     <UseState />
</div>
    </div>
      
    );
  
}

export default App; 



export default App; 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// React-Router-dom
    
 import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Counter from  "./Counter";
import Error from './Error';


const App = ()=> {
return (
    
    <div className="app__body">
    <Menu />
      <Switch>
      <Route exact path='/' component={Contact} />
      <Route path='/about' component={About} />
      <Route component={Error} />
      </Switch>

   </div>
     
      
    );
  
}

export default App; 
