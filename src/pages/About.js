import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Member from '../components/Member';
import SectionHeader from '../components/SectionHeader';
import LoaddingPageInternal from '../components/LoaddingPageInternal';
import { getMemberData } from '../utils/api';
import { I18nContext } from '../i18n';


export default class About extends Component {

  static contextType = I18nContext;

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
    const i18n = this.context;

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
        <Header onClickLogin={() => {this.props.openLoginModal()}} onClickRegister={() => {this.props.openRegisterModal()}} />
        <Hero>{i18n.aboutUs}</Hero>
        <main className="container">
          <p className="text">
            {i18n.aboutHumangen}
          </p>
          <SectionHeader>{i18n.members}</SectionHeader>
          <div className="row">
            {this.renderMembers()}
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
