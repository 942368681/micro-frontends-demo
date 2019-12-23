import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './index.css';

interface IProps {
  dispatch: any,
  text: string
}
interface IState {
  aState: string;
  bState: string;
}
interface GlobalState {
  global: {
    text: string
  }
}
class App extends React.PureComponent<IProps, IState> {
  // constructor (props: IProps) {
  //   super(props);
  //   this.state = {
  //     aState: '11',
  //     bState: '22'
  //   }
  // };
  state = {
    aState: '',
    bState: '',
  };

  changeText = () => {

    const { dispatch } = this.props;
    dispatch({
      type: 'global/setText',
      text: "首页"
    });
  }

  render() {
    const { text } = this.props;

    return (
      <div className={styles.normal}>
        <h2>{text}</h2>
        <Button type="primary" onClick={this.changeText}>click</Button>
      </div>
    );
  };
};

export default connect((state: GlobalState) => {
  return {
    text: state.global.text
  };
})(App);
