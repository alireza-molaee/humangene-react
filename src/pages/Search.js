import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { ScaleLoader } from 'react-spinners';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { queryForSearch } from '../utils/api';
import { Bar } from 'react-chartjs-2';
import { I18nContext } from "../i18n";


export default class Search extends Component {

  static contextType = I18nContext;

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      headers: [],
      results: [],
      message: [],
      isLoadding: false,
      selectedBar: '',
      error: '',
      barData: {
        labels: [],
        datasets: [{
            label: 'Diagnosis',
            data: [],
            backgroundColor: 'rgb(33, 75, 165)',
            hoverBackgroundColor: 'rgb(1, 201, 88)',
        }]
      }
    }

    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleClickBarItem = this.handleClickBarItem.bind(this);
  }

  componentDidMount() {
    
  }

  renderHeader() {
    return (
      <tr>
        {this.state.headers.map((h, i) => (
          <th key={`header-resilt-${i}`}>{h}</th>
        ))}
      </tr>
    )
  }
  
  renderResults () {
    const indexOfDiagnosis = this.state.headers.indexOf('Diagnosis');
    return this.state.results.map((item, index) => {
      return (
        <tr key={`search-result-${index}`} style={item[indexOfDiagnosis] === this.state.selectedBar ? {border: '2px solid #00C958'} : {border: 'none'}}>
        {
          item.length > 0 && item.map((col, index2) => (
          <td key={`search-result-${index}-col-${index2}`}>
            {col}
          </td>
          ))
        }
        </tr>
      )
    })
  }

  handleClickSearch() {
    this.setState({isLoadding: true});
    queryForSearch(this.state.searchTerm)
    .then(result => {
      this.setState({
        headers: result.headers,
        results: result.results,
        message: result.message,
      }, () => {
        this.resetBarData()
      });
    })
    .catch(err => {
      if (err.response){
        this.setState({
          error: err.response.data['query_text'] || err.response.data['result'],
        })
      }
    })
    .then(() => {
      this.setState({isLoadding: false});
    })
  }

  calcDiagnosisInResult() {
    if (!Array.isArray(this.state.headers) || !Array.isArray(this.state.results) ) {
      return []
    }
    const indexOfDiagnosis = this.state.headers.indexOf('Diagnosis');
    return this.state.results.map(i=>(i[indexOfDiagnosis])).filter((x, i, a) => a.indexOf(x) === i);
  }

  calcDiagnosisCounts() {
    if (!Array.isArray(this.state.headers) || !Array.isArray(this.state.results) ) {
      return []
    }
    const indexOfDiagnosis = this.state.headers.indexOf('Diagnosis');
    return this.calcDiagnosisInResult().map(d => {
      return this.state.results.filter(i => i[indexOfDiagnosis] === d).length;
    })
  }

  resetBarData() {
    this.setState({
      barData: {
        labels: this.calcDiagnosisInResult(),
        datasets: [{
          label: 'Diagnosis',
          data: this.calcDiagnosisCounts(),
          backgroundColor: 'rgb(33, 75, 165)',
          hoverBackgroundColor: 'rgb(1, 201, 88)',
        }]
      }
    })
  }

  handleClickBarItem(elem) {
    if (elem.length > 0) {
      this.setState({selectedBar: elem[0]['_model']['label']})
    }
  }
  
  render() {

    const i18n = this.context;

    return (
      <div id="search-page">
        <Helmet>
            <title>Search</title>
        </Helmet>
        <Header onClickLogin={() => {this.props.openLoginModal()}} onClickRegister={() => {this.props.openRegisterModal()}} />
        <Hero>{i18n.search}</Hero>
        <main className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 search-input-group">
                <input
                  type="text"
                  placeholder={`${i18n.search}...`}
                  name="searchTerm"
                  value={this.state.searchTerm}
                  onChange={e => {this.setState({searchTerm: e.target.value})}}
                />
                <button onClick={this.handleClickSearch}><FontAwesomeIcon icon="search" size="2x" /></button>
              {this.state.error && <p className="error-message">{this.state.error}</p>}
            </div>
          </div>

          {
            this.state.isLoadding && (
              <div className="page-loadin-wrapper">
                    <ScaleLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={true}
                    />
              </div>
            )
          }
          {
            this.state.results && this.state.results.length > 0 && (
              <div className="row center-xs">
                <div className="col-sm-8">
                  <Bar data={this.state.barData} onElementsClick={this.handleClickBarItem} />
                </div>
              </div>
            )
          }
          {
            this.state.results && this.state.results.length > 0 && (
              <div className="row">
                <div className="col-xs-12 col-md-12">
                  <table className="search-result-table">
                    <thead>
                      {this.renderHeader()}
                    </thead>
                    <tbody>
                      {this.renderResults()}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          }
        </main>
        <Footer />
      </div>
    )
  }
}
