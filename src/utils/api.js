import axios from 'axios';
import * as auth from './auth';
import * as moment from 'moment-jalaali';

const langKey = localStorage.getItem("lang") || 'fa';

const ajaxJson = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL + '/' + langKey,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

ajaxJson.interceptors.request.use(function (config) {
  if (auth.isLogin()) {
    config.headers['Authorization'] = 'token ' + auth.getUser().token;
  }
  return config;
});

export function getCategories() {
  return ajaxJson.get('/cms/category')
    .then(res => {
      return res.data.map(item => ({
        id: item['id'],
        title: item['text'],
      }));
    });
}

export function getPages() {
  return ajaxJson.get('/cms/page')
    .then(res => {
      return res.data.map(item => ({
        id: item['id'],
        title: item['title'],
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
        title: res.data['title'],
        image: res.data['image'],
        content: res.data['text'],
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
        title: item['title'],
        image: item['image'],
        category: item['category'],
      }
    })
  })
}

export function getPostSingle(id) {
  return ajaxJson.get(`/cms/news/${id}`)
  .then(res => {
    return {
      id: res.data['id'],
      title: res.data['title'],
      image: res.data['image'],
      description: res.data['text'],
      createAt: new Date(res.data['published_date']),
    }
  })
}

export function getPostComents(id) {
  return ajaxJson.get(`cms/news/${id}/comment`)
  .then(res => {
    return res.data.map(item => {
      return {
        id: item['id'],
        text: item['text'],
        userName: item['user'],
        sendDate: item['timestamp'] && moment(item['timestamp']),
      }
    })
  })
}

export function postPostComment(id, comment) {
  return ajaxJson.post(`cms/news/${id}/comment`, {
    'text': comment,
  })
  .then(res => {
    return {
      id: res.data['id'],
      text: res.data['text'],
      userName: res.data['user'],
      sendDate: res.data['timestamp'] && moment(res.data['timestamp']),
    }
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
      title: item['text'],
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
  // ajaxJson.get('/task/').then(res => console.log(res.data));
  return ajaxJson.post(`/query/`, {
    "query_text": term,
  })
  .then(res => {
    const headers = Object.keys(res.data['q_result'][0]);
    const results = res.data['q_result'].map(r => {
      return Object.values(r);
    })
    return {
      message: res.data['result'],
      headers,
      results
    }
  })
}

export function login(data) {
  return ajaxJson.post(`/member/login`, {
    "email": data.username,
    "password": data.password,
  })
  .then(res => ({
    token: res.data['token'],
    name: 'علیرضا مولایی'
  }))
}

export function register(data) {
  return ajaxJson.post(`/member/register`, {
    "email": data.email,
    "password": data.password,
    "first_name": data.firstName,
    "last_name": data.lastName
  })
  .then(res => ({

  }))
}