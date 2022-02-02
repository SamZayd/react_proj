import React, { Component } from 'react'
import Axios from 'axios';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userd: []
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ userd: response.data })
            }).catch()
    }
    render() {
        return (
            <>
                <div className="conatiner bg-dark mt-2 text-light">
                    <h1 className='ml-5'>Application Users Data</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>City</th>
                                        <th>Company</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.userd.map((usern) => {
                                            return <tr>
                                                <td>{usern.id}</td>
                                                <td>{usern.name}</td>
                                                <td>{usern.email}</td>
                                                <td>{usern.username}</td>
                                                <td>{usern.address.city}</td>
                                                <td>{usern.company.name}</td>
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default User