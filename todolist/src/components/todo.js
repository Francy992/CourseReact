import React from 'react'
import {useStoreActions } from './../../node_modules/easy-peasy';

const Todo = (data) => {

    const updateTodoState =  useStoreActions(actions => actions.updateTodo);
    const deleteTodoState =  useStoreActions(actions => actions.deleteTodo);

    const updateTodo = () => {
        updateTodoState(data.idx);
    }

    const deleteTodo = () => {
        deleteTodoState(data.idx);
    }

    return (
        <div className="row m-2">
            <div className="col-12">
                <div className="row">
                    <div className="col-9">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text" style={{backgroundColor: "white", border: "0px"}}>
                                    <input type="checkbox" checked={data.data.compleated} onChange={updateTodo} />
                                </div>
                            </div>
                            {data.data.name}
                        </div>
                    </div>
                    <div className="col-3 text-center">
                    {data.data.compleated ? 
                        <button className="btn btn-outline-secondary bigRadius" onClick={deleteTodo}>Delete</button> : ""}                     
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Todo
