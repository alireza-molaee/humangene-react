import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import moment from 'moment-jalaali';
import renderHTML from 'react-render-html';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LoaddingPageInternal from '../components/LoaddingPageInternal';
import { getPostSingle, getPostComents, postPostComment } from '../utils/api';
import md5 from 'md5';
import * as auth from '../utils/auth';
import { I18nContext } from '../i18n'

class PostSingle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: null,
      isLoadding: true,
      comments: [],
      commentText: '',
    }

    this.handleSubmitCommentForm = this.handleSubmitCommentForm.bind(this);
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    getPostSingle(postId)
    .then((data) => {
      this.setState({post: data});
    })
    .catch(err => {
      console.error(err);
    })
    .then(() => {
      return getPostComents(postId)
    })
    .then(data => {
      this.setState({comments: data});
    })
    .catch(err => {
      console.error(err);
    })
    .then(() => {
      this.setState({isLoadding: false});
    })
  }

  handleSubmitCommentForm(e) {
    e.preventDefault();
    const postId = this.props.match.params.id;
    const commentText = this.state.commentText;
    postPostComment(postId, commentText)
    .then(data => {
      this.setState({
        comments: [
          ...this.state.comments,
          data
        ]
      })
    })
  }

  renderComment(comment) {
    const gravAvatarHash = comment.userName && md5(comment.userName.trim().toLowerCase())
    return (
      <div key={`comment-${comment.id}`} className="comment">
        <img className="comment-image" src={`https://www.gravatar.com/avatar/${gravAvatarHash}?d=mp`} alt="comment-tumbnail-image" />
        <h5 className="comment-user">{comment.userName}</h5>
        <h6 className="commment-date">{comment.sendDate && comment.sendDate.format('jYYYY/jMM/jDD HH:mm')}</h6>
        <p className="comment-text">{comment.text}</p>
      </div>
    )
  }

  render() {
    const post = this.state.post;
    const isUserLogin = auth.isLogin();

    if (this.state.isLoadding || this.state.post === null) {
      return (
        <div id="single-post">
          <Helmet>
              <title>PostSingle</title>
          </Helmet>
          <LoaddingPageInternal />
        </div>
      )
    }

    return (
      <div id="single-post">
        <Helmet>
            <title>PostSingle</title>
        </Helmet>
        <Header onClickLogin={() => {this.props.openLoginModal()}} onClickRegister={() => {this.props.openRegisterModal()}} />
        <Hero>{post.title}</Hero>
        <main className="container">
          <div className="row">
            <div className="col-xs-12">
              <img className="post-image" src={post.image} alt={post.title} />
              <h1 className="post-title">{post.title}</h1>
              <div className="meta-data">
                <span className="meta-data__date">{moment(post.createdAt).format('jDD jMMMM jYY HH:mm')}</span>
              </div>
              <div className="content">{renderHTML(post.description)}</div>
            </div>
          </div>
          <section className="comments-section">
            {
              this.state.comments.map(c => (this.renderComment(c)))
            }
          </section>
          {
            isUserLogin && (
              <section className="comment-form-section">
                <form onSubmit={this.handleSubmitCommentForm}>
                  <label htmlFor="comment-input" className="comment-form-title">نظر شما:</label>
                  <textarea
                    className="comment-fotm-text"
                    name="comment"
                    id="comment-input"
                    value={this.state.commentText}
                    onChange={e => {
                      this.setState({commentText: e.target.value});
                    }}
                  ></textarea>
                  <button className="btn">ثبت نظر</button>
                </form>
              </section>
            )
          }
        </main>
        <Footer />
      </div>
    )
  }
}

PostSingle.contextType = I18nContext;

export default PostSingle
