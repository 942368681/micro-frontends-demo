export default {
    // 登录
    'POST /api/users/login': (req, res) => {
        console.log(req)
        res.send({
            userName: 'sfl',
            userId: '242515',
            token: '123'
        });
        // res.end();
    },
};
