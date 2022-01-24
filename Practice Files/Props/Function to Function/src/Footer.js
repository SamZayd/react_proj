import React from 'react';

let Footer = (props) => {
  return (
    <>
    <h3>Footer </h3>
    <hr/>
    <h5>Id: {props.id}</h5>
    <hr/>
    <h5>Name: {props.name}</h5>
    <hr/>
    <h5>Salary: {props.salary}</h5>
    </>
  )
}

export default Footer;
