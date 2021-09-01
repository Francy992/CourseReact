import React, { Component } from 'react'
import Header from './header'
import Todolist from './todolist'
import Footer from './footer'

class body extends Component {
    constructor(props){
        super(props);
        this.state = {
            todolists: [
                { name: "name1", compleated: false },
                { name: "name2", compleated: true },
                { name: "name3", compleated: false }
            ]
        }
    }

    addTodo = (todoName) => {
        let newLists = [...this.state.todolists, {name: todoName, compleated: false}];
        this.setState({todolists: newLists}, () => {console.log("Finito add"); console.log(this.state.todolists)});
    }

    updateTodo = (todoIdx) => {
        let newState = this.state.todolists;
        newState[todoIdx].compleated = !this.state.todolists[todoIdx].compleated;
        this.setState({todolists: newState}, () => {console.log("Finito update"); console.log(this.state.todolists)});
    }

    deleteTodo = (todoIdx) => {
        let newState = this.state.todolists;
        newState.splice(todoIdx, 1);
        this.setState({todolists: this.state.todolists}, () => {console.log("Finito delete"); console.log(this.state.todolists)});
    }    

    render() {
        return (
            <div className="box">
                <Header numberTodo={this.state.todolists.length} remainTodo={this.state.todolists.filter(x => !x.compleated).length}/>
                <Todolist listOfTodo={this.state.todolists} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer newTodo={this.addTodo}/>
            </div>
        )
    }
}

export default body
