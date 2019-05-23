import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
import Slider from '../components/Slider';
import Feature from '../components/Feature';
import SectionHeader from '../components/SectionHeader';
import Service from '../components/Service';


const features = [
  {
    title: 'ارائه‌ی خدمات در کمترین زمان',
    icon: 'car',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. '
  },
  {
    title: 'ارائه‌ی خدمات در کمترین زمان',
    icon: 'car',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. '
  },
  {
    title: 'ارائه‌ی خدمات در کمترین زمان',
    icon: 'car',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. '
  },
]

const services = [
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'car.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'car.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'car.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'car.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'car.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'car.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
]

export default class Home extends Component {
  renderFeatures() {
    return features.map((item, index) => {
      return (
        <div className="col-sm-4">
          <Feature {...item} indexInRow={(index % 3) + 1}/>
        </div>
      )
    })
  }

  renderServices() {
    return services.map((item, index) => {
      return (
        <div className="col-sm-4">
          <Service {...item} backgroundColorIndex={(index % 3) + 1}/>
        </div>
      )
    })
  }
  
  render() {
    const renderedFeatures = this.renderFeatures();
    const renderedServices = this.renderServices();

    return (
      <div className="home-page">
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Header isSticky />
        <Slider />
        <div class="divider divider--full-width divider--gradient"></div>
        <section className="features-section container-fluid">
          <div className="row around-xs">
            {renderedFeatures}
          </div>
        </section>
        <section>
          <SectionHeader>خدمات ما</SectionHeader>
          <div className="row around-xs">
            {renderedServices}
          </div>
        </section>
      </div>
    )
  }
}
