import React from 'react';
import styles from './index.css';

export default function(props: any) {
  console.log(props);
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <li>无</li>
      </ul>
    </div>
  );
}
