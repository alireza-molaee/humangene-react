import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from 'react-reveal/Fade';

export default function Feature(props) {
    let gradientClassName;
    let fadePosition;
    switch (props.indexInRow) {
        case 1:
            gradientClassName = 'feature__icon__clip-wrap--gradient-1';
            fadePosition = 'left';
            break;
        case 2:
            gradientClassName = 'feature__icon__clip-wrap--gradient-2';
            fadePosition = 'center';
            break;
        case 3:
            gradientClassName = 'feature__icon__clip-wrap--gradient-3';
            fadePosition = 'right';
            break;
        default:
            gradientClassName = 'feature__icon__clip-wrap--gradient-1';
    }
    return (
        <Fade
            left={fadePosition === 'left'}
            right={fadePosition === 'right'}
        >
            <div>
                <div className="feature">
                    <div className="feature__icon">
                        <div className={`feature__icon__clip-wrap ${gradientClassName}`}>
                            <FontAwesomeIcon icon={props.icon} size="3x" color="white" />
                        </div>
                        <svg height="0" width="0">
                            <defs>
                                <clipPath id="hex">
                                    <path d="M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="feature__title">{props.title}</div>
                    <div className="feature__content">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
