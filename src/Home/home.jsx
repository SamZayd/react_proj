import React, { Component } from 'react';
import back from './BG.png'

class Home extends Component {

  state={ani : <div style={{fontSize:"60px"}}>React Routing using Axios</div>}
  
  anima=()=>{
    this.setState({ani:<div style={{fontSize:"40px"}}>React Routing Axios</div>})
    
  }
  // caught(){
  //   const interval =setInterval(()=>{
  //     const current = new Date();
  //       let hrs= current.getHours();
  //     let min= current.getMinutes();
  //     let sec= current.getSeconds();
  //     let mer= "AM";
  //     console.log(hrs,":",min,":",sec,"  ",mer)
  //   },1000)
    
  // }

  render() {
    return<>
            <div style={{backgroundImage:`url(${back})`,
                         backgroundPosition: 'center',
                         backgroundSize: 'cover',
                         backgroundRepeat: 'no-repeat',
                         width: '100vw',
                         height: '88vh'}}>

              <div className='container text-light' onClick={this.anima} style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
                  {this.state.ani}   
              </div>
              <div className='conatiner'>
                  <div className=''>10</div>   
                  <div className=''>30</div>   
                  <div className=''>50</div>
                </div>
            </div>
          </>;
          }
}

export default Home;