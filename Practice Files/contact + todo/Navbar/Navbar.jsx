import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    render() {
        return <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <Link to="home" className="navbar-brand "> React Routing </Link>
                        <div className=" navbar navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="userapp" className="nav-link"> User</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="sms" className="nav-link" name="smsl">Message</Link>                                    
                                </li>
                                <li className="nav-item">
                                    <a href="todo" className="nav-link">To-Do</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="contact" className="nav-link disabled">Contact</Link>
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