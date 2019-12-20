import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Welcome!</h1>
      {props.children}
      <div id="root-slave" />
    </div>
  );
};

export default BasicLayout;
