import React, { Component } from 'react'

class User extends Component {
    selectedContactHandler = (contact) => {
        this.props.selContact(contact);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover">
                                <thead className="bg-dark text-white"style={{display:'block'}}>
                                    <tr>
                                        <th style={{ position: 'sticky',left: '5px'}}>Id</th>
                                        <th style={{ position: 'sticky',left: '80px'}}>Name</th>
                                        <th style={{ position: 'sticky',left: '235px'}}>Email</th>
                                        <th style={{ position: 'sticky',left: '485px'}}>Gender</th>
                                        <th style={{ position: 'sticky',left: '565px'}}>City</th>
                                        <th style={{ position: 'sticky',left: '755px'}}>Age</th>
                                    </tr>
                                </thead>
                                <tbody style={{display:'block', height: '470px', width: '850px' ,overflowY:'scroll'}}>
                                    {this.props.contacts.map((contact) => {
                                        return <tr key={contact.login.uuid} onClick={this.selectedContactHandler.bind(this, contact)}>
                                            <td>{contact.login.uuid.substring(32, 36)}</td>
                                            <td>{contact.name.first+" "+contact.name.last}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.gender}</td>
                                            <td>{contact.location.city}</td>
                                            <td>{contact.dob.age}</td>
                                        </tr>})
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User