import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <>
            <nav className="navbar navbar-expand-lg">
                <Link to="home"> React Routing </Link>
                <div className=" navbar navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="user" className="nav-link"> User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a href="product" className="nav-link">Product</a>
                        </li>
                        <li className="nav-item">
                            <Link to="sms" className="nav-link">SMS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    }
}

export default Navbar