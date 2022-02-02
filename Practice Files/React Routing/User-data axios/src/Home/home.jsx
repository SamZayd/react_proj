import React, { Component } from 'react';
import back from './BG.png'
import TextAnimation from './animation/TextAnimation';

class Home extends Component {
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

              <div className='container text-light' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:"50%", fontSize:"60px"}}>
                  <TextAnimation/>
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