import React from 'react'
import Todo from './todo';
import {useStoreState } from './../../node_modules/easy-peasy';

const Todolist = () => {

    const todolists = useStoreState(state => state.todolists);
    
    return (
        <div className="boxtodo">
            {todolists.map((el, index) => {
                return <Todo data={el} idx={index} key={index}/>
                }
            )}
        </div>
    )
}

export default Todolist
