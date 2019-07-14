import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import renderHTML from 'react-render-html';
import { Formik } from 'formik';
import { postContactForm } from '../utils/api';
import { toast } from 'react-toastify';

const contact = {
  address: `تهران ، خیابان حبیب‌الهی، خیابان شهید قاسمی، خیابان <br /> گلستان، بن‌بست گل، پلاک چهارم، طبقه‌ی دوم، واحد پنجم`,
  telephone: '66033184-021',
  postalcode: '1459973761',
  email: 'info@humangene.ir',
}

export default class Contact extends Component {

  handleSubmitForm(values, { setSubmitting, resetForm }) {
    postContactForm(values)
    .then(() => {
      setSubmitting(false);
      resetForm();
      toast.success('پیام شما با موفقیت ارسال شد.')
    })
  }

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
              <Formik
                initialValues={{ name: '', email: '', text: '' }}
                onSubmit={this.handleSubmitForm}
              >
               {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="input-group input-group-icon">
                    <input
                      type="text"
                      className="input-text"
                      name="name"
                      placeholder="نام شما"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <div className="input-icon"><FontAwesomeIcon icon="user" /></div>
                  </div>
                  <div className="input-group input-group-icon">
                    <input
                      type="email"
                      className="input-text"
                      name="email"
                      placeholder="ایمیل شما"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <div className="input-icon"><FontAwesomeIcon icon="envelope" /></div>
                  </div>
                  <div className="input-group input-group-icon">
                    <textarea
                      className="input-textarea"
                      name="text"
                      placeholder="متن پیام"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.text}
                    ></textarea>
                    <div className="input-icon"><FontAwesomeIcon icon="pen" /></div>
                  </div>
                  <div className="form-btn-wrapper">
                    <button className="btn btn--md" type="submit" disabled={isSubmitting}>ارسال</button>
                  </div>
                </form>
              )}
              </Formik>
            </div>
            <div className="col-md-6">
              <div className="contact-detail">
                <p className="contact-detail__item">
                <strong><FontAwesomeIcon icon="map-marked" />&nbsp;آدرس:&nbsp;</strong>
                  {renderHTML(contact.address)}
                </p>
                <p className="contact-detail__item">
                  <strong><FontAwesomeIcon icon="phone" />&nbsp;تلفن:&nbsp;</strong>
                  {contact.telephone}
                </p>
                <p className="contact-detail__item">
                  <strong><FontAwesomeIcon icon="envelope-square" />&nbsp;کد پستی:&nbsp;</strong>
                  {contact.postalcode}
                </p>
                <p className="contact-detail__item">
                  <strong><FontAwesomeIcon icon="at" />&nbsp;ایمیل:&nbsp;</strong>
                  {contact.email}
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
