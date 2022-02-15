import React, { Component } from 'react'

class Todoform extends Component {
  render() {
    return (
      <>
        <div className="container bg-dark" style={{height:'500px', width:'4000px'}}>
        <div className='row m-md-auto'>
            <div className='col col-md-8  m-md-auto'>
                    <h1 className='text-center mb-3 text-light'>To Do List</h1>
                    <form method='post'>
                        <div className='mb-3'>
                            <input type='text' placeholder='Enter Your Name' name='name' className='form-control '/>
                        </div>
                        <div className='mb-3'>
                            <input type='email' placeholder='Enter your E-mail Id' name='email' className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <input type='number' placeholder='Enter your Mobile number' name='mobile' className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' placeholder='Enter your Project Name' name='project' className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' placeholder='Enter Task Description' name='task' className='form-control row-3'/>
                        </div>
                    </form>
            </div>
         </div>
        </div>           
      </>
    )
  }
}

export default Todoform