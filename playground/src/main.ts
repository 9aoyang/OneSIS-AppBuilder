import './polyfills';

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import * as monaco from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

import MagicEditor from '@tmagic/editor';
import MagicForm from '@tmagic/form';
import MagicTable from '@tmagic/table';

import App from './App.vue';
import router from './route';

import 'element-plus/dist/index.css';
import '@tmagic/editor/src/theme/index.scss';

// @ts-ignore
globalThis.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === 'json') {
      return new JsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new CssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new HtmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new TsWorker();
    }
    return new EditorWorker();
  },
};

monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

const app = createApp(App);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(MagicEditor);
app.use(MagicForm);
app.use(MagicTable);
app.mount('#app');
