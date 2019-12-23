import { IConfig } from 'umi-types';

const config: IConfig =  {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' }
  //     ]
  //   }
  // ],
  base: `/cart`,
  mountElementId: 'cart-root',
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'cart',
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
