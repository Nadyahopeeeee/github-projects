import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './index.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
}

export default App;
