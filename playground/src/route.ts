import { createRouter, createWebHashHistory } from 'vue-router';

import Editor from './pages/Editor.vue';
import Form from './pages/Form.vue';
import Table from './pages/Table.vue';
import Bpmn from './pages/bpmn/Bpmn.vue';

const routes = [
  { path: '/', component: Editor },
  { path: '/form', component: Form },
  { path: '/table', component: Table },
  { path: '/bpmn', component: Bpmn },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
