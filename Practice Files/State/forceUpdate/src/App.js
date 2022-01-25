import React, { Component } from 'react';

class App extends Component {
  message ="Hey There "
  name="Sam"
  msgHandler=()=>{
    console.log(this.message,"Before");
    this.message="Bye Bye "
    console.log(this.message,"After");
    this.forceUpdate()
  }
  render() {console.log("Render()");
    return <>
      <h5>Message: {this.message}</h5>
      <button onClick={this.msgHandler}>Change</button>
    </>
  }
}

export default App;
