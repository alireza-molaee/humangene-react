import React from 'react';
import logo from '../assets/logo-2.png';
import { I18nContext } from '../i18n';

export default function Footer() {
  return (
    <I18nContext.Consumer>
      {i18n => (
        <footer className="footer container-fluid">
          <div className="row reverse">
            <div className="col-xs-12 col-md-4 footer__image-col">
                <img className="footer__image" src={logo} alt="humangene" />
            </div>
            <div className="col-xs-12 col-md-4 footer__contact-col">
                <p className="footer__contact-item">
                {i18n.vAddress}
                </p>
                <p className="footer__contact-item">
                {i18n.phone} : 66033184-021
                </p>
                <p className="footer__contact-item">
                {i18n.postalCode} : 1459973761
                </p>
                <p className="footer__contact-item">
                {i18n.email} : info@humangene.ir
                </p>
            </div>
            <div className="col-xs-12 col-md-4">

            </div>
          </div>
        </footer>
      )}
    </I18nContext.Consumer>
  )
}
