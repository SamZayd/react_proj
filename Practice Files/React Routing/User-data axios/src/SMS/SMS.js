import React, { Component } from 'react'
import back from '../Home/BG.png'

class SMS extends Component {
    state = { count: 100, maxLen: 100 }
    updateCountHandler = (event) => {
        //console.log(event.target.value)
        this.setState({ count: this.state.maxLen - event.target.value.length })
    }
    render() {
        return (
            <div style={{backgroundImage:`url(${back})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw',
                        height: '88vh'}}>
                <div className="col p-md-5" style={{justifyContent: 'center'}}>           
                <div className="card">
                    <div className="card-header bg-dark text-light">
                        <h2>Text Dropper</h2>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <textarea cols="30" rows="5" onChange={this.updateCountHandler} className="form-control" maxLength={this.state.maxLen}></textarea>
                            </div>
                            <h6>Remaining Char's:{this.state.count}</h6>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default SMS