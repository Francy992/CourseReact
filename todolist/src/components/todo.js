import React, { Component } from 'react'

class todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row m-2">
                <div className="col-12">
                    <div className="row">
                        <div className="col-9">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text" style={{backgroundColor: "white", border: "0px"}}>
                                        <input type="checkbox" checked={this.props.data.compleated} onChange={() => this.props.updateTodo(this.props.idx)} />
                                    </div>
                                </div>
                                {this.props.data.name}
                            </div>
                        </div>
                        <div className="col-3 text-center">
                        {this.props.data.compleated ? 
                            <button className="btn btn-outline-secondary bigRadius" onClick={() => this.props.deleteTodo(this.props.idx)}>Delete</button> : ""}                     
                        </div>
                        <hr />
                    </div>
                </div>
            </div>

        )
    }
}

export default todo
