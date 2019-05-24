import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default class Contact extends Component {
  render() {
    return (
      <div id="contact-page">
        <Helmet>
            <title>Contact</title>
        </Helmet>
        <Header />
        <Hero>تماس با ما</Hero>
        <main>

        </main>
        <Footer />
      </div>
    )
  }
}
