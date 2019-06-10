import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Member from '../components/Member';
import SectionHeader from '../components/SectionHeader';

const members = [
  {
    image: 'http://humangene.ir/wp-content/uploads/bfi_thumb/damoun-nst2ylo6x1xz25z67xy8bdgga5iznr90d9sz0av6wo.png',
    name: 'دامون نشتاعلی',
    job: 'مدیر عامل',
    description: 'دکتری مهندسی برق- مخابرات سیستم دانشگاه صنعتی شریف',
    email: 'demo@gmail.com',
  },
  {
    image: 'http://humangene.ir/wp-content/uploads/bfi_thumb/damoun-nst2ylo6x1xz25z67xy8bdgga5iznr90d9sz0av6wo.png',
    name: 'دامون نشتاعلی',
    job: 'مدیر عامل',
    description: 'دکتری مهندسی برق- مخابرات سیستم دانشگاه صنعتی شریف',
    email: 'demo@gmail.com',
  },
  {
    image: 'http://humangene.ir/wp-content/uploads/bfi_thumb/damoun-nst2ylo6x1xz25z67xy8bdgga5iznr90d9sz0av6wo.png',
    name: 'دامون نشتاعلی',
    job: 'مدیر عامل',
    description: 'دکتری مهندسی برق- مخابرات سیستم دانشگاه صنعتی شریف',
    email: 'demo@gmail.com',
  }
]


export default class About extends Component {
  
  renderMembers () {
    return members.map((item) => {
      return (
        <div className="col-xs-12 col-md-4">
          <Member {...item} />
        </div>
      )
    })
  }
  
  render() {
    return (
      <div id="about-page">
        <Helmet>
            <title>About Us</title>
        </Helmet>
        <Header />
        <Hero>درباره ما</Hero>
        <main className="container">
          <p className="text">
            asdasdasd
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
