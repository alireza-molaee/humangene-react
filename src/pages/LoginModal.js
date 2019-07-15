import React, { Component } from 'react';
import logoPng from '../assets/logor.png'
import { login } from '../utils/api';
import * as auth from '../utils/auth';

export default class LoginModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            validationErrors: {}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    submitLogin(e) {
        e.preventDefault();
        login({
            username: this.state.username,
            password: this.state.password
        }).then(user => {
            auth.login(user)
            this.props.onClose();
        }).catch(err => {
            if (err.response) {
                this.setState({
                    ...this.state,
                    validationErrors: {
                        message: err.response.data.result || err.response.data[0] || '',
                        email: err.response.data.email || '',
                        password: err.response.data.password || '',
                    }
                })
                
            }
        })
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div className="modal" style={{display: this.props.show ? 'block' : 'none'}}>
                <span onClick={() => {this.props.onClose()}} className="close" title="Close Modal">&times;</span>
                <form className="modal-content animate" onSubmit={this.submitLogin}>
                    <div className="imgcontainer">
                        <img src={logoPng} alt="logo" className="avatar" />
                    </div>

                    <div className="row">
                        {this.state.validationErrors.message && <div className="col-xs-12"><p style={{color: 'red', direction: 'rtl', fontSize: '14px', marginBottom: '15px'}}>{this.state.validationErrors.message}</p></div>}
                        <div className={this.state.validationErrors.email ? "col-xs-12 form-group invalid" : "col-xs-12 form-group"}>
                            <label htmlFor="uname"><b>نام کاربری (ایمیل)</b></label>
                            {this.state.validationErrors.email && (<span className="error-message">{this.state.validationErrors.firstName}</span>)}                            
                            <input type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="نام کاربری خود را وارد کنید" name="username" required />
                        </div>

                        <div className={this.state.validationErrors.password ? "col-xs-12 form-group invalid" : "col-xs-12 form-group"}>
                            <label htmlFor="psw"><b>رمز عبور</b></label>
                            {this.state.validationErrors.password && (<span className="error-message">{this.state.validationErrors.firstName}</span>)}                            
                            <input type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="رمز عبور را وارد کنید" name="password" required />
                        </div>

                        <div className="col-xs-12 btn-container">
                            <button className="btn" type="submit">ورود</button>
                                <span>&nbsp;</span>
                            <button className="btn btn--secondary" onClick={() => {this.props.onClose()}} type="button">انصراف</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
