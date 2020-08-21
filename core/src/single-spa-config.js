import { registerApplication, start } from 'single-spa';

/*runScript：一个promise同步方法。可以代替创建一个script标签，然后加载服务*/
const runScript = async (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });
};

// Simple usage
registerApplication(
  'app1',
  async () => {
    await runScript('http://localhost:3001/js/app.js');
    await runScript('http://localhost:3001/js/about.js');
    return window.APP1;
  },
  (location) => location.pathname.startsWith('/app1'),
  { some: 'app1' }
);
// Config with more expressive API
registerApplication({
  name: 'app2',
  app: async () => {
    await runScript('http://localhost:3002/js/app.js');
    await runScript('http://localhost:3002/js/about.js');
    return window.APP2;
  },
  activeWhen: '/app2',
  customProps: {
    some: 'app2'
  }
});

start();
