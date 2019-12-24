import * as usersService from '../services/users';
import router from 'umi/router';

const initUserInfo = window.localStorage.userInfo ? JSON.parse(window.localStorage.userInfo) : {} 

export default {
    namespace: 'global',
    state: {
        text: '首页',
        userInfo: initUserInfo
    },
    reducers: {
        setText (state, payload) {
            const { text } = payload;
            state.text = text;
        },
        saveUserInfo (state, payload) {
            const { data } = payload;
            state.userInfo = data;
            window.localStorage.userInfo = JSON.stringify(data);
        }
    },
    effects: {
        *login({ payload: { username, password } }, { call, put }) {
            const { data } = yield call(usersService.login, { username, password });
            yield put({
                type: 'saveUserInfo',
                data
            });
            router.replace('/');
        },
    },
};
