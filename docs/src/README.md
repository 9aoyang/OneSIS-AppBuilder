# 环境配置

## 克隆项目

```bash
git clone https://github.com/9aoyang/OneSIS-AppBuilder.git
```

## 安装依赖

项目使用 pnpm 作为包管理工具，如尚未安装，请参考[安装指南](https://pnpm.io/zh/installation)

```bash
# 进入项目根目录
cd OneSIS-AppBuilder
pnpm bootstrap
```

## 启动项目

项目中有 `playground` 和 `runtime` 两个文件夹, 启动 `playground` 时会自动加载 `runtime`

```bash
# 启动 Vue3 runtime
pnpm pg
```

如果上面的流程都 ok，应该已经看到 `playground` 在浏览器正常运行了：

<img src="https://s1.ax1x.com/2022/08/18/vrmRGn.png" width="50%">

## 组件开发

### 0.组件规范

组件的基本目录结构如下图所示

```bash
runtime/
│  vue3/
│  ├─ components/
│  │  ├─ demo/               组件名称
│  │  │  ├─ src/
│  │  │  │  ├─ formConfig.ts 表单配置描述
│  │  │  │  ├─ index.vue     组件样式、逻辑代码
│  │  │  │  ├─ initValue.ts  表单初始值
│  │  │  ├─ index.ts 
```

- `runtime/vue3/components/demo`

目录下已经提供了一个示例组件，可以在开发时参考借鉴或直接使用。

### 1.组件详解

- `formConfig.ts`

```ts
// formConfig.js
export default [
  {
    type: 'select',
    text: '字体颜色',
    name: 'color',
    options: [
      {
        text: '红色字体',
        value: 'red',
      },
      {
        text: '蓝色字体',
        value: 'blue',
      },
    ],
  },
  {
    name: 'text',
    text: '配置文案',
  },
];

```

这里一共提供了两个组件的配置项：字体颜色`color`, 配置文案`text`，选中组件时，最终会渲染到表单配置中，用于提供修改组件行为的配置项。如下图红框中的部分：

<img src="https://s1.ax1x.com/2022/08/18/vrMGQI.png" width="50%">

- `initValue.ts`

```ts
// initValue.js
export default {
  color: 'red',
  text: '一段文字',
};

```

这里就是配置组件的初始值，如上图所示“一段文字”这几个字的默认颜色为红色

- `index.vue`

```vue
<template>
  <div>
    <span>this is a Demo component:</span>
    <!-- 这里的 `config.color` 和 `config.text` 
    就是对应 `formConfig.js` 里的 `color` 和 `text`，
    组件任意想配置的部分都可以通过这种方式来实现 -->
    <span :style="{ color: config.color }">{{ config.text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },

  setup() {},
};
</script>

```

- `runtime/vue3/components/demo/index.ts`

```ts
import Demo from './src/index.vue';

export { default as config } from './src/formConfig';
export { default as value } from './src/initValue';

export default Demo;

```

通过 `index.ts` 导出 `Demo` 组件

- `runtime/vue3/components/index.ts`

```ts
import demo from './demo';

const ui: Record<string, any> = {
  demo: demo,
};

export default ui;
```

这里导出 `components` 中的所有组件, 这里要注意对象中的 `key` 值要和 `playground/src/configs/componentGroupList.ts` 中组件的 `type` 一一对应，接下来会讲到

### 2.在 `playground` 中添加组件

把新添加的组件添加到 `playground/src/configs/componentGroupList.ts` 中

<img src="https://s1.ax1x.com/2022/08/21/vylGa6.png" width="50%">

添加到红框里的位置，其中：

- `icon`： 可以使用 [Element Plus 提供的 icon](https://element-plus.org/zh-CN/component/icon.html)，或添加到项目资源后导入

- `text`：左侧组件列表展示的名称

- `type`：跟 `playground/src/configs/componentGroupList.ts` 中组件的 `type` 一一对应

### 3.使用组件

添加了新组件后，需要重新 build，然后运行项目后就可以正常使用了：

```shell
# 重新 build
pnpm build:playground
# 启动项目
pnpm pg
```
