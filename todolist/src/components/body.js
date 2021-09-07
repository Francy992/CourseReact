import React from 'react'
import Header from './header'
import Todolist from './todolist'
import Footer from './footer'
import { useStoreState } from './../../node_modules/easy-peasy';

const Body = () => {
    const Todolists = useStoreState(state => state.todolists);

    return (
        <div className="box">
            <Header numberTodo={Todolists.length} remainTodo={Todolists.filter(x => !x.compleated).length}/>
            <Todolist listOfTodo={Todolists}/>
            <Footer/>
        </div>
    )
}

export default Body
