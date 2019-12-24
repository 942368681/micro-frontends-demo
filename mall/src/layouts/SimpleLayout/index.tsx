import React from 'react';
import styles from './index.css';
import Login from '../../pages/Login';

const SimpleLayout: React.FC = (props: any) => {

  return (
    <div className={styles.container}>
      <Login/>
    </div>
  );
};

export default SimpleLayout;
