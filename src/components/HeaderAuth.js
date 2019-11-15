import React from 'react';
import { isLogin, getUser, logout } from '../utils/auth';
import { I18nContext } from '../i18n';

export default function HeaderAuth(props) {
    if (isLogin()) {
        const userData = getUser();
        return (
            <I18nContext.Consumer>
                {i18n => (
                    <div className="header-auth">
                        <span className="header-auth__username">{userData.name}</span>
                        <button type="button" onClick={() => {logout()}} className="btn">{i18n.signOut}</button>
                    </div>
                )}
            </I18nContext.Consumer>
        )
    } else {
        return (
            <I18nContext.Consumer>
                {i18n => (
                    <div className="header-auth">
                        <button type="button" onClick={() => {props.onClickLogin()}} className="btn">{i18n.signIn}</button>
                        <span>&nbsp;</span>
                        <button type="button" onClick={() => {props.onClickRegister()}} className="btn btn--outline">{i18n.register}</button>
                    </div>
                )}
            </I18nContext.Consumer>
        )
    }
}
