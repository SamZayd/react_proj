import React from 'react';

class Footer extends React.Component {
  render() {
    return <>
    <h3>Footer </h3>
    <hr/>
    <h5>Id: {this.props.id}</h5>
    <hr/>
    <h5>Name: {this.props.name}</h5>
    <hr/>
    <h5>Salary: {this.props.salary}</h5>
    </>
  }
}

export default Footer;