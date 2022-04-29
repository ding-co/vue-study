import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DataBinding from '../views/DataBinding.vue';
import DataBindingHtml from '../views/DataBindingHtml';
import DataBindingInputText from '../views/DataBindingInputText';
import DataBindingInputNumber from '../views/DataBindingInputNumber';
import DataBindingTextarea from '../views/DataBindingTextarea';
import DataBindingSelect from '../views/DataBindingSelect';
import DataBindingCheckbox from '../views/DataBindingCheckbox';
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2';
import DataBindingRadio from '../views/DataBindingRadio';
import DataBindingAttribute from '../views/DataBindingAttribute';
import DataBindingButton from '../views/DataBindingButton';
import DataBindingClass from '../views/DataBindingClass';
import DataBindingClass2 from '../views/DataBindingClass2';
import DataBindingStyle from '../views/DataBindingStyle';
import DataBindingList from '../views/DataBindingList';
import RenderingVIf from '../views/RenderingVIf';
import EventClick from '../views/EventClick';
import EventChange from '../views/EventChange';
import ComputedView from '../views/ComputedView';
import WatchView from '../views/WatchView';
import WatchView2 from '../views/WatchView2';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding,
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml,
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText,
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber,
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea,
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect,
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox,
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2,
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: DataBindingRadio,
  },
  {
    path: '/databindingattribute',
    name: 'DataBindingAttribute',
    component: DataBindingAttribute,
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton,
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: DataBindingClass,
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2,
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle,
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: DataBindingList,
  },
  {
    path: '/renderingvif',
    name: 'RenderingVIf',
    component: RenderingVIf,
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick,
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    component: EventChange,
  },
  {
    path: '/computedView',
    name: 'ComputedView',
    component: ComputedView,
  },
  {
    path: '/watchview',
    name: 'WatchView',
    component: WatchView,
  },
  {
    path: '/watchview2',
    name: 'WatchView2',
    component: WatchView2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
