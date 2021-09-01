import React, { Component } from 'react'

class footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTodo: ""
        }
    }

    addTodo = () => {
        this.props.newTodo(this.state.newTodo);
        this.setState({newTodo: ""});
    }

    updNewTodo = (e) => {
        this.setState({newTodo: e.target.value});
    }

    render() {
        return (
            <div className="row m-1">
                <div className="input-group mb-3">
                    <input type="text" className="form-control bigRadius" placeholder="Add Todo..." value={this.state.newTodo} onChange={this.updNewTodo}/>
                    <div className="input-group-append m-1">
                        <button className="btn btn-outline-secondary bigRadius" type="button" onClick={this.addTodo}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default footer
