import React from 'react';

function Components() {
    return (
        <div>
            <h1>Hello Viplav</h1>
        </div>
    );
}

export default Components; 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//For {props}

import React from 'react';

function Components(props) {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    );
}

export default Components;
