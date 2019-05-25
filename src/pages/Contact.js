import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact-page">
        <Helmet>
            <title>Contact</title>
        </Helmet>
        <Header />
        <Hero>تماس با ما</Hero>
        <main className="container">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="input-group input-group-icon">
                  <input type="text" className="input-text" name="name" placeholder="نام شما" />
                  <div class="input-icon"><FontAwesomeIcon icon="user" /></div>
                </div>
                <div className="input-group input-group-icon">
                  <input type="email" className="input-text" name="email" placeholder="ایمیل شما" />
                  <div class="input-icon"><FontAwesomeIcon icon="envelope" /></div>
                </div>
                <div className="input-group input-group-icon">
                  <textarea className="input-textarea" placeholder="متن پیام"></textarea>
                  <div class="input-icon"><FontAwesomeIcon icon="pen" /></div>
                </div>
                <div className="form-btn-wrapper">
                  <button className="btn btn--md" type="submit">ارسال</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact-detail">
                <p className="contact-detail__item">
                <strong><FontAwesomeIcon icon="map-marked" />&nbsp;آدرس:&nbsp;</strong>
                تهران ، خیابان حبیب‌الهی، خیابان شهید قاسمی، خیابان <br /> گلستان، بن‌بست گل، پلاک چهارم، طبقه‌ی دوم، واحد پنجم
                </p>
                <p className="contact-detail__item">
                  <strong><FontAwesomeIcon icon="phone" />&nbsp;تلفن:&nbsp;</strong>
                  66033184-021
                </p>
                <p className="contact-detail__item">
                  <strong><FontAwesomeIcon icon="envelope-square" />&nbsp;کد پستی:&nbsp;</strong>
                  1459973761
                </p>
                <p className="contact-detail__item">
                  <strong><FontAwesomeIcon icon="at" />&nbsp;ایمیل:&nbsp;</strong>
                  info@humangene.ir
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
