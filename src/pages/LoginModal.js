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
        })
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div class="modal" style={{display: this.props.show ? 'block' : 'none'}}>
                <span onClick={() => {this.props.onClose()}} class="close" title="Close Modal">&times;</span>
                <form class="modal-content animate" onSubmit={this.submitLogin}>
                    <div class="imgcontainer">
                        <img src={logoPng} alt="logo" class="avatar" />
                    </div>

                    <div class="row">
                        <div className="col-xs-12 form-group">
                            <label for="uname"><b>نام کاربری</b></label>
                            <input type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="نام کاربری خود را وارد کنید" name="username" required />
                        </div>

                        <div className="col-xs-12 form-group">
                            <label for="psw"><b>رمز عبور</b></label>
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
