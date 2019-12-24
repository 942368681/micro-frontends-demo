import React from 'react';
import router from 'umi/router';
import styles from './index.css';

export default function(props: any) {
  console.log(props);
  const toDetail = () => {
    router.push('/list');
  }
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <li onClick={toDetail}>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
    </div>
  );
}

