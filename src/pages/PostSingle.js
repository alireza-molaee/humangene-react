import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import moment from 'moment-jalaali';
import renderHTML from 'react-render-html';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LoaddingPageInternal from '../components/LoaddingPageInternal';
import { getPostSingle } from '../utils/api';

const post = {
  title: 'Post title',
  image: 'http://humangene.ir/wp-content/uploads/2018/07/vencidislide-3-1024x539-768x404.jpg',
  description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. <br> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. <br> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
  createdAt: new Date(),
}

export default class PostSingle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: null,
      isLoadding: true,
    }
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
      this.setState({isLoadding: false});
    })
  }

  render() {

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
        <Header onClickLogin={() => {this.props.openLoginModal()}} />
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
        </main>
        <Footer />
      </div>
    )
  }
}
