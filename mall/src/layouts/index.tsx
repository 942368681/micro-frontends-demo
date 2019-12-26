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

  const extraMenuListDom = () => {
    const menus = props.SUB_APPS.map((item: any) => {
      return(
        <Menu.Item key={item.base}>
          <Link to={item.base}>{item.title}</Link>
        </Menu.Item>
      );
    });
    return menus;
  };

  const contentDom = pathname === '/' ? props.children : null;

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
            {extraMenuListDom()}
          </Menu>
        </Header>
        <Content>
          <div id="root-slave">{contentDom}</div>
        </Content>
        <Footer className={styles.footer}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
};

export default BasicLayout;
