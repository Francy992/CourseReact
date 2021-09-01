import React, { Component } from 'react'
import logo from './logo.svg';
import './css/App.css';
import Stock from './components/stock/Stock';
import Search from './components/search/search';
import search from './components/search/search';


export class App extends Component {

  constructor(props) {
    super(props)
    this.state = { listaStock: [], prefer: []}
    console.log(`1g) il costruttore crea la prima istanza Genitore`)
  }

  // -------MOUNTING CREAZIONE ----------
  componentDidMount() {
    
  }

  searchStock = str => {
    console.log("Cercato " + str);
    this.getElements(str);
  }

  getElements = str => {
    const url = `http://api.marketstack.com/v1/intraday?access_key=deeda258c53628dc80452d2c12dab0b4&symbols=${str}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const {data} = res;
        console.log(res);
        console.log(data);
        data.name = str;
        this.setState({listaStock: data});
        console.log(this.state.listaStock);
      })
      .catch(error => alert(error));
  }

  addPrefer = index => {
    console.log("Index vale: " + index);
    // Add to prefer
    var elToAdd = this.state.listaStock[index];
    this.setState({prefer: this.state.prefer.concat(elToAdd)});
    // Remove from listaStock
    this.state.listaStock.splice(index, 1)
    console.log()
    this.setState({listaStock: this.state.listaStock});
  }

  render() {
    console.log(`2g) Genitore Render`)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{color:'gold'}}>
            Applicazione Stock Exchange
          </p>
          <Search onInputSearch={this.searchStock}/>
          <h1>PREFERITI</h1>
          <div className='row' id="prefer">
            {this.state.prefer.map((el, index) => <Stock dati = {el} isPrefer = {true} position = {index} name = {this.state.listaStock.name} addPrefer={this.addPrefer}/>)}
          </div>
          <h1>LISTA</h1>
          <div className='row' id="All">
            {this.state.listaStock.map((el, index) => 
              {
                if(index < 10){
                  return <Stock dati = {el} isPrefer = {false} position = {index} name = {this.state.listaStock.name} addPrefer={this.addPrefer}/> 
                }
              }
            )}
          </div>

        </header>
      </div>

    )
  }
}

export default App

