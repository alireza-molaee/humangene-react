import axios from 'axios';

const ajaxJson = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
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