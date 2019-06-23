import React from 'react'
import Slider from 'react-animated-slider';
import Slide from './Slide';


export default function MySlider(props) {
  return (
    <div>
      <Slider duration={700} autoplay={3000}>
        {props.slids.map((article, index) => (
          <Slide key={`slide-${index}`} {...article} />
        ))}
      </Slider>
    </div>
  )
}
