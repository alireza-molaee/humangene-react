import React from 'react';

export default function Company(props) {
  return (
    <div className="company">
      <a className="company__link" href={props.link}>
        <img className="company__image" src={props.image} alt={props.title} />
      </a>
    </div>
  )
}
