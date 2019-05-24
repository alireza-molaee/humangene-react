import React from 'react';

export default function Service(props) {
    let colorClassName;
    switch (props.indexInRow) {
        case 1:
            colorClassName = 'service--color-1';
            break;
        case 2:
            colorClassName = 'service--color-2';
            break;
        case 3:
            colorClassName = 'service--color-3';
            break;
        default:
            colorClassName = 'service--color-1';
    }
    return (
        <div className="service-wrapper">
            <div className={"service " + colorClassName}>
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
        </div>
    )
}
