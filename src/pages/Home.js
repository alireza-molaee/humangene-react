import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
import Slider from '../components/Slider';
import Feature from '../components/Feature';
import SectionHeader from '../components/SectionHeader';
import Service from '../components/Service';
import CompanyList from '../components/CompanyList'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const companies = [
  {
    title: 'دانشگاه علوم پزشکی شهید بهشتی',
    image: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png',
    link: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png'
  },
  {
    title: 'پژوهشکده جهاد دانشگاهی معتمد',
    image: 'http://humangene.ir/wp-content/uploads/2018/06/57431303.jpg',
    link: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png'
  },
  {
    title: 'آزمایشگاه نیلو',
    image: 'http://humangene.ir/wp-content/uploads/2018/06/logo1.png',
    link: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png'
  },
  {
    title: 'آزمایشگاه پارسه',
    image: 'http://humangene.ir/wp-content/uploads/2018/06/parseh-lab-logo.jpg',
    link: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png'
  },
  {
    title: 'مرکز فوق تخصصی متابولیک دانشگاه علوم پزشکی تهران',
    image: 'http://humangene.ir/wp-content/uploads/2018/06/download.jpg',
    link: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png'
  },
]

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
    image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
  {
    title: 'تحلیل داده‌های خام زیستی',
    image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
    link: 'google.com'
  },
]

const aboutSummeryText = `
شرکت هومن ژن پارس، از سال ۱۳۹۵ تحت عنوان مرکز خدمات امیکس شریف (مستقر در دانشگاه صنعتی شریف) توسط جمعی از متخصصین بایوانفورماتیک، بیوشیمی و ژنتیک فعالیت خود را در زمینه ارائه خدمات تحلیل داده‌های حجیم زیستی و توالی یابی نسل جدید آغاز نموده است. این مرکز در حال حاضر در حال پیاده‌سازی سیستم جامع ذخیره و تحلیل داده‌های زیستی برای کاربران تخصصی از جمله دانشجویان، مراکز تحقیقاتی و آزمایشگاه ها و پزشکان حوزه ژنتیک است که نمونه پیش صنعتی این محصول آماده بهره‌برداری می‌باشد.
`

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
          <Service {...item} indexInRow={(index % 3) + 1}/>
        </div>
      )
    })
  }
  
  render() {
    const renderedFeatures = this.renderFeatures();
    const renderedServices = this.renderServices();

    return (
      <div id="home-page">
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
        <section className="service-section container-fluid">
          <SectionHeader>خدمات ما</SectionHeader>
          <div className="row around-xs">
            {renderedServices}
          </div>
        </section>
        <section className="about-section container-fluid">
          <SectionHeader secondary>هومن ژن پارس</SectionHeader>
          <div className="container">
            <p className="about-section__text">
              {aboutSummeryText}
            </p>
            <div className="about-section__button-wrapper">
              <Link to="/about-us" className="about-section__button btn btn--secondary">بیشتر بدانید</Link>
            </div>
          </div>
        </section>
        <section className="companies-section container-fluid">
          <SectionHeader>همکاران ما</SectionHeader>
          <div>
            <CompanyList companies={companies} />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
