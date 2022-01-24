import React from 'react';

class App extends React.Component {
  state={ message:"Hello, There"} //State only takes Object
  render() {
    return <>
    <h4>Message: {this.state.message}</h4>
    <button onClick={this.ChangeText}>Change Text</button>
    </>
  }
  ChangeText=()=>{
    this.setState({message:"Its SamZayd"})
  }
}

export default App;
