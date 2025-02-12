
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 1,
    "route": "/udi/:udi"
  },
  {
    "renderMode": 1,
    "route": "/lng/:lng"
  },
  {
    "renderMode": 1,
    "route": "/lookup-udi/:udi"
  },
  {
    "renderMode": 1,
    "route": "/display-translated/:udi/:lng"
  },
  {
    "renderMode": 1,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 712, hash: 'c3a6dccf45080b994b85ba810ff05eaaf2c76d50f46285d34e652302ecc33cf9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1038, hash: '099f905d4a0d45c5f3ac8f9c0a701e8a413496a2460da9be9504bf1346bf21fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-2WE25WQB.css', {size: 476, hash: 'yuAc3wiAcRY', text: () => import('./assets-chunks/styles-2WE25WQB_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
