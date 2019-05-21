import React, { createRef } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    if (scrollPosition > 100){
      this.headerRef.current.classList.add('sticky');
    } else {
      this.headerRef.current.classList.remove('sticky');
    }
  }

  render() {
    const { isSticky } = this.props;
    return (
      <header ref={this.headerRef} className={isSticky ? "header" : "header sticky"}>
        <div class="container header__content">
          <Link to="/">
            <img className="header__logo" src={logo} alt={'logo'} />
          </Link>
          <nav className="header__nav-bar">
            <NavLink className="header__nav-bar__item" to="/" activeClassName="active">خانه</NavLink>
            <NavLink className="header__nav-bar__item" to="/news" activeClassName="active">اخبار</NavLink>
            <NavLink className="header__nav-bar__item" to="/about-us" activeClassName="active">درباره ما</NavLink>
            <NavLink className="header__nav-bar__item" to="/contact-us" activeClassName="active">تماس با ما</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}
