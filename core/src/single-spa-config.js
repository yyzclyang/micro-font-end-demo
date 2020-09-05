import { registerApplication, start } from 'single-spa';
import axios from 'axios';
import 'systemjs/dist/system';
import 'systemjs/dist/extras/use-default';
import store from './store';

// 根据子应用打包的 manifest.json 文件加载 js
const importAppByManifest = async (url, bundle) => {
  const { data } = await axios.get(url).catch(() => {
    console.log('请求 manifest.json 失败');
  });
  const { entrypoints, publicPath } = data;
  const assets = entrypoints[bundle].assets;
  const application = await global.System.import(publicPath + assets[0]).catch(
    () => {
      console.log('加载子应用 js 文件失败');
    }
  );
  return application;
};
// Simple usage
registerApplication(
  'app1',
  async () =>
    await importAppByManifest('http://127.0.0.1:3001/manifest.json', 'app'),
  (location) => location.pathname.startsWith('/app1'),
  { store: store }
);

// Config with more expressive API
registerApplication({
  name: 'app2',
  app: async () =>
    await importAppByManifest('http://127.0.0.1:3002/manifest.json', 'app'),
  activeWhen: '/app2',
  customProps: {
    some: 'app2'
  }
});

start();
