import { createApp } from 'vue';

import Core from '@tmagic/core';
import { getUrlParam } from '@tmagic/utils';

import components from '../.tmagic/comp-entry';
import plugins from '../.tmagic/plugin-entry';

import request from './utils/request';
import AppComponent from './App.vue';
import { getLocalConfig } from './utils';

const magicApp = createApp(AppComponent);

magicApp.use(request);

Object.entries(components).forEach(([type, component]: [string, any]) => {
  magicApp.component(`magic-ui-${type}`, component);
});

Object.values(plugins).forEach((plugin: any) => {
  magicApp.use(plugin);
});

const app = new Core({
  config: ((getUrlParam('localPreview') ? getLocalConfig() : window.magicDSL) || [])[0] || {},
  curPage: getUrlParam('page'),
});

magicApp.config.globalProperties.app = app;
magicApp.provide('app', app);

magicApp.mount('#app');
