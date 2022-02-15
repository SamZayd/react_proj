import React, { Component } from 'react'

class Todoform extends Component {
  render() {
    return (
      <>
        <div className="container bg-dark" style={{height:'100%', width:'100%'}}>
        <div className='row m-md-auto'>
            <div className='col col-md-6  m-md-auto'>
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
                        <div className=' row'>
                          <div className='col'>
                                <p className=' text-light'>Start Date</p>
                                <input type='date' name='start_date' className='form-control'/>
                                <p className='text-danger m-0'></p>
                                </div>
                                <div className='col'>
                                <p className='text-light'>End Date</p>
                                <input type='date' name='end_date' className='form-control col-sm'/>
                                <p className='text-danger m-0'></p></div>
                        </div>
                        <div className='mb-3 mt-3'>
                            <div className=' d-md-flex align-items-center text-light radio-status'>
                                <p className='m-0'>Task Status:</p> 
                                <div className='ml-3'>  
                                  <input type='radio' name='status' className='form-check-input' className="ml-8" value='Planned'/> Planned
                                </div>
                                <div className='ml-3'>
                                  <input type='radio' name='status' className='form-check-input' className='ml-8' value='In-Progress'/> In-Progress
                                </div>
                                <div className='ml-3'>
                                 <input type='radio' name='status' className='form-check-input' className='ml-8' value='Done'/> Done
                                </div>
                            </div>
                            <p className='text-danger m-0'></p>
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