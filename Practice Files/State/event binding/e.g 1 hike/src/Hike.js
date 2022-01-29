import React from "react";

class Hike extends React.Component{

    state = {
        salary : 50000
    }
    setHike =(hi)=>{
        console.log("setHike()",hi);
        this.setState({salary: this.state.salary + hi})
    }
    render(){
        return<>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Salary : {this.state.salary}</h3>
                                </div>
                                <div className="card-body">
                                    <button className="btn btn-success" onClick={this.setHike.bind(this,1000)}>Hike 1k</button>
                                    <button className="btn btn-primary" onClick={this.setHike.bind(this,5000)}>Hike 5k</button>
                                    <button className="btn btn-warning" onClick={this.setHike.bind(this,10000)}>Hike 10k</button>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
             </>
             }
    
}
export default Hike