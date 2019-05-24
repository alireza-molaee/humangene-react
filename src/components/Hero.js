import React from 'react';
import heroBackground from '../assets/dna.jpg'

export default function Hero(props) {
  return (
    <header className="hero">
      <div className="hero__bg-image" style={{backgroundImage: `url(${heroBackground})`}}></div>
      <h1 className="hero__title">{props.children}</h1>
    </header>
  )
}
