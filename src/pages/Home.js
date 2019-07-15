import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
import Slider from '../components/Slider';
import Feature from '../components/Feature';
import SectionHeader from '../components/SectionHeader';
import Service from '../components/Service';
import CompanyList from '../components/CompanyList'
import Footer from '../components/Footer';
import LoaddingPage from '../components/LoaddingPage'
import { Link } from 'react-router-dom';
import { getHomeData } from '../utils/api'


const aboutSummeryText = `
شرکت هومن ژن پارس، از سال ۱۳۹۵ تحت عنوان مرکز خدمات امیکس شریف (مستقر در دانشگاه صنعتی شریف) توسط جمعی از متخصصین بایوانفورماتیک، بیوشیمی و ژنتیک فعالیت خود را در زمینه ارائه خدمات تحلیل داده‌های حجیم زیستی و توالی یابی نسل جدید آغاز نموده است. این مرکز در حال حاضر در حال پیاده‌سازی سیستم جامع ذخیره و تحلیل داده‌های زیستی برای کاربران تخصصی از جمله دانشجویان، مراکز تحقیقاتی و آزمایشگاه ها و پزشکان حوزه ژنتیک است که نمونه پیش صنعتی این محصول آماده بهره‌برداری می‌باشد.
`

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slids: [],
      features: [],
      services: [],
      companies: [],
      isLoadding: true,
    }
  }

  componentDidMount() {
    getHomeData()
    .then(data => {
      this.setState({
        ...data
      });
    })
    .catch(err => {
      console.error(err);
    })
    .then(() => {
      this.setState({isLoadding: false});
    })
  }

  renderFeatures() {
    return this.state.features.map((item, index) => {
      return (
        <div key={`feature-${index}`} className="col-sm-4">
          <Feature {...item} indexInRow={(index % 3) + 1}/>
        </div>
      )
    })
  }

  renderServices() {
    return this.state.services.map((item, index) => {
      return (
        <div key={`service-${index}`} className="col-sm-4">
          <Service {...item} indexInRow={(index % 3) + 1}/>
        </div>
      )
    })
  }
  
  render() {

    if (this.state.isLoadding) {
      return (
        <div id="home-page">
          <Helmet>
              <title>Home</title>
          </Helmet>
          <LoaddingPage />
        </div>
      )
    }

    const renderedFeatures = this.renderFeatures();
    const renderedServices = this.renderServices();

    return (
      <div id="home-page">
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Header isSticky onClickLogin={() => {this.props.openLoginModal()}} onClickRegister={() => {this.props.openRegisterModal()}} />
        <Slider slids={this.state.slids} />
        <div className="divider divider--full-width divider--gradient"></div>
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
            <CompanyList companies={this.state.companies} />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
