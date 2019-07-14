import axios from 'axios';
import * as auth from './auth';

const ajaxJson = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

ajaxJson.interceptors.request.use(function (config) {
  if (auth.isLogin()) {
    config.headers['Authorization'] = auth.getUser().token;
  }
  return config;
});

export function getCategories() {
  return ajaxJson.get('/cms/category')
    .then(res => {
      return res.data.map(item => ({
        id: item['id'],
        title: item['text_fa'],
      }));
    });
}

export function getPages() {
  return ajaxJson.get('/cms/page')
    .then(res => {
      return res.data.map(item => ({
        id: item['id'],
        title: item['title_fa'],
        category: item['category']
      }))
    });
}

export function getHeaderItems() {
  return axios.all([getCategories(), getPages()])
    .then(axios.spread((categories, pages) => {
      let headerItems = [];
      const categoryMixedPage = categories.map(cat => {
        const catPages = pages.filter(p => (p.category === cat.id));
        if (catPages.length !== 0) {
          return {
            title: cat.title,
            link: null,
            items: catPages.map(item => ({
              title: item.title,
              link: `/article/${item.id}`,
            }))
          }
        } else {
          return null;
        }
      }).filter(item => (item !== null))

      headerItems = headerItems.concat(categoryMixedPage);

      const pageWithNoCategory = pages.filter(item => (item.category === null)).map(item => ({
        title: item.title,
        link: `/article/${item.id}`,
        items: null,
      }));

      headerItems = headerItems.concat(pageWithNoCategory);

      return headerItems;
    }));
}

export function getArticleDetail(id) {
  return ajaxJson.get(`/cms/page/${id}`)
    .then(res => {
      return {
        id: res.data['id'],
        title: res.data['title_fa'],
        image: res.data['image'],
        content: res.data['text_fa'],
        createdAt: res.data['published_date'] || new Date(),
        categoryId: res.data['category'],
      };
    })
}

export function getPostList() {
  return ajaxJson.get(`/cms/news`)
  .then(res => {
    return res.data.map(item => {
      return {
        id: item['id'],
        title: item['title_fa'],
        image: item['image'],
        category: item['category'],
      }
    })
  })
}

export function getPostSingle(id) {
  return new Promise(res => {
    setTimeout(() => {
      const post = {
        id: id,
        title: 'Post title',
        image: 'http://humangene.ir/wp-content/uploads/2018/07/vencidislide-3-1024x539-768x404.jpg',
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. <br> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. <br> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
        createdAt: new Date(),
      }
      res(post);
    }, 2000)
  })
}

export function getServices() {
  return ajaxJson.get(`/cms/service`)
  .then(res => {
    return res.data.map(item => {
      return {
        title: item['title'],
        image: item['image'],
        description: item['description'],
        link: item['link'],
      }
    })
  })
}

export function getFeatures() {
  return ajaxJson.get(`/cms/feature`)
  .then(res => {
    return res.data.map(item => {
      return {
        title: item['title'],
        icon: item['icon'],
        description: item['description'],
      }
    })
  });
}

export function getCompanies() {
  return ajaxJson.get(`/cms/companies`)
  .then(res => {
    return res.data.map(item => ({
      title: item['title'],
      image: item['image'],
      link: item['link'],
    }))
  })
}

export function getSlids() {
  return ajaxJson.get('/cms/slider')
  .then(res => {
    if (!res.data[0]) {
      return []
    }
    return res.data[0].items.map(item => ({
      image: item['image'],
      title: item['text_fa'],
      description: '',
      link: item['url'],
    }));
  })
}

export function getHomeData() {
  return axios.all([getSlids(), getFeatures(), getServices(), getCompanies()])
    .then(axios.spread((slids, features, services, companies) => {
      return {
        slids,
        features,
        services,
        companies,
      }
    }))
}

export function getMemberData() {
  return ajaxJson.get('/cms/members')
  .then(res => {
    return res.data.map(item => ({
      image: item['image'],
      name: item['name'],
      job: item['job'],
      description: item['description'],
      email: item['email'],
    }))
  })
}

export function postContactForm(data) {
  return ajaxJson.post(`/cms/contactus`, data)
}

export function queryForSearch(term) {
  ajaxJson.get('/task/').then(res => console.log(res.data));
  return ajaxJson.post(`/query/`, {
    "query_text": term,
  })
}

export function login(data) {
  return ajaxJson.post(`/api-token-auth/`, {
    "username": data.username,
    "password": data.password,
  })
  .then(res => ({
    token: res.data['token'],
    name: 'علیرضا مولایی'
  }))
}