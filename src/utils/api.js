import axios from 'axios';

const ajaxJson = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
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
  return ajaxJson.get(`/cms/page/${id}/`)
    .then(res => {
      return {
        id: res.data['id'],
        title: res.data['title_fa'],
        image: res.data['image'],
        content: res.data['text_fa'],
        createdAt: res.data['published_date'],
        categoryId: res.data['category'],
      };
    })
}

export function getPostList() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          id: '1',
          title: 'پست ۱',
          image: 'https://picsum.photos/200/300?random=1',
          category: 'موضوع'
        },
        {
          id: '2',
          title: 'پست ۱',
          image: 'https://picsum.photos/180/200?random=2',
          category: 'موضوع'
        },
        {
          id: '3',
          title: 'پست ۱',
          image: 'https://picsum.photos/230/310?random=3',
          category: 'موضوع'
        },
        {
          id: '4',
          title: 'پست ۱',
          image: 'https://picsum.photos/300/300?random=4',
          category: 'موضوع'
        },
        {
          id: '5',
          title: 'پست ۱',
          image: 'https://picsum.photos/400/700?random=5',
          category: 'موضوع'
        },
        {
          id: '6',
          title: 'پست ۱',
          image: 'https://picsum.photos/220/290?random=6',
          category: 'موضوع'
        },
        {
          id: '7',
          title: 'پست ۱',
          image: 'https://picsum.photos/200/300?random=7',
          category: 'موضوع'
        },
        {
          id: '8',
          title: 'پست ۱',
          image: 'https://picsum.photos/300/200?random=8',
          category: 'موضوع'
        },
        {
          id: '9',
          title: 'پست ۱',
          image: 'https://picsum.photos/250/310?random=9',
          category: 'موضوع'
        },
        {
          id: '10',
          title: 'پست ۱',
          image: 'https://picsum.photos/400/500?random=10',
          category: 'موضوع'
        },
        {
          id: '11',
          title: 'پست ۱',
          image: 'https://picsum.photos/400/200?random=11',
          category: 'موضوع'
        },
        {
          id: '12',
          title: 'پست ۱',
          image: 'https://picsum.photos/220/320?random=12',
          category: 'موضوع'
        },
        {
          id: '13',
          title: 'پست ۱',
          image: 'https://picsum.photos/300/520?random=13',
          category: 'موضوع'
        },
        {
          id: '14',
          title: 'پست ۱',
          image: 'https://picsum.photos/200/320?random=14',
          category: 'موضوع'
        },
        {
          id: '15',
          title: 'پست ۱',
          image: 'https://picsum.photos/200/400?random=15',
          category: 'موضوع'
        },
      ])
    }, 2000)
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
  return new Promise(res => {
    setTimeout(() => {
      const services = [
        {
          title: 'تحلیل داده‌های خام زیستی',
          image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
          link: 'google.com'
        },
        {
          title: 'تحلیل داده‌های خام زیستی',
          image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
          link: 'google.com'
        },
        {
          title: 'تحلیل داده‌های خام زیستی',
          image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
          link: 'google.com'
        },
        {
          title: 'تحلیل داده‌های خام زیستی',
          image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
          link: 'google.com'
        },
        {
          title: 'تحلیل داده‌های خام زیستی',
          image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
          link: 'google.com'
        },
        {
          title: 'تحلیل داده‌های خام زیستی',
          image: 'http://humangene.ir/wp-content/uploads/2018/06/acne-icon.png',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
          link: 'google.com'
        },
      ]
      res(services)
    }, 2000)
  })
}

export function getFeatures() {
  return new Promise(res => {
    const features = [
      {
        title: 'ارائه‌ی خدمات در کمترین زمان',
        icon: 'car',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. '
      },
      {
        title: 'ارائه‌ی خدمات در کمترین زمان',
        icon: 'car',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. '
      },
      {
        title: 'ارائه‌ی خدمات در کمترین زمان',
        icon: 'car',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. '
      },
    ]
    setTimeout(() => {
      res(features);
    }, 2000)
  })
}

export function getCompanies() {
  return new Promise(res => {
    const companies = [
      {
        title: 'دانشگاه علوم پزشکی شهید بهشتی',
        image: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png',
        link: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png'
      },
      {
        title: 'پژوهشکده جهاد دانشگاهی معتمد',
        image: 'http://humangene.ir/wp-content/uploads/2018/06/57431303.jpg',
        link: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png'
      },
      {
        title: 'آزمایشگاه نیلو',
        image: 'http://humangene.ir/wp-content/uploads/2018/06/logo1.png',
        link: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png'
      },
      {
        title: 'آزمایشگاه پارسه',
        image: 'http://humangene.ir/wp-content/uploads/2018/06/parseh-lab-logo.jpg',
        link: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png'
      },
      {
        title: 'مرکز فوق تخصصی متابولیک دانشگاه علوم پزشکی تهران',
        image: 'http://humangene.ir/wp-content/uploads/2018/06/download.jpg',
        link: 'http://humangene.ir/wp-content/uploads/2018/06/sbmu.svg_.png'
      },
    ]
    setTimeout(() => {
      res(companies);
    }, 2000)
  })
}

export function getSlids() {
  return new Promise(res => {
    const slids = [
      {
        image: "https://picsum.photos/id/5/1200/900",
        title: "عنوان اول",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
        link: 'google.com'
      },
      {
        image: "https://picsum.photos/id/6/1200/900",
        title: "عنوان اول",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
      },
      {
        image: "https://picsum.photos/id/7/1200/900",
        title: "عنوان اول",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
      },
      {
        image: "https://picsum.photos/id/8/1200/900",
        title: "عنوان اول",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
      },
    ]
    setTimeout(() => {
      res(slids);
    }, 2000)
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
  return new Promise(res => {
    const members = [
      {
        image: 'http://humangene.ir/wp-content/uploads/bfi_thumb/damoun-nst2ylo6x1xz25z67xy8bdgga5iznr90d9sz0av6wo.png',
        name: 'دامون نشتاعلی',
        job: 'مدیر عامل',
        description: 'دکتری مهندسی برق- مخابرات سیستم دانشگاه صنعتی شریف',
        email: 'demo@gmail.com',
      },
      {
        image: 'http://humangene.ir/wp-content/uploads/bfi_thumb/damoun-nst2ylo6x1xz25z67xy8bdgga5iznr90d9sz0av6wo.png',
        name: 'دامون نشتاعلی',
        job: 'مدیر عامل',
        description: 'دکتری مهندسی برق- مخابرات سیستم دانشگاه صنعتی شریف',
        email: 'demo@gmail.com',
      },
      {
        image: 'http://humangene.ir/wp-content/uploads/bfi_thumb/damoun-nst2ylo6x1xz25z67xy8bdgga5iznr90d9sz0av6wo.png',
        name: 'دامون نشتاعلی',
        job: 'مدیر عامل',
        description: 'دکتری مهندسی برق- مخابرات سیستم دانشگاه صنعتی شریف',
        email: 'demo@gmail.com',
      }
    ]
    setTimeout(() => {
      res(members);
    }, 2000)
  })
}

export function postContactForm(data) {
  console.log(data);
  return new Promise(res => {
    setTimeout(() => {
      res();
    }, 2000)
  })
}