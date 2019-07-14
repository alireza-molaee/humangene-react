import React, { Component } from 'react';
import logoPng from '../assets/logor.png'

export default class LoginModal extends Component {
    render() {
        return (
            <div class="modal" style={{display: this.props.show ? 'block' : 'none'}}>
                <span onClick={() => {this.props.onClose()}} class="close" title="Close Modal">&times;</span>
                <form class="modal-content animate">
                    <div class="imgcontainer">
                        <img src={logoPng} alt="logo" class="avatar" />
                    </div>

                    <div class="row">
                        <div className="col-xs-12 form-group">
                            <label for="uname"><b>نام کاربری</b></label>
                            <input type="text" placeholder="نام کاربری خود را وارد کنید" name="username" required />
                        </div>

                        <div className="col-xs-12 form-group">
                            <label for="psw"><b>رمز عبور</b></label>
                            <input type="password" placeholder="رمز عبور را وارد کنید" name="password" required />
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
