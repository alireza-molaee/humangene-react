import React from 'react';
import logo from '../assets/logo-2.png';

export default function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="row reverse">
        <div className="col-md-4 footer__image-col">
            <img className="footer__image" src={logo} alt="humangene" />
        </div>
        <div className="col-md-4 footer__contact-col">
            <p className="footer__contact-item">
            تهران ، خیابان حبیب‌الهی، خیابان شهید قاسمی، خیابان <br /> گلستان، بن‌بست گل، پلاک چهارم، طبقه‌ی دوم، واحد پنجم
            </p>
            <p className="footer__contact-item">
            تلفن : 66033184-021
            </p>
            <p className="footer__contact-item">
            کد پستی : 1459973761
            </p>
            <p className="footer__contact-item">
            ایمیل : info@humangene.ir
            </p>
        </div>
        <div className="col-md-4">

        </div>
      </div>
    </footer>
  )
}
