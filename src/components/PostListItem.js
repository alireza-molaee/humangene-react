import React from 'react';
import { Link } from 'react-router-dom';


export default function PostListItem(props) {
    return (
        <Link to={`/news/${props.id}`}>
          <div className="post-list-item">
            <img className="post-list-item__image" src={props.image} alt={props.title} />
            <h3 className="post-list-item__title">{props.title}</h3>
            <h4 className="post-list-item__category">{props.category}</h4>
          </div>
        </Link>
    )
}
