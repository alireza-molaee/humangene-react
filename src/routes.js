import React from 'react';

const About = React.lazy(() => import('./pages/About'));
const Article = React.lazy(() => import('./pages/Article'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const PostList = React.lazy(() => import('./pages/PostList'));
const PostSingle = React.lazy(() => import('./pages/PostSingle'));
const Search = React.lazy(() => import('./pages/Search'));

const routes = [
    {
        path: '/about-us',
        component: About
    },
    {
        path: '/article/:id',
        component: Article
    },
    {
        path: '/contact-us',
        component: Contact
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/news',
        component: PostList
    },
    {
        path: '/news/:id',
        component: PostSingle
    },
    {
        path: '/search',
        component: Search
    }
]

export default routes;