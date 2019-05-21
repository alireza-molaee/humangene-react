import React from 'react'
import Slider from 'react-animated-slider';
import Slide from './Slide';

const content = [
  {
    image: "https://picsum.photos/id/5/1200/900",
    title: "عنوان اول",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
    link: 'google.com'
  },
  {
    image: "https://picsum.photos/id/6/1200/900",
    title: "عنوان اول",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
  },
  {
    image: "https://picsum.photos/id/7/1200/900",
    title: "عنوان اول",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
  },
  {
    image: "https://picsum.photos/id/8/1200/900",
    title: "عنوان اول",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
  },
]

export default function MySlider() {
  return (
    <div>
      <Slider duration={700}>
        {content.map((article, index) => (
          <Slide key={`slide-${index}`} {...article} />
        ))}
      </Slider>
    </div>
  )
}
