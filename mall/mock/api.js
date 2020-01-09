export default {
    // 获取应用列表
    'GET /api/appList': {
        list: [
            {
                title: '商品列表',
                name: 'productList',
                entry: '//localhost:8001'
            },
            {
                title: '购物车',
                name: 'cart',
                entry: '//localhost:8002'
            },
            {
                title: '教辅作业',
                name: 'EAssignmentTeacherWeb',
                entry: '//localhost:8003'
            },
            // {
            //     title: 'EAssignmentTeacherWeb',
            //     name: 'EAssignmentTeacherWeb',
            //     entry: '//192.168.200.242:8000'
            // }
        ]
    },
    // 登录
    'POST /api/users/login': (req, res) => {
        console.log(req)
        res.send({
            userName: 'sfl',
            userId: '242515',
            token: '123'
        });
    },
};
