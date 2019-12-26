import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Form, Icon, Input, Button } from 'antd';

const Login: React.FC = (props: any) => {
    const { getFieldDecorator } = props.form;
    const handleSubmit =( e: any) => {
        e.preventDefault();
        props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { dispatch } = props;
                dispatch({
                    type: 'global/login',
                    payload: values
                });
            }
        });
    };
    return (
        <div className={styles.container}>
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名！' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码！' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default connect()(WrappedNormalLoginForm);
