import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import StackGrid from "react-stack-grid";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostListItem from '../components/PostListItem';
import Hero from '../components/Hero';
import LoaddingPageInternal from '../components/LoaddingPageInternal'
import { getPostList } from '../utils/api';
import { I18nContext } from '../i18n';

export default class PostList extends Component {

  static contextType = I18nContext;

  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      isLoadding: true,
    }

    this.renderEachPost = this.renderEachPost.bind(this);
  }

  componentDidMount() {
    getPostList()
    .then(data => {
      this.setState({newsList: data});
    })
    .catch(err => {
      console.error(err);
    })
    .then(() => {
      this.setState({isLoadding: false});
    })
  }
  
  
  renderEachPost() {
    const items = this.state.newsList.map((post, index) => {
      return (
        <PostListItem key={`news-${index}`} {...post} />
      )
    });
    return items;
  }
  
  render() {

    const i18n = this.context;

    if (this.state.isLoadding) {
      return (
        <div id="post-list-page">
          <Helmet>
              <title>PostList</title>
          </Helmet>
          <LoaddingPageInternal />
        </div>
      )
    }

    return (
      <div id="post-list-page">
        <Helmet>
            <title>PostList</title>
        </Helmet>
        <Header onClickLogin={() => {this.props.openLoginModal()}} onClickRegister={() => {this.props.openRegisterModal()}} />
        <Hero>{i18n.news}</Hero>
        <main>
          <StackGrid
            gridRef={grid => this.grid = grid}
            columnWidth={300}
            monitorImagesLoaded
          >
            {this.renderEachPost()}
          </StackGrid>
        </main>
        <Footer />
      </div>
    )
  }
}
