
import React from 'react';
import router from 'umi/router';
import styles from './index.css';

interface IProps {
  location: any
}
interface IState {

}

class AuthorizedRoute extends React.PureComponent<IProps, IState> {
  componentDidMount() {
    const localUserInfo: any = window.localStorage.getItem('userInfo');
    if (!localUserInfo) {
      router.replace('/login');
    } else {
      const { pathname, search } = this.props.location;
      const url = pathname === '/login' ? '/' : (pathname + search);
      router.push(url);
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
