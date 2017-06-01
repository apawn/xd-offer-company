import Vue from 'vue'
import { router } from './router.js'
import App from './App'
import iView from 'iview'

// 组件路由导入


import studentList from './components/student-list/student-list'
import student from './components/student/student.vue'
import invited from './components/invited/invited'
import getDeliveried from './components/get-delivery/get-delivery'


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
    component: studentList
  },
  '/students': {
    name: 'student-list',
    component: studentList
  },
  '/students/:name': {
    name: 'student',
    component: student
  },
  '/invitations': {
    name: 'student',
    component: invited

  },
  '/received': {
    name: 'student',
    component: getDeliveried
  }
})

router.start(app, '#app');
// router.go('/home');

