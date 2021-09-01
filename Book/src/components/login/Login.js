import React, { Component } from 'react'
import LoginService from './loginServices';

export class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            showError: false,
            showSuccess: false,
            errorMessage: "",
            successMessage: ""
        }

        this.LoginService = new LoginService();
    }

    onChangeForm = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(`Changed: ${e.target.name}:${e.target.value}`)
    }

    onSubmit(e){
        e.preventDefault();
        this.login(e);
    }

    login(e){
        console.log(`Login con usermane: "${this.state.username}" e password: "${this.state.password}"`);
        this.LoginService.login(this.state.username, this.state.password, this.loginSuccess, this.loginError);
    }

    loginSuccess = (dataResult) => {
        this.setState({
            showSuccess: true,
            successMessage: "Login avvenuto con successo, il tuo token è: " + dataResult.token,
            showError: false,
            errorMessage: ""
        });
        this.props.history.push('/booklist');
    }

    loginError = (errorData) => {
        this.setState({
            showSuccess: false,
            successMessage: "",
            showError: true,
            errorMessage: "Login fallito per " + errorData
        })
    }

    getSuccessMessage = () => {
        if(this.state.showSuccess)
            return (
                <div style={{color: 'green'}}>
                    {this.state.successMessage}
                </div>
            );
    }

    
    getErrorMessage = () => {
        if(this.state.showError)
            return (
                <div style={{color: 'red'}}>
                    {this.state.errorMessage}
                </div>
            );
    }
    

    render() {
        var successMessage = this.getSuccessMessage();
        var errorMessage = this.getErrorMessage();
        return (
            <div style={{ marginTop: "100px", minHeight: "70vh" }}>
            <div className="container">
                <div className="row">
                    <div className="col-6 mr-auto ml-auto">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name='username'
                                    className="form-control"
                                    placeholder="Username"
                                    value={this.state.username} 
                                    onChange={this.onChangeForm}/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name='password'
                                    className="form-control"
                                    placeholder="Password"
                                    value={this.state.password} 
                                    onChange={this.onChangeForm}/>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary pull-right"
                            >
                                Invio
                            </button>
                            {successMessage}
                            {errorMessage}
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login