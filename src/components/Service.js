import React from 'react'

export default function Service(props) {
    return (
        <div className="service">
            <img className="service__image" src={props.image} alt={props.title} />
            <div className="service__title">
                <h3 className="service__title__h3">{props.title}</h3>
                <div className="service__title__divider"></div>
            </div>
            <p className="service__description">
                {props.description}
            </p>
            <a href={props.link} className="service__link">
                بیشتر بدانید
            </a>
        </div>
    )
}
