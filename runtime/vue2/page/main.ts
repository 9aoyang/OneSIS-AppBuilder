import Vue from 'vue';

import Core from '@tmagic/core';
import { getUrlParam } from '@tmagic/utils';

import components from '../.tmagic/comp-entry';
import plugins from '../.tmagic/plugin-entry';

import request from './utils/request';
import AppComponent from './App.vue';
import { getLocalConfig } from './utils';

Vue.use(request);

const app = new Core({
  config: ((getUrlParam('localPreview') ? getLocalConfig() : window.magicDSL) || [])[0] || {},
  curPage: getUrlParam('page'),
});

Object.keys(components).forEach((type: string) => {
  const component = components[type];
  Vue.component(component.name, component);
  app.registerComponent(type, component);
});

Object.values(plugins).forEach((plugin: any) => {
  Vue.use(plugin);
});

Vue.prototype.app = app;

const magicApp = new Vue({
  provide: {
    app,
  },

  render: (h) => h(AppComponent),
});

magicApp.$mount('#app');
