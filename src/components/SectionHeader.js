import React from 'react'

export default function SectionHeader(props) {
  return (
    <header className="section-header">
      <h2 className="section-header__title">{props.children}</h2>
      <div className="divider"></div>
    </header>
  )
}
