import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import moment from 'moment-jalaali';
import renderHTML from 'react-render-html';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { getArticleDetail } from '../utils/api';
import { ScaleLoader } from 'react-spinners';

// const post = {
//   title: 'Post title',
//   image: 'http://humangene.ir/wp-content/uploads/2018/07/vencidislide-3-1024x539-768x404.jpg',
//   content: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. <br> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. <br> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
//   createdAt: new Date(),
// }

export default class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      content: '',
      createdAt: new Date(),
      isLoading: true,
    }
  }

  componentDidMount() {
    getArticleDetail(this.props.match.params.id)
    .then(data => {
      this.setState({
        title: data.title,
        image: data.image,
        content: data.content,
        createdAt: new Date(data.createdAt),
      })
    })
    .catch(err => {
      console.error(err);
    })
    .then(() => {
      this.setState({isLoading: false});
    })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <div id="single-post">
        <Helmet>
            <title>Article</title>
        </Helmet>
        <Header />
        <main className="container">
          <div className="page-loadin-wrapper">
            <ScaleLoader
              sizeUnit={"px"}
              size={150}
              color={'#123abc'}
              loading={true}
            />
          </div>
        </main>
        <Footer />
      </div>
      )
    }

    return (
      <div id="single-post">
        <Helmet>
            <title>Article</title>
        </Helmet>
        <Header />
        <Hero>{this.state.title}</Hero>
        <main className="container">
          <div className="row">
            <div className="col-xs-12">
              <img className="post-image" src={this.state.image} alt={this.state.title} />
              <h1 className="post-title">{this.state.title}</h1>
              <div className="meta-data">
                <span className="meta-data__date">{moment(this.state.createdAt).format('jDD jMMMM jYY HH:mm')}</span>
              </div>
              <div className="content">{renderHTML(this.state.content)}</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
