import React from 'react';

import styles from './index.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        title="Репозиторий с проектом"
        className={styles.link}
        href="https://github.com/Nadyahopeeeee/github-projects"
      >
        <span className={styles.icon}></span>
      </a>
    </footer>
  );
};

export default Footer;
