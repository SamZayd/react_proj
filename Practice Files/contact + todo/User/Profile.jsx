import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        return (
            <div>
                <div className="container ml-5">
                    <div className="row ml-5">
                        <div className="col ml-2">
                            <div className="card"  style={{height:'500px', width:'160%'}}>
                                <div className="card-header bg-dark text-light" >
                                <h5>{this.props.details.name.first+" "+this.props.details.name.last}</h5>
                                    <img src={this.props.details.picture.large} style={{marginLeft:'40px'}} alt='profile'/>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <label>Email: </label>
                                        <li className="list-group-item">{this.props.details.email}</li>
                                        <label>Phone: </label>
                                        <li className="list-group-item">{this.props.details.phone}</li>
                                        <label>Location: </label>
                                        <li className="list-group-item">{this.props.details.location.state+", "+this.props.details.location.country}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile