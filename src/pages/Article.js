import React, { Component } from 'react'
import {Helmet} from "react-helmet";

export default class Article extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Article</title>
        </Helmet>
      </div>
    )
  }
}
