import React, { Component } from 'react'

class search extends Component {
    constructor(props){
        super(props);
        this.state = {
            search:''
        }
    }

    onInputChange = e => {
        this.setState({search: e.target.value})
        console.log(this.state.search);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onInputSearch(this.state.search);
        this.setState({search:''});
    }

    onFocus = e => {
        e.target.blur();
    }

    render() {
        return (
            <div className='row'>
                <form className="form-inline" onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <input type="text" name="search" className="form-control" placeholder="" placeholder="Search..."
                                value={this.state.search}
                                onChange={this.onInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onFocus={this.onFocus}>Cerca</button>
                </form>
            </div>
        )
    }
}

export default search
