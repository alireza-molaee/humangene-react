import React from 'react'

export default function PostListItem(props) {
    return (
        <div className="post-list-item">
          <img className="post-list-item__image" src={props.image} alt={props.title} />
          <h3 className="post-list-item__title">{props.title}</h3>
          <h4 className="post-list-item__category">{props.category}</h4>
        </div>
    )
}
