import React from 'react'
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom'

function Routing() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>

                        <li>
                            <Link to="/home" >Home </Link>
                        </li>

                        <li>
                            <Link to="/about" > About</Link>
                        </li>

                        <li>
                            <Link to="/user" >User </Link>
                        </li>


                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/about">

                    <About></About>
                </Route>
                <Route path="/user">

                    <User></User>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routing;

function Home() {
    return <h2>Home</h2>;
}
function About() {
    return <h2>About</h2>;
}
function User() {
    return <h2>User</h2>;
}
