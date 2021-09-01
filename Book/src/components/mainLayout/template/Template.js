import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export class Template extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Template
