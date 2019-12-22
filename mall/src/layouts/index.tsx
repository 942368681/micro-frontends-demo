import React from 'react';
import Link from 'umi/link';
import styles from './index.css';
import { Layout, Menu } from 'antd';
const { Header, Footer, Content } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.appContainer}>
      {/* <h1 className={styles.title}>Welcome!</h1>
      {props.children}
      <div id="root-slave" /> */}
      <Layout>
        <Header className={styles.header}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="list">
              <Link to="/productList">商品列表</Link>
            </Menu.Item>
            <Menu.Item key="cart">
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
