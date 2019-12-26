import router from 'umi/router';
import {
    message
} from 'antd';
import request from './utils/request';

let SUB_APPS = [];
let _qiankun_timer = null;
let _patchRoutes_timer = null;

export const dva = {
    config: {
        onError(e) {
            e.preventDefault();
            message.error(e.message);
        }
    },
    plugins: [
        require('dva-logger')(),
    ],
};

export function render(oldRender) {
    const localUserInfo = JSON.parse(window.localStorage.getItem('userInfo'));
    if (localUserInfo && localUserInfo.userId) {
        // setTimeout(() => {
            request('/api/appList', {
                method: 'GET'
            }).then(res => {
                const {
                    data: {
                        list
                    }
                } = res;
    
                SUB_APPS = list.map(item => ({
                    ...item,
                    base: `/${item.name}`,
                    history: 'browser',
                    mountElementId: 'root-slave',
                    props: {
                        app: item.name,
                        mainAppStore: window.g_app._store,
                        router
                    }
                }));
    
                oldRender();
            });
        // }, 2000);
    } else {
        clearInterval(_qiankun_timer);
        clearInterval(_patchRoutes_timer);
        router.replace('/login');
        oldRender();
    }
};

export const qiankun = new Promise(resolve => {
    _qiankun_timer = setInterval(() => {
        if (SUB_APPS.length) {
            clearInterval(_qiankun_timer);
            resolve({
                // 注册子应用信息
                apps: SUB_APPS,
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
            });
        }
    }, 0);
});

export function patchRoutes(routes) {
    _patchRoutes_timer = setInterval(() => {
        if (SUB_APPS.length) {
            clearInterval(_patchRoutes_timer);
            const resRoutes = SUB_APPS.map(item => ({
                path: item.base,
                exact: false,
                _title: 'mall',
                _title_default: 'mall'
            }));
            routes[0].routes.splice(1, 0, ...resRoutes);
        }
    }, 0);
}

export function onRouteChange({
    location,
    routes,
    action
}) {
    // console.log('111111111')
}

export function modifyRouteProps(props) {
    return {
        ...props,
        SUB_APPS
    };
}
