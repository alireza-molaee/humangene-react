import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import StackGrid from "react-stack-grid";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostListItem from '../components/PostListItem';
import Hero from '../components/Hero';
import LoaddingPageInternal from '../components/LoaddingPageInternal'
import { getPostList } from '../utils/api';

// const posts = [
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/200/300?random=1',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/180/200?random=2',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/230/310?random=3',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/300/300?random=4',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/400/700?random=5',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/220/290?random=6',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/200/300?random=7',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/300/200?random=8',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/250/310?random=9',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/400/500?random=10',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/400/200?random=11',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/220/320?random=12',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/300/520?random=13',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/200/320?random=14',
//     category: 'موضوع'
//   },
//   {
//     title: 'پست ۱',
//     image: 'https://picsum.photos/200/400?random=15',
//     category: 'موضوع'
//   },
// ]

export default class PostList extends Component {

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
        <Header />
        <Hero>اخبار</Hero>
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
