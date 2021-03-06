import React from 'react';

const Todolist = ({Todos,deleteHandler,views,editHandler})=>{
    return(<>
            <div className='container justify-content-center' style={{marginLeft:"100px"}}>
                <div className='row'>
                    <div className='col col-md-11'>
                
                    {(views)===true?<>
        
                        {
                            Object.keys(Todos).length>0?<table className='table table-striped'>    
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>email</th>
                                    <th>project_name</th>
                                    <th>Task-description</th>
                                    <th>Status</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th> Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Todos.map((todo,index)=>{
                                        return(<tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{todo.name}</td>
                                                <td>{todo.email}</td>
                                                <td>{todo.project_name}</td>
                                                <td>{todo.task_description}</td>
                                                <td>{todo.status}
                                                    {todo.Progess}
                                                    {todo.Done}
                                                </td>
                                                <td>{todo.start_date}</td>
                                                <td>{todo.end_date}</td>
                                                <td className='table-delete-edit_btn justify-content-between'>
                                                    <i className="fas fa-edit text-success mx-3"
                                                    onClick={()=>editHandler(index)}></i> 
                                                    <i className="fas fa-trash text-danger" 
                                                    onClick={()=>deleteHandler(index)}></i>
                                                </td>
                                            </tr>)
                                    }) 
                                }
                            </tbody>
                        </table>:null
                        }
                        </>:null}
                        
                    </div>
                </div>
            </div>
        
    </>)
}

export default Todolist;