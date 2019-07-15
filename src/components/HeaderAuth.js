import React from 'react';
import { isLogin, getUser, logout } from '../utils/auth'

export default function HeaderAuth(props) {
    if (isLogin()) {
        const userData = getUser();
        return (
            <div className="header-auth">
                <span className="header-auth__username">{userData.name}</span>
                <button type="button" onClick={() => {logout()}} className="btn">خروج</button>
            </div>
        )
    } else {
        return (
            <div className="header-auth">
                <button type="button" onClick={() => {props.onClickLogin()}} className="btn">ورود</button>
                <span>&nbsp;</span>
                <button type="button" onClick={() => {props.onClickRegister()}} className="btn btn--outline">ثبت نام</button>
            </div>
        )
    }
}
