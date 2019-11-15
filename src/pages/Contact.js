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
import { I18nContext } from '../i18n';

export default class Contact extends Component {

  static contextType = I18nContext;

  handleSubmitForm(values, { setSubmitting, resetForm }) {
    postContactForm(values)
    .then(() => {
      setSubmitting(false);
      resetForm();
      toast.success(this.context.yourMessageSendSuccess)
    })
  }

  render() {
    const i18n = this.context;
    const contact = {
      address: i18n.vAddress,
      telephone: '66033184-021',
      postalcode: '1459973761',
      email: 'info@humangene.ir',
    }
    return (
      <div id="contact-page">
        <Helmet>
            <title>Contact</title>
        </Helmet>
        <Header onClickLogin={() => {this.props.openLoginModal()}} onClickRegister={() => {this.props.openRegisterModal()}} />
        <Hero>{i18n.contactUs}</Hero>
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
                      placeholder={i18n.yourName}
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
                      placeholder={i18n.yourEmail}
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
                      placeholder={i18n.text}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.text}
                    ></textarea>
                    <div className="input-icon"><FontAwesomeIcon icon="pen" /></div>
                  </div>
                  <div className="form-btn-wrapper">
                    <button className="btn btn--md" type="submit" disabled={isSubmitting}>{i18n.send}</button>
                  </div>
                </form>
              )}
              </Formik>
            </div>
            <div className="col-md-6">
              <div className="contact-detail">
                <p className="contact-detail__item">
                <strong><FontAwesomeIcon icon="map-marked" />&nbsp;{i18n.address}:&nbsp;</strong>
                  {renderHTML(contact.address)}
                </p>
                <p className="contact-detail__item">
                  <strong><FontAwesomeIcon icon="phone" />&nbsp;{i18n.phone}:&nbsp;</strong>
                  {contact.telephone}
                </p>
                <p className="contact-detail__item">
                  <strong><FontAwesomeIcon icon="envelope-square" />&nbsp;{i18n.postalCode}:&nbsp;</strong>
                  {contact.postalcode}
                </p>
                <p className="contact-detail__item">
                  <strong><FontAwesomeIcon icon="at" />&nbsp;{i18n.email}:&nbsp;</strong>
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
