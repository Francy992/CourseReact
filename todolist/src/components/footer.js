import React from 'react'
import { useState } from "react";
import { useStoreActions } from './../../node_modules/easy-peasy';

const Footer = () => {    
    const [todo, setTodo] = useState([]);
    const addGlobal =  useStoreActions(actions => actions.addTodo);

    const addTodo = () => {
        console.log(todo);
        addGlobal(todo);
        setTodo("");
    }

    const updNewTodo = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div className="row m-1">
            <div className="input-group mb-3">
                <input type="text" className="form-control bigRadius" placeholder="Add Todo..." value={todo} onChange={updNewTodo}/>
                <div className="input-group-append m-1">
                    <button className="btn btn-outline-secondary bigRadius" type="button" onClick={addTodo}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
