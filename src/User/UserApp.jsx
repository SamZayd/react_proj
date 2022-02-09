import React, { Component } from 'react'
import User from './User'
import Profile from './Profile'
import Axios from 'axios'

class UserApp extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [], selectedContact: {} }
    }
    getSelectedContact = (contact) => {
        this.setState({ selectedContact: contact })
    }
    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                this.setState({ contacts: response.data })
            })
            .catch()

    }
    render() {
        return (
            <>
                <div className='container bg-dark mt-2 text-light'>
                    <h1 className='mr-5'>Application Users Data</h1>
                </div>
                <div className="container ml-1">
                    <div className="row">
                        <div className="col-md-8 ml-1">
                            {
                                this.state.contacts.length > 0 ? <><User contacts={this.state.contacts} selContact={this.getSelectedContact} />
                                </> : null
                            }

                        </div>
                        <div className="col-md-3">
                            {
                                Object.keys(this.state.selectedContact).length > 0 ? <> <Profile details={this.state.selectedContact} /></> : null
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default UserApp