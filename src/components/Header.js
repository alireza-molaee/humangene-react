import React, { createRef, Fragment } from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from '../assets/logo.png';


export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.headerRef = createRef();
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    if (this.props.isSticky) {
      window.addEventListener('scroll', this.onScroll);
    }
  }

  componentWillUnmount() {
    if (this.props.isSticky) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  onScroll() {
    let scrollPosition = Math.round(window.scrollY);
    if (scrollPosition > 100) {
      this.headerRef.current.classList.add('sticky');
    } else {
      this.headerRef.current.classList.remove('sticky');
    }
  }

  render() {
    const { isSticky } = this.props;
    return (
      <Fragment>
        <header ref={this.headerRef} className={isSticky ? "header" : "header sticky"}>
          <div class="container header__content">
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
            <nav className="header__nav-bar">
              <NavLink className="header__nav-bar__item" to="/" activeClassName="active">خانه</NavLink>
              <NavLink className="header__nav-bar__item" to="/news" activeClassName="active">اخبار</NavLink>
              <NavLink className="header__nav-bar__item" to="/about-us" activeClassName="active">درباره ما</NavLink>
              <NavLink className="header__nav-bar__item" to="/contact-us" activeClassName="active">تماس با ما</NavLink>
            </nav>
          </div>
        </header>
        {
          isSticky && (
            <header className="header--first-view">
              <div class="container header__content--first-view">
                <Link to="/">
                  <img className="header__logo--first-view" src={logo} alt={'logo'} />
                </Link>
                <nav className="header__nav-bar--first-view">
                  <NavLink className="header__nav-bar__item--first-view" to="/" activeClassName="active">خانه</NavLink>
                  <NavLink className="header__nav-bar__item--first-view" to="/news" activeClassName="active">اخبار</NavLink>
                  <NavLink className="header__nav-bar__item--first-view" to="/about-us" activeClassName="active">درباره ما</NavLink>
                  <NavLink className="header__nav-bar__item--first-view" to="/contact-us" activeClassName="active">تماس با ما</NavLink>
                </nav>
              </div>
            </header>
          )
        }
      </Fragment>
    );
  }
}
