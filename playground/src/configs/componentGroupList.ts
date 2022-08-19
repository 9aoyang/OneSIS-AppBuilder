import { Watermelon, Chicken, Sugar } from '@element-plus/icons-vue';

const { VITE_RUNTIME_TYPE } = import.meta.env;

const listMap = {
  vue3: [
    {
      title: 'Vue 组件',
      items: [
        {
          icon: Watermelon,
          text: 'Demo',
          type: 'demo',
        },
        {
          icon: Watermelon,
          text: '流程Viewer',
          type: 'bpmnviewer',
        },
      ],
    },
  ],

  vue2: [
    {
      title: 'Vue2 组件',
      items: [
        {
          icon: Chicken,
          text: 'Demo',
          type: 'demo',
        },
      ],
    },
  ],

  react: [
    {
      title: 'React',
      items: [
        {
          icon: Sugar,
          text: 'Demo',
          type: 'demo',
        },
      ],
    },
  ],
};

type listMapKey = keyof typeof listMap;

export default listMap[VITE_RUNTIME_TYPE as listMapKey];
