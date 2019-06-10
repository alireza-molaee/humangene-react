import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Member(props) {
    return (
        <div className="member-card">
            <img className="member-card__image" src={props.image} />
            <h4 className="member-card__name">{props.name}</h4>
            <h5 className="member-card__job">{props.job}</h5>
            <p className="member-card__description">{props.description}</p>
            <a className="member-card__email" href={props.email}>
                <FontAwesomeIcon icon={'envelope'} color="gray" />
            </a>
        </div>
    )
}
