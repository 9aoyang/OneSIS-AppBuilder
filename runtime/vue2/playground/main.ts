import Vue from 'vue';

import App from './App.vue';

Promise.all([import('../.tmagic/comp-entry'), import('../.tmagic/plugin-entry')]).then(
  ([components, plugins]) => {
    Object.entries(components.default).forEach(([type, component]: [string, any]) => {
      Vue.component(`magic-ui-${type}`, component);
    });

    Object.values(plugins.default).forEach((plugin: any) => {
      Vue.use(plugin);
    });

    new Vue({
      el: '#app',
      // @ts-ignore
      render: (h) => h(App),
    });
  }
);
