import React from 'react'

export default function HeaderAuth(props) {
    return (
        <div className="header-auth">
            <button type="button" onClick={() => {props.onClickLogin()}} className="btn">ورود</button>
        </div>
    )
}
