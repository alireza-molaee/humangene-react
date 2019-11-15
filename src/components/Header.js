import React, { createRef, Fragment } from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { getHeaderItems } from '../utils/api';
import LoaddingPage from './LoaddingPage';
import HeaderAuth from './HeaderAuth';
import { I18nContext } from '../i18n';

import langFaIcon from '../assets/lang-fa-icon.svg';
import langEnIcon from '../assets/lang-en-icon.svg';


export default class Header extends React.Component {

  static contextType = I18nContext;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      headerItems: [],
      menuIsOpen: false,
    }
    this.headerRef = createRef();
    this.onScroll = this.onScroll.bind(this);
    this.renderPageLinks = this.renderPageLinks.bind(this);
    this.handleClickOnHamburgerBtn = this.handleClickOnHamburgerBtn.bind(this);
    this.lang = localStorage.getItem("lang");
  }

  componentDidMount() {
    if (this.props.isSticky) {
      window.addEventListener('scroll', this.onScroll);
    }
    getHeaderItems()
    .then(data => {
      this.setState({headerItems: data,});
    })
    .catch(err => {
      console.error('error', err);
    })
    .then(() => {
      this.setState({isLoading: false});
    })
  }

  componentWillUnmount() {
    if (this.props.isSticky) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  changeLang(lang) {
    localStorage.setItem("lang", lang);
    window.location.reload();
  }

  onScroll() {
    let scrollPosition = Math.round(window.scrollY);
    if (scrollPosition > 100) {
      this.headerRef.current.classList.add('sticky');
    } else {
      this.headerRef.current.classList.remove('sticky');
    }
  }

  renderPageLinks() {
    return this.state.headerItems.map((item, indexItem) => {
      if (item.link) {
        return <NavLink key={`header-item-${indexItem}`} className="header__nav-bar__item" to={item.link} exact activeClassName="active">{item.title}</NavLink>
      } else if (item.items) {
        return (<div key={`header-item-${indexItem}`} className="item-group">
          <span className="item-group__title">{item.title}</span>
          <ul className="item-group__sub-menu">
            {
              item.items.map((subItem, indexSub) => {
                return (
                  <li key={`header-item-${indexItem}-sub-${indexSub}`} className="item-group__sub-menu__item">
                    <NavLink className="item-group__sub-menu__item__link" to={subItem.link} exact activeClassName="active">{subItem.title}</NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>)
      } else {
        return '';
      }
    })
  }

  renderPageLinksFirstView() {
    return this.state.headerItems.map((item, indexItem) => {
      if (item.link) {
        return <NavLink key={`header-item-${indexItem}`} className="header__nav-bar__item--first-view" to={item.link} exact activeClassName="active">{item.title}</NavLink>
      } else if (item.items) {
        return (<div key={`header-item-${indexItem}`} className="item-group item-group--first-view">
          <span className="item-group__title">{item.title}</span>
          <ul className="item-group__sub-menu">
            {
              item.items.map((subItem, indexSub) => {
                return (
                  <li key={`header-item-${indexItem}-sub-${indexSub}`} className="item-group__sub-menu__item">
                    <NavLink className="item-group__sub-menu__item__link" to={subItem.link} exact activeClassName="active">{subItem.title}</NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>)
      } else {
        return '';
      }
    })
  }

  handleClickOnHamburgerBtn(e) {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  }

  render() {
    const { isSticky } = this.props;

    if (this.state.isLoading) {
      return <LoaddingPage />
    }

    return (
      <Fragment>
        <header ref={this.headerRef} className={isSticky ? "header" : "header sticky"}>
          <div className="container header__content">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src={logo} alt={'logo'} />
              <svg height="0" width="0">
                  <defs>
                      <clipPath id="hex-logo" transform="scale(0.75)">
                          <path d="M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444"></path>
                      </clipPath>
                  </defs>
              </svg>
            </Link>
            <div className="header__right_wrapper">
              <div className="header_toggle-menu-button-ccontainer">
                <button onClick={this.handleClickOnHamburgerBtn} className={this.state.menuIsOpen ? "header_toggle-menu-button active" : "header_toggle-menu-button"}></button>
              </div>
              <HeaderAuth onClickLogin={this.props.onClickLogin} onClickRegister={this.props.onClickRegister} />
              <nav className="header__nav-bar">
                <NavLink className="header__nav-bar__item" to="/" exact activeClassName="active">{this.context.home}</NavLink>
                <NavLink className="header__nav-bar__item" to="/search" activeClassName="active">{this.context.searchService}</NavLink>                
                {this.renderPageLinks()}
                <NavLink className="header__nav-bar__item" to="/news" activeClassName="active">{this.context.news}</NavLink>
                <NavLink className="header__nav-bar__item" to="/about-us" activeClassName="active">{this.context.aboutUs}</NavLink>
                <NavLink className="header__nav-bar__item" to="/contact-us" exact activeClassName="active">{this.context.contactUs}</NavLink>
                {this.lang !== "fa" && <button className="header__nav-bar__change-labguage-btn" onClick={() => this.changeLang("fa")}><img src={langFaIcon} /></button>}
                {this.lang !== "en" && <button className="header__nav-bar__change-labguage-btn" onClick={() => this.changeLang("en")}><img src={langEnIcon} /></button>}
              </nav>
            </div>
          </div>
          <div className={this.state.menuIsOpen ? "hamburger-menu-wrapper open" : "hamburger-menu-wrapper"}>
            <div className="hamburger-menu">
              <nav className="header__nav-bar--vertical">
                  <NavLink className="header__nav-bar__item" to="/" exact activeClassName="active">{this.context.home}</NavLink>
                  <NavLink className="header__nav-bar__item" to="/search" activeClassName="active">{this.context.searchService}</NavLink>                
                  {this.renderPageLinks()}
                  <NavLink className="header__nav-bar__item" to="/news" activeClassName="active">{this.context.news}</NavLink>
                  <NavLink className="header__nav-bar__item" to="/about-us" activeClassName="active">{this.context.aboutUs}</NavLink>
                  <NavLink className="header__nav-bar__item" to="/contact-us" exact activeClassName="active">{this.context.contactUs}</NavLink>
                  {this.lang !== "fa" && <button className="header__nav-bar__change-labguage-btn" onClick={() => this.changeLang("fa")}><img src={langFaIcon} /></button>}
                  {this.lang !== "en" && <button className="header__nav-bar__change-labguage-btn" onClick={() => this.changeLang("en")}><img src={langEnIcon} /></button>}
                </nav>
            </div>
          </div>
        </header>
        {
          isSticky && (
            <header className="header--first-view">
              <div className="container header__content--first-view">
                <Link to="/">
                  <img className="header__logo--first-view" src={logo} alt={'logo'} />
                </Link>
                <div className="header__right_wrapper">
                  <HeaderAuth onClickLogin={this.props.onClickLogin} />
                  <nav className="header__nav-bar--first-view">
                    <NavLink className="header__nav-bar__item--first-view" to="/" activeClassName="active">{this.context.home}</NavLink>
                    <NavLink className="header__nav-bar__item--first-view" to="/search" activeClassName="active">{this.context.searchService}</NavLink>
                    {this.renderPageLinksFirstView()}
                    <NavLink className="header__nav-bar__item--first-view" to="/news" activeClassName="active">{this.context.news}</NavLink>
                    <NavLink className="header__nav-bar__item--first-view" to="/about-us" activeClassName="active">{this.context.aboutUs}</NavLink>
                    <NavLink className="header__nav-bar__item--first-view" to="/contact-us" activeClassName="active">{this.context.contactUs}</NavLink>
                    {this.lang !== "fa" && <button className="header__nav-bar__change-labguage-btn" onClick={() => this.changeLang("fa")}><img src={langFaIcon} /></button>}
                    {this.lang !== "en" && <button className="header__nav-bar__change-labguage-btn" onClick={() => this.changeLang("en")}><img src={langEnIcon} /></button>}
                  </nav>
                </div>
              </div>
            </header>
          )
        }
      </Fragment>
    );
  }
}
