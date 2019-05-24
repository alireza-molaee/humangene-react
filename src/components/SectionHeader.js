import React from 'react'

export default function SectionHeader(props) {
  let className = "section-header"
  if (props.secondary) {
    className += " section-header--secondary"
  }
  return (
    <header className={className}>
      <h2 className="section-header__title">{props.children}</h2>
      <div className="divider"></div>
    </header>
  )
}
