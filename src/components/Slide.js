import React from 'react'
import { Link } from "react-router-dom";
import { I18nContext } from '../i18n';

export default function Slide({title, link, description, image, className}) {
  return (
    <I18nContext.Consumer>
      {i18n => (
        <div className={className} style={{ background: `url('${image}') no-repeat center` }}>
          <div className="slide__overlay"></div>
          <div className="slide__content">
            <h1 className="slide__content__title">{title}</h1>
            <p className="slide__content__description">{description}</p>
            {
                link && <Link className="slide__content__link" to={link}>{i18n.learnMore}</Link>
            }
          </div>
        </div>
      )}
    </I18nContext.Consumer>
  )
}
