export default [
  {
    text: '页面标识',
    name: 'name',
    disabled: true,
    extra: '在多页面的情况下用来指定要打开的页面',
  },
  {
    text: '页面标题',
    name: 'title',
  },
  {
    name: 'layout',
    text: '容器布局',
    type: 'select',
    defaultValue: 'absolute',
    options: [
      { value: 'absolute', text: '绝对定位' },
      { value: 'relative', text: '流式布局' },
    ],
  },
];
