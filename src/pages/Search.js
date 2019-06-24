import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LoaddingPageInternal from '../components/LoaddingPageInternal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from '../utils/api';


export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoadding: false,
    }
  }

  componentDidMount() {
    
  }
  
  renderResults () {
    return this.state.results.map((item, index) => {
      return (
        <div key={`search-result-${index}`} className="col-xs-12 col-md-12">
          
        </div>
      )
    })
  }
  
  render() {

    if (this.state.isLoadding) {
      return (
        <div id="about-page">
          <Helmet>
              <title>Search</title>
          </Helmet>
          <LoaddingPageInternal />
        </div>
      )
    }

    return (
      <div id="search-page">
        <Helmet>
            <title>Search</title>
        </Helmet>
        <Header />
        <Hero>جستجو</Hero>
        <main className="container">
          <div className="row">
            <div className="col-xs-12 search-input-group">
                <input type="text" placeholder="جستجو..." name="searchTerm"/>
                <button><FontAwesomeIcon icon="search" size="2x" /></button>
            </div>
          </div>
          <div className="row">
            {this.renderResults()}
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
