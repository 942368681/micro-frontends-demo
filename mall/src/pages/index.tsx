import React from 'react';
import { connect } from 'dva';
import styles from './index.css';

interface IProps {
  dispatch: any,
  text: string,
  userName: string
}
interface IState {
  aState: string;
  bState: string;
}
interface GlobalState {
  global: {
    text: string,
    userInfo: {
      userName: string
    }
  }
}
class App extends React.PureComponent<IProps, IState> {

  state = {
    aState: '',
    bState: '',
  };

  render() {
    const { text, userName } = this.props;

    const title = userName ? `welcome ${userName} !` : '未登录';

    return (
      <div className={styles.normal}>
        <h1>{text}</h1>
        <h2>{title}</h2>
      </div>
    );
  };
};

export default connect((globalState: GlobalState) => {
  return {
    text: globalState.global.text,
    userName: globalState.global.userInfo.userName
  };
})(App);
