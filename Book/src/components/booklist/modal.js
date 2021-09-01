import React, { Component } from 'react'
import '../../css/booklist/modal.scss'


class Modal extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.show && (<div className='modal-main' id='modal'>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.desc ? this.props.desc.slice(0,180) + '...' : 'Descrizione non disponibile!'}</p>
                        {this.props.pag ? 
                            <div>Pag: {this.props.pag}</div> :
                            ''}
                        <div className="actions">
                            <button onClick={this.props.onHide} className="btn btn-danger">Chiudi</button>
                        </div>
                    </div>)}
            </React.Fragment>
        )
    }
}

export default Modal
