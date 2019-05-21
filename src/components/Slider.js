import React from 'react'
import Slider from 'react-animated-slider';

const content = [
  {
    image: "https://picsum.photos/id/5/1200/900",
    title: "عنوان اول",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
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
      <Slider>
        {content.map((article, index) => (
          <div
            key={index}
            style={{ background: `url('${article.image}') no-repeat center center` }}
          >
            <h2>{article.title}</h2>
            <div>{article.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
