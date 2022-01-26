import React, { Component } from 'react'

class App extends Component {
  
  state={name:"Iphone 11 pro", company:"Iphone", price:78000, qty:1, img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6YF2VxuO2BQ9heA6QVTBxB6nD_0XfzeJERordchleUeNy9MM7jRH2JF16GYB4ubacGeS6ZM-beYI&usqp=CAc"}

  incrHandler=()=>{
    this.setState({qty: this.state.qty+1})
  }


  decrHandler=()=>{
    this.setState({qty: this.state.qty-1})
  }

  render() {
    return <>
        <td>{this.state.name}</td>
        <td><img src={this.state.img} height="50px" width="40px"/></td>
        <td>{this.state.company}</td>
        <td>{this.state.price}</td>
        <td>
          { this.state.qty >   1 ?  <><i className="fa fa-minus-circle" onClick={this.decrHandler}></i></> :null} 

          { this.state.qty }
          <i className="fa fa-plus-circle" onClick={this.incrHandler}></i>
        </td>
        <td>{this.state.price * this.state.qty}</td>
      </>
  }
}

export default App;
