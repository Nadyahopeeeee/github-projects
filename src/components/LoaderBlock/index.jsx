import React from 'react';

import styles from './index.module.css';

const LoaderBlock = () => {
  return (
    <div className={styles.loader}>
      <h2 className={styles.title}>Поиск проектов...</h2>
      <div className={styles.fakeContent}></div>
    </div>
  );
};

export default LoaderBlock;
