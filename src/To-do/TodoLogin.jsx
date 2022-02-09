import React, { Component } from 'react'

export class TodoLogin extends Component {
  render() {
    return (<> 
    <div className="card mx-auto" style={{width:'18 rem'}}>
        <div className="card">
            <div className="card-header bg-dark text-light">
                <h2>To-Do-Application</h2>
            </div>
            <div>
                <form action="">
                    <div className="form-outline mb-4">
                        <br/>
                        <input type='text' placeholder='Name' className='form-control'></input>
                        <br/>
                        <input type='number' placeholder='Mobile' className='form-control'></input>
                    </div>
                    <div className='form-outline mb-4'>
                        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
                    </div>
                </form> 
            </div>
        </div>  
</div>
</>
)
  }
}

export default TodoLogin