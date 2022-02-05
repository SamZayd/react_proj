import React, { Component } from 'react'
import Axios from 'axios';
import Profile from './Profile';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userd: []
        }
    }
    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                this.setState({ userd: response.data })
            }).catch()
    }
    render() {
        return (
            <>
                <div className="conatiner bg-dark mt-2 text-light">
                    <h1 className='mr-5'>Application Users Data</h1>
                </div>
                <div className="container ml-1">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover">
                                <thead className="bg-dark text-white" style={{display:'block'}}>
                                    <tr>
                                        <th style={{ position: 'sticky',left: '5px'}}>Id</th>
                                        <th style={{ position: 'sticky',left: '80px'}}>Name</th>
                                        <th style={{ position: 'sticky',left: '235px'}}>Email</th>
                                        <th style={{ position: 'sticky',left: '485px'}}>Gender</th>
                                        <th style={{ position: 'sticky',left: '565px'}}>City</th>
                                        <th style={{ position: 'sticky',left: '755px'}}>Age</th>
                                    </tr>
                                </thead>
                                <tbody style={{display:'block', height: '470px', width: '850px' ,overflowY:'scroll' ,scrollbarWidth:'thin'}}>
                                    {
                                        this.state.userd.map((usern) => {
                                            return <tr key={usern.login.uuid}>
                                                <td>{usern.login.uuid.substring(32,36)}</td>
                                                <td>{usern.name.first} {usern.name.last}</td>
                                                <td>{usern.email}</td>
                                                <td>{usern.gender}</td>
                                                <td>{usern.location.city}</td>
                                                <td>{usern.dob.age}</td>
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className="col">
                            <Profile/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default User