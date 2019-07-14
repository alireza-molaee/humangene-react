import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LoaddingPageInternal from '../components/LoaddingPageInternal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { queryForSearch } from '../utils/api';
import { Bar } from 'react-chartjs-2';


const barData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
      label: 'asd',
      data: [12, 100, 3, 5, 2, 3],
      backgroundColor: 'purple'
  }]
};

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      results: [],
      isLoadding: false,
    }

    this.handleClickSearch = this.handleClickSearch.bind(this);
  }

  componentDidMount() {
    
  }
  
  renderResults () {
    return this.state.results.map((item, index) => {
      return (
        <div key={`search-result-${index}`} className="col-xs-12 col-md-12">
          <table>
            <tr>
            {
              item.length > 0 && item.map(col => (
              <th>
                {col}
              </th>
              ))
            }
            </tr>
          </table>
        </div>
      )
    })
  }

  handleClickSearch() {
    queryForSearch(this.state.searchTerm)
  }

  handleClickBarItem(elem) {
    console.log(elem)
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
        <Header onClickLogin={() => {this.props.openLoginModal()}} />
        <Hero>جستجو</Hero>
        <main className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 search-input-group">
                <input
                  type="text"
                  placeholder="جستجو..."
                  name="searchTerm"
                  value={this.state.searchTerm}
                  onChange={e => {this.setState({searchTerm: e.target.value})}}
                />
                <button onClick={this.handleClickSearch}><FontAwesomeIcon icon="search" size="2x" /></button>
            </div>
          </div>

          <div className="row center-xs">
            <div className="col-sm-8">
              <Bar data={barData} onElementsClick={this.handleClickBarItem} />
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
