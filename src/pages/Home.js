import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Header />
      </div>
    )
  }
}
