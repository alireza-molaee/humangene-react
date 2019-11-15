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
import { I18nContext } from '../i18n';

export default class Home extends Component {

  static contextType = I18nContext;

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
    const i18n = this.context;

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
          <SectionHeader>{i18n.ourService}</SectionHeader>
          <div className="row around-xs">
            {renderedServices}
          </div>
        </section>
        <section className="about-section container-fluid">
          <SectionHeader secondary>{i18n.humangen}</SectionHeader>
          <div className="container">
            <p className="about-section__text">
              {i18n.aboutHumangen}
            </p>
            <div className="about-section__button-wrapper">
              <Link to="/about-us" className="about-section__button btn btn--secondary">{i18n.learnMore}</Link>
            </div>
          </div>
        </section>
        <section className="companies-section container-fluid">
          <SectionHeader>{i18n.ourPartner}</SectionHeader>
          <div>
            <CompanyList companies={this.state.companies} />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
