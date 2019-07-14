import React, { Component } from 'react';
import logoPng from '../assets/logor.png'

export default class Login extends Component {
    render() {
        return (
            <div class="modal">
                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
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
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
