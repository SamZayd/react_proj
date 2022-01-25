import React, { Component } from 'react';

class App extends Component {
  state={
    message: "Hello There ",
    name: "Sam"
  }
  changeMsg=()=>{
    console.log("changeMsg()");
    this.setState({message:"Good Morning "})
  }
  changeMsg1=()=>{
    console.log("changeMsg1()");
    this.setState({message:"Looking Good "})
  }

  render() {
    console.log("rendermethod()");
    return <div>
      <h3>Messge is :{this.state.message} {this.state.name}</h3>
      <button onClick={this.changeMsg}>msg 1</button>  
      <button onClick={this.changeMsg1}>msg 2</button>
    </div>
  }
}

export default App;

