import router from 'umi/router';

console.log(router);

export const dva = {
    config: {
        onError(e) {
            e.preventDefault();
            console.error(e.message);
        }
    },
    plugins: [
        require('dva-logger')(),
    ],
};

const redirect = () => {
    console.log('handle!!!!');
}

export const qiankun = fetch('/config').then(() => ({
    // 注册子应用信息
    apps: [
        {
            name: 'productList', // 唯一 id
            entry: '//localhost:8001', // html entry
            base: '/productList', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
            history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
            mountElementId: 'root-slave',
            props: {
                loading: true,
                redirect
            }
        },
        {
            name: 'cart', // 唯一 id
            entry: '//localhost:8002', // html entry
            base: '/cart', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
            history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
            mountElementId: 'root-slave',
            props: {
                loading: true
            }
        },
    ],
    jsSandbox: true, // 是否启用 js 沙箱，默认为 false
    prefetch: true, // 是否启用 prefetch 特性，默认为 true
    lifeCycles: {
        beforeLoad: props => {
            // console.log(props);
        },
        beforeMount: props => {
            // console.log(props);
        },
        afterMount: props => {
            // console.log(props);
        },
        beforeUnmount: props => {
            // console.log(props);
        },
        afterUnmount: props => {
            // console.log(props);
        }
    }
}));
