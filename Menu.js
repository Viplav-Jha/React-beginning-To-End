// React-router with Menu

import React from 'react'
import {NavLink} from 'react-router-dom'

function Menu() {
    return (
        <div className="menu">
     
       <NavLink activeClassName="active__class" to ='/about'>About </NavLink>
       <NavLink exact activeClassName="active__class" to='/'> Contact</NavLink>
   <br />
        <a href ="/about" >AboutUS</a>
        <a href="/"> Contact</a>
            
        </div>
    )
}
