import { IConfig } from 'umi-types';

const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      Routes: ['./src/components/Authorized/index'],
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/productList/:init?', exact: false},
        { path: '/cart', exact: false}
      ]
    }
  ],
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true
      },
      dynamicImport: {
        webpackChunkName: true
      },
      title: 'mall',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/
        ],
      },
    }],
    ['@umijs/plugin-qiankun', { master: {} }]
  ],
}

export default config;
