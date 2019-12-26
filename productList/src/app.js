let mainAppProps = {};
export const qiankun = {
    // 应用加载之前
    async bootstrap(props) {
        console.log('productListApp bootstrap', props);
        mainAppProps = props;
    },
    // 应用 render 之前触发
    async mount(props) {
        // console.log('app1 mount', props);
        const { router } = props;
        router.replace('/productList');
    },
    // 应用卸载之后触发
    async unmount(props) {
        // console.log('app1 unmount', props);
    }
};

export function modifyRouteProps(props, { route }) {
    return { ...props, mainAppProps };
}
