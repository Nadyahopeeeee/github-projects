import React from 'react';

import styles from './index.module.css';
import PaginationBlock from '../PaginationBlock';
import SelectBlock from '../SelectBlock';

const ButtomContent = () => {
  return (
    <div className={styles.wrapper}>
      <SelectBlock />
      <PaginationBlock />
      <div />
    </div>
  );
};

export default ButtomContent;
