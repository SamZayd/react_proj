import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card"  style={{height:'500px', width:'150%'}}>
                                <div className="card-header bg-dark text-light">
                                <h5>Details</h5>
                                    <img src={this.props.details.picture.large} />
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.props.details.email}</li>
                                        <li className="list-group-item">{this.props.details.gender}</li>
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