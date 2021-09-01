import React, { Component } from 'react'

class header extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="row mt-4 text-center">
                <div className="col-sm-6">
                    <h2>{this.props.numberTodo} Tasks</h2>
                </div>
                <div className="col-sm-6">
                    <h4>{this.props.remainTodo} Remain</h4>
                </div>
                <div className="col-12">
                    <hr/>
                </div> 
 
            </div>
        )
    }
}

export default header
