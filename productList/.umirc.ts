import { IConfig } from 'umi-types';

const config: IConfig =  {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' },
  //       { path: '/list', component: '../pages/list/index' }
  //     ]
  //   }
  // ],
  base: `/productList`,
  mountElementId: 'productList-root',
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'productList',
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
    '@umijs/plugin-qiankun'
  ],
}

export default config;
