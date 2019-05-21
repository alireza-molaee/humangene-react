import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
import Slider from '../components/Slider'
export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Header />
        <Slider />
      </div>
    )
  }
}
