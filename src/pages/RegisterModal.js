import React, { Component } from 'react';
import logoPng from '../assets/logor.png'
import { register } from '../utils/api';
import * as auth from '../utils/auth';

export default class RegisterModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password1: '',
            password2: '',
            validationErrors: {},
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitRegister = this.submitRegister.bind(this);
    }

    submitRegister(e) {
        e.preventDefault();
        register({
            email: this.state.email,
            password: this.state.password1,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        }).then(() => {
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
                <form className="modal-content animate" onSubmit={this.submitRegister}>
                    <div className="imgcontainer">
                        <img src={logoPng} alt="logo" className="avatar" />
                    </div>

                    <div className="row">
                        <div className={this.state.validationErrors.email ? "col-xs-12 form-group invalid" : "col-xs-12 form-group"}>
                            <label htmlFor="email"><b>ایمیل</b></label>
                            {this.state.validationErrors.email && (<span className="error-message">{this.state.validationErrors.email}</span>)}
                            <input type="text" value={this.state.email} onChange={this.handleInputChange} placeholder="ایمیل خود را وارد کنید" name="email" id="email" />
                        </div>

                        <div className={this.state.validationErrors.firstName ? "col-xs-12 form-group invalid" : "col-xs-12 form-group"}>
                            <label htmlFor="fist-name"><b>نام</b></label>
                            {this.state.validationErrors.firstName && (<span className="error-message">{this.state.validationErrors.firstName}</span>)}
                            <input type="text" value={this.state.firstName} onChange={this.handleInputChange} placeholder="تام شما..." name="firstName" id="fist-name" />
                        </div>

                        <div className={this.state.validationErrors.lastName ? "col-xs-12 form-group invalid" : "col-xs-12 form-group"}>
                            <label htmlFor="last-name"><b>نام خانوادگی</b></label>
                            {this.state.validationErrors.lastName && (<span className="error-message">{this.state.validationErrors.lastName}</span>)}
                            <input type="text" value={this.state.lastName} onChange={this.handleInputChange} placeholder="نام خانوادگی شما..." name="lastName" id="last-name" />
                        </div>

                        <div className={this.state.validationErrors.password ? "col-xs-12 form-group invalid" : "col-xs-12 form-group"}>
                            <label htmlFor="password-1"><b>رمز عبور</b></label>
                            {this.state.validationErrors.password && (<span className="error-message">{this.state.validationErrors.password}</span>)}
                            <input type="password" value={this.state.password1} onChange={this.handleInputChange} placeholder="رمز عبور برای ورود" name="password1" id="password-1" />
                        </div>

                        <div className={this.state.validationErrors.password ? "col-xs-12 form-group invalid" : "col-xs-12 form-group"}>
                            <label htmlFor="password-2"><b>تکرار رمز عبور</b></label>
                            <input type="password" value={this.state.password2} onChange={this.handleInputChange} placeholder="تکرار رمز عبور وارد شده" name="password2" id="password-2" />
                        </div>

                        <div className="col-xs-12 btn-container">
                            <button className="btn" type="submit">ثبت نام</button>
                                <span>&nbsp;</span>
                            <button className="btn btn--secondary" onClick={() => {this.props.onClose()}} type="button">انصراف</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
