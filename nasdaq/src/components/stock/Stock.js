import React, { Component } from 'react';
import '../../css/stock/stock.css'
class Stock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPrefer: props.isPrefer
        };
        console.log(this.state.isPrefer);
        console.log(this.props.dati);
    }

    addPrefer = () => {
        console.log("Aggiungi");
        this.props.addPrefer(this.props.position);
    }


    render() {
        console.log('2f) FIGLIO Render');
        let title = this.state.isPrefer ? "PREFERITI" : "LISTA";
        let plus = this.state.isPrefer ? "" :
                    <div className="col" onClick={this.addPrefer}>
                        <h2 ><i className="far fa-plus-square"></i></h2>
                    </div>;
        return (
            <div className="stock col-5 offset-1">
                <div className="row">
                    <div className="col">
                        <h2>Name - Position</h2>
                        <p>{this.props.name} - {this.props.position}</p>
                    </div>
                    <div className="col">
                        <h2>DATE</h2>
                        <p>{this.props.dati.date}</p>
                    </div>
                    <div className="col">
                        <h2>OPEN</h2>
                        <p>{this.props.dati.open}</p>
                    </div>
                    <div className="col">
                        <h2>HIGH</h2>
                        <p>{this.props.dati.high}</p>
                    </div>
                    <div className="col">
                        <h2>LOW</h2>
                        <p>{this.props.dati.low}</p>
                    </div>
                    {plus}
                </div>
            </div>
        )
    }
}

export default Stock
