
import React from 'react';
import router from 'umi/router';
import styles from './index.css';

interface IProps {
  location: any
}
interface IState {

}

class AuthorizedRoute extends React.PureComponent<IProps, IState> {
  componentDidMount () {
    const localUserInfo: any = window.localStorage.getItem('userInfo');
    if (!localUserInfo) {
      router.replace('/login');
    } else {
      const url = this.props.location.pathname;
      const pathname = url === '/login' ? '/' : url;
      router.push(pathname);
    }
  }
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  };
};

export default AuthorizedRoute;
