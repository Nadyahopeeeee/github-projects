import React from 'react';

import styles from './index.module.css';
import SearchBar from '../SearchBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <SearchBar />
    </header>
  );
};

export default Header;
