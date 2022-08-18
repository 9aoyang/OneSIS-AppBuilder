import { createRouter, createWebHashHistory } from 'vue-router';

import Editor from './pages/Editor.vue';
import Form from './pages/Form.vue';
import Table from './pages/Table.vue';

const routes = [
  { path: '/', component: Editor },
  { path: '/form', component: Form },
  { path: '/table', component: Table },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
