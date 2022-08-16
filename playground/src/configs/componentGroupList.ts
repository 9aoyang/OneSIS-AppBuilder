import { Watermelon, Chicken, Sugar } from '@element-plus/icons-vue';

const { VITE_RUNTIME_TYPE } = import.meta.env;

const listMap = {
  vue3: [
    {
      title: 'Vue 组件',
      items: [
        {
          icon: Watermelon,
          text: '按钮',
          type: 'button',
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
          text: '按钮',
          type: 'button',
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
          text: '按钮',
          type: 'button',
        },
      ],
    },
  ],
};

type listMapKey = keyof typeof listMap;

export default listMap[VITE_RUNTIME_TYPE as listMapKey];
