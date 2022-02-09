import React from 'react'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import SMS from './SMS/SMS'
import UserApp from './User/UserApp'
import TodoApp from './To-do/TodoApp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar/>
                <Switch>
                  <Route exact path="/"  component={Home} />
                  <Route path="/home" component={Home} />  
                  <Route path="/userapp" component={UserApp} />
                  <Route path="/sms" component={SMS} />
                  <Route path="/todo" component={TodoApp}/>
                </Switch>
            </Router>
        </>
    }
}
export default App