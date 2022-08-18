import React from 'react';
import ReactDOM from 'react-dom';

import Core from '@tmagic/core';
import type { MApp } from '@tmagic/schema';
import { AppContent } from '@tmagic/ui-react';
import { getUrlParam } from '@tmagic/utils';

import components from '../.tmagic/comp-entry';
import plugins from '../.tmagic/plugin-entry';

import App from './App';
declare global {
  interface Window {
    magicDSL: MApp[];
    magicPresetComponents: any;
    magicPresetConfigs: any;
    magicPresetValues: any;
  }
}

const getLocalConfig = (): MApp[] => {
  const configStr = localStorage.getItem('magicDSL');
  if (!configStr) return [];
  try {
    // eslint-disable-next-line no-eval
    return [eval(`(${configStr})`)];
  } catch (err) {
    return [];
  }
};

window.magicDSL = [];

const app = new Core({
  config: ((getUrlParam('localPreview') ? getLocalConfig() : window.magicDSL) || [])[0] || {},
  curPage: getUrlParam('page'),
});

Object.keys(components).forEach((type: string) => app.registerComponent(type, components[type]));
Object.values(plugins).forEach((plugin: any) => {
  plugin.install(app);
});

ReactDOM.render(
  <React.StrictMode>
    <AppContent.Provider value={app}>
      <App />
    </AppContent.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
