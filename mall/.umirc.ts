import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/productList'},
        { path: '/cart'}
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true
      },
      title: 'mall',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
    [
      '@umijs/plugin-qiankun',
      {
        master: {
          apps: [
            {
              name: 'productList', // 唯一 id
              entry: '//localhost:8001', // html entry
              base: '/productList', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
              // history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
              mountElementId: 'root-slave'
            },
            {
              name: 'cart', // 唯一 id
              entry: '//localhost:8002', // html entry
              base: '/cart', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
              // history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
              mountElementId: 'root-slave'
            },
          ],
          jsSandbox: true, // 是否启用 js 沙箱，默认为 false
          prefetch: true, // 是否启用 prefetch 特性，默认为 true
        },
      },
    ]
  ],
}

export default config;
