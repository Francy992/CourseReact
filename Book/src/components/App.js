import React from 'react'
import Home from "./home/Home";
import Template from "./mainLayout/template/Template";
import Login from './login/Login'
import Booklist from './booklist/Booklist'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './../css/style.css'

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/booklist' component={Booklist}/>
        </Switch>
      </Template>
    </BrowserRouter> 
  );
}

export default App;
