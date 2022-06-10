import React, { useState } from 'react';
import './style.css';


const Userform = ({FormData})=>{

    const[name,setName]= useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const AddFormData =(e)=>{
    e.preventDefault()
    FormData({name,email,phone})
    setName('')
    setEmail('')
    setPhone('')
    }

    return (
        <form onSubmit={AddFormData}>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Name:</label>
              <div className='col-sm-10'>
                <input type="text" className='formcontrol' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Email:</label>
              <div className='col-sm-10'>
                <input type="text" className='formcontrol' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Phone:</label>
              <div className='col-sm-10'>
                <input type="number" className='formcontrol' id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              </div>
          </div>  
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      );
  }
  export default Userform