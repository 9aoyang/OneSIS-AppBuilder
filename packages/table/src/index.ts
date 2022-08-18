import { App } from 'vue';

import Table from './Table.vue';

export { default as MagicTable } from './Table.vue';

const components = [Table];

export default {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  },
};
