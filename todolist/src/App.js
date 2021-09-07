import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Body from './components/body';
import { createStore, action, StoreProvider } from './../node_modules/easy-peasy';

const store = createStore({
  todolists: [
    { name: "name1", compleated: false },
    { name: "name2", compleated: true },
    { name: "name3", compleated: false }
  ],
  addTodo: action((state, payload) => {
    state.todolists.push({name: payload, compleated: false});
  }),
  updateTodo: action((state, todoIdx) => {
    state.todolists[todoIdx].compleated = !state.todolists[todoIdx].compleated;
  }),
  deleteTodo: action((state, todeleteIdx) => {
    state.todolists.splice(todeleteIdx, 1);
  })
});

const App = () => {
  
    return (
      <StoreProvider store={store}>
        <div className="fixedContainer">
          <Body/>
        </div>
      </StoreProvider>
    )
  
}

export default App;
