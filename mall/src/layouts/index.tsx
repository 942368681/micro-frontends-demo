import React from 'react';
import Link from 'umi/link';
import styles from './index.css';
import { Layout, Menu } from 'antd';
const { Header, Footer, Content } = Layout;
import SimpleLayout from './SimpleLayout';

const BasicLayout: React.FC = (props: any) => {
  const { location } = props;
  const { pathname } = location;
  if (pathname === '/login') {
    return <SimpleLayout>{props.children}</SimpleLayout>;
  }
  
  const selectKey = '/' + pathname.split('/')[1];
  console.log('selectKey', selectKey)
  return (
    <div className={styles.appContainer}>
      <Layout>
        <Header className={styles.header}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectKey]}
            selectedKeys={[selectKey]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/productList">
              <Link to="/productList">商品列表</Link>
            </Menu.Item>
            <Menu.Item key="/cart">
              <Link to="/cart">购物车</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          {props.children}
          <div id="root-slave" />
        </Content>
        <Footer className={styles.footer}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
};

export default BasicLayout;
