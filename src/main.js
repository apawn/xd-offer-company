import Vue from 'vue'
import { router } from './router.js'
import App from './App'
import iView from 'iview'

// 组件路由导入
import companyList from './components/company-list/company-list'
import company from './components/company/company'

import studentList from './components/student-list/student-list'
import student from './components/student/student.vue'
import news from './components/news/news'
import newDetail from './components/news-detail/news-detail'
import addNews from './components/add-news/add-news'
import updateNews from './components/update-news/update-news'

// home 子路由


// 组件样式
import 'font-awesome/less/font-awesome.less'
import 'iview/dist/styles/iview.css';
import './common/less/index.less'
import './common/less/overright-iview.less'


Vue.use(iView);



/* eslint-disable no-new */

let app = Vue.extend(App);


router.map({
  '/': {
    component: companyList
  },
  '/company-list': {
    name: 'company-list',
    component: companyList,
  },
  '/company/:companyname': {
    name: 'company',
    component: company
  },
  '/students': {
    name: 'student-list',
    component: studentList
  },
  '/students/:name': {
    name: 'student',
    component: student
  },
  '/news': {
    name: 'news',
    component: news
  },
  '/news/:id': {
    name: 'news-detail',
    component: newDetail
  },
  '/news/add-news': {
    name: 'addNews',
    component: addNews
  },
  '/news/update-news': {
    name: 'update-news',
    component: updateNews
  },
})

router.start(app, '#app');
// router.go('/home');

