import React, { Component } from 'react'
import Todo from './todo';

class todolist extends Component {
    constructor(props) {
        super(props);
    }

    updateTodo = (todoIdx) => {
        this.props.updateTodo(todoIdx);
    }

    deleteTodo = (todoIdx) => {
        this.props.deleteTodo(todoIdx);
    }

    render() {
        return (
            <div className="boxtodo">
                {this.props.listOfTodo.map((el, index) => {
                    return <Todo data={el} idx={index} key={index} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    }
                )}
            </div>
        )
    }
}

export default todolist
