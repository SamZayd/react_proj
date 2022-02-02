import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import User from '../User/User'
class Navbar extends Component {
    findText=(event)=>{
        console.log(User);
        event.preventDefault()
    }

    active(name){
        //when a page is active change its className to (nav-link active)
        console.log(name) 
    }

    render() {
        return <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <Link to="home" className="navbar-brand "> React Routing </Link>
                        <div className=" navbar navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="user" className="nav-link"  > User</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="sms" className="nav-link" name="smsl" onClick={this.active}>Message</Link>                                    
                                </li>
                                <li className="nav-item">
                                    <a href="product" className="nav-link disabled" onClick={this.active}>Product</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="contact" className="nav-link disabled" onClick={this.active}>Contact</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search"/>
                                <button className="btn btn-outline-light ml-2" onClick={this.findText} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
               </>
               }}

export default Navbar