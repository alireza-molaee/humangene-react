import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Member from '../components/Member';
import SectionHeader from '../components/SectionHeader';
import LoaddingPageInternal from '../components/LoaddingPageInternal';
import { getMemberData } from '../utils/api';


const aboutText = `
شرکت هومن ژن پارس، از سال ۱۳۹۵ تحت عنوان مرکز خدمات امیکس شریف (مستقر در دانشگاه صنعتی شریف) توسط جمعی از متخصصین بایوانفورماتیک، بیوشیمی و ژنتیک فعالیت خود را در زمینه ارائه خدمات تحلیل داده‌های حجیم زیستی و توالی یابی نسل جدید آغاز نموده است. این مرکز در حال حاضر در حال پیاده‌سازی سیستم جامع ذخیره و تحلیل داده‌های زیستی برای کاربران تخصصی از جمله دانشجویان، مراکز تحقیقاتی و آزمایشگاه ها و پزشکان حوزه ژنتیک است که نمونه پیش صنعتی این محصول آماده بهره‌برداری می‌باشد.

`

export default class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      members: [],
      isLoadding: true,
    }
  }

  componentDidMount() {
    getMemberData()
    .then(data => {
      this.setState({members: data})
    })
    .catch(err => {
      console.error(err);
    })
    .then(() => {
      this.setState({isLoadding: false});
    })
  }
  
  renderMembers () {
    return this.state.members.map((item, index) => {
      return (
        <div key={`member-${index}`} className="col-xs-12 col-md-4">
          <Member {...item} />
        </div>
      )
    })
  }
  
  render() {

    if (this.state.isLoadding) {
      return (
        <div id="about-page">
          <Helmet>
              <title>About Us</title>
          </Helmet>
          <LoaddingPageInternal />
        </div>
      )
    }

    return (
      <div id="about-page">
        <Helmet>
            <title>About Us</title>
        </Helmet>
        <Header onClickLogin={() => {this.props.openLoginModal()}} />
        <Hero>درباره ما</Hero>
        <main className="container">
          <p className="text">
            {aboutText}
          </p>
          <SectionHeader>اعضای شرکت</SectionHeader>
          <div className="row">
            {this.renderMembers()}
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
