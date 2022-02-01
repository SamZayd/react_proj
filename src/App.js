import React from 'react'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import SMS from './SMS/SMS'
import User from './User/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar/>
                <Switch>
                  <Route path="/home" component={Home} />  
                  <Route path="/user" component={User} />
                  <Route path="/sms" component={SMS} />
                </Switch>
            </Router>
        </>
    }
}
export default App